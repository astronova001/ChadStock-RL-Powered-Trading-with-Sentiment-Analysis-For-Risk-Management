# train.py
from TradingEnv import StockTradingEnv
from pybroker import YFinance
import pybroker
pybroker.enable_data_source_cache('yfinance')
import pandas as pd
from stable_baselines3 import PPO

yfinance = YFinance()
df = yfinance.query(['ASIANPAINT.NS'], start_date='1/1/2009', end_date='31/12/2017')
df['date'] = pd.to_datetime(df['date']).dt.date
df.to_csv('train_asian.csv')

# df = pd.read_csv('AAPL.csv')
# df['Date'] = pd.to_datetime(df['Date']).dt.date
env = StockTradingEnv(df, initial_balance=100000, commission_fee=0.0001, slippage_cost=0.005)

model = PPO("MlpPolicy", env, verbose=0)
model.learn(total_timesteps=100_000, progress_bar=True)
model.save("ppo_aapl")