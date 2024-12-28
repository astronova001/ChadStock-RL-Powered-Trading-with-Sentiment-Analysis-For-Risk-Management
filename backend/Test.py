# validate.py
from TradingEnv import StockTradingEnv
from pybroker import YFinance
import pandas as pd
from stable_baselines3 import PPO
import os
os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'


# yfinance = YFinance()
# df = yfinance.query(['ASIANPAINT.NS'], start_date='1/1/2019', end_date='31/10/2024')
# df['date'] = pd.to_datetime(df['date']).dt.date
# df.to_csv('test_asian.csv')
df = pd.read_csv('test_asian.csv')
df['date'] = pd.to_datetime(df['date']).dt.date
env = StockTradingEnv(df, initial_balance=100000, commission_fee=0.0002, slippage_cost=0.0002)


model = PPO.load("PPO_Asian", env=env)

vec_env = model.get_env()
obs = vec_env.reset()
for i in range(len(df['adj_close'])):
    action, _ = model.predict(obs)
    obs, reward, done, info = vec_env.step(action)
    # env.render(action, 0, env.current_step, mode='human')

step_rewards = []
en_data = env.render_df.set_index('date')

for i in range(len(en_data)):
    step_rewards.append({
        "Date": en_data.index[i].strftime('%Y-%m-%d'),
        "market_value": int(en_data.iloc[i]['market_value']),
        "balance": int(en_data.iloc[i]['balance']),
        "stock_owned": int(en_data.iloc[i]['stock_owned']),
        "price": int(en_data.iloc[i]['price']),
        "action": 0 if en_data.iloc[i]['action'] == "buy" else 1,
        "amount": int(en_data.iloc[i]['amount'])  # Assuming amount is the quantity of shares held
    })

print(step_rewards)

# en_data=env.render_df.set_index('Date') 

# en_data.to_csv('result.csv')
    
env.render_all()