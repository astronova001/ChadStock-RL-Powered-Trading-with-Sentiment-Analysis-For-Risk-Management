from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from TradingEnv import StockTradingEnv
from pybroker import YFinance
import pandas as pd
from stable_baselines3 import PPO
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import traceback
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sadasdvxcvSdadwd'  # Replace with your actual secret key
app.config['WTF_CSRF_CHECK_DEFAULT'] = False  # Disable default CSRF protection for all routes

cors = CORS(app)  # Allow CORS for all domains on all routes.
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/process', methods=['POST'])
@cross_origin()  # Allow CORS for this route
def process_and_test():
    # model_path = request.form.get('botType', default="TradingAgent")
    print( request.form.get('ticker')
)
    ticker = request.form.get('ticker', default="ASIANPAINT.NS")
    start_date = request.form.get('start', default='1/1/2024')
    end_date = request.form.get('end', default='31/10/2024')
    initial_balance = request.form.get('amount', default=10000, type=int)
    commission_fee = request.form.get('commission', default=2, type=float)/1000
    slippage_cost = request.form.get('slippage_cost', default=2, type=float)/1000
    bot = f"models/PPO_{ticker}"

    try:
        yfinance = YFinance()
        df = yfinance.query([ticker], start_date=start_date, end_date=end_date)
        df['date'] = pd.to_datetime(df['date']).dt.strftime('%Y-%m-%d')  # Convert date to standard string format        
        env = StockTradingEnv(df, initial_balance=initial_balance, commission_fee=commission_fee, slippage_cost=slippage_cost)
        model = PPO.load(bot, env=env)

        # Test the model
        vec_env = model.get_env()
        observation = vec_env.reset()
        step_rewards = []
        eps = 1e-8  # Define eps
        for _ in range(len(df['adj_close'])):  # Test for the entire dataset 
            action, _ = model.predict(observation)
            observation, rewards, done, info = vec_env.step(action)
            if done:
                break

        step_rewards = []
        en_data = env.render_df.set_index('Date')

        for i in range(len(en_data)):
            step_rewards.append({
                "Date": en_data.index[i],  # en_data.index[i] is already a string
                "market_value": int(en_data.iloc[i]['market_value']),
                "balance": int(en_data.iloc[i]['balance']),
                "stock_owned": int(en_data.iloc[i]['stock_owned']),
                "price": int(en_data.iloc[i]['price']),
                "action": 0 if en_data.iloc[i]['action'] == "buy" else 1,
                "amount": int(en_data.iloc[i]['amount'])  # Assuming amount is the quantity of shares held
            })

        if not step_rewards:
            return jsonify({"error": "No steps were processed; check your dataset or model."}), 500

        # Calculate metrics
        initial_market_value = step_rewards[0]["market_value"]
        final_market_value = step_rewards[-1]["market_value"]
        total_profit = final_market_value - initial_market_value
        profit_pct = (total_profit / initial_market_value) * 100
        num_trades = len([x for x in step_rewards if x["action"] in [0, 1]])
        profitable_trades = len([x for x in step_rewards if x["action"] > 1 and x["market_value"] > initial_market_value])
        accuracy = (profitable_trades / max(num_trades, 1)) * 100

        # Prepare the response
        response = {
            "message": "Processing and testing completed successfully!",
            "metrics": {
                "initial_balance": initial_balance,
                "final_balance": step_rewards[-1]["balance"],
                "total_profit": format(total_profit, '.2f'),
                "profit_pct":format( profit_pct,'.2f'),
                "num_trades": num_trades,
                "profitable_trades": profitable_trades,
                "accuracy": accuracy
            },
            "observations": step_rewards,
            "data": df.to_dict(orient='records') 
        }

        return jsonify(response), 200

    except Exception as e:
        print(f"Error: {e}")
        print(traceback.format_exc())
        return jsonify({"error": "An error occurred during processing. Check logs for details."}), 500

@app.route('/chart_data', methods=['GET'])
def download_data():
    ticker = request.args.get('ticker', default="ASIANPAINT.NS")
    start_date = request.args.get('start', default='1/1/2024')
    end_date = request.args.get('end', default='31/10/2024')

    try:
        yfinance = YFinance()
        df = yfinance.query([ticker], start_date=start_date, end_date=end_date)
        df['date'] = pd.to_datetime(df['date']).dt.date

        csv_data = df.to_csv(index=False)
        response = app.response_class(
            csv_data,
            mimetype='text/csv',
            headers={'Content-Disposition': f'attachment;filename={ticker}_data.csv'}
        )
        return response

    except Exception as e:
        print(f"Error: {e}")
        print(traceback.format_exc())
        return jsonify({"error": "An error occurred during processing. Check logs for details."}), 500

if __name__ == "__main__":
    app.run(debug=True)
