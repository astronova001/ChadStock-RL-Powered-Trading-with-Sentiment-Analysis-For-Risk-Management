---

# Chad Stock - Deep Reinforcement Learning for Stock Trading Backtesting

## Overview

Chad Stock is an innovative backtesting and analytics platform designed to evaluate the performance of stock trading strategies using **Deep Reinforcement Learning (DRL)**. The application allows users to backtest stock trading strategies with customizable parameters, giving them the flexibility to adjust various settings such as **slippage, trade commission**, and **starting amount**. Unlike traditional backtesting systems that require predefined strategies, Chad Stock enables users to test models and observe how different parameters affect trading performance in real-time.

This platform uses **ReactJS** with **Vite** for the frontend and **Flask** for the backend, providing a smooth and responsive user experience. The project is designed to be scalable, with plans to introduce additional features such as live trading, paper trading, and workspace configuration for model training.

---

## Current Features

### 1. **Backtesting with Deep Reinforcement Learning (DRL)**
   - The platform currently supports backtesting with the **Proximal Policy Optimization (PPO)** model, which has shown the best results for stock trading simulations.
   - Users can select the stock, date range, and configure parameters to evaluate the performance of the PPO model.
   - Key parameters for customization include **slippage**, **trade commission**, and **starting capital**.
   - Upon submission, the platform instantly provides backtest results, including **portfolio value**, **profit percentage**, and a **detailed trade log**.

### 2. **Customizable Parameters**
   - Users can adjust essential backtesting parameters such as **slippage**, **trade commission**, and **starting amount**, making it adaptable to various trading strategies.

### 3. **Trade Book and Portfolio Tracking**
   - The platform displays a comprehensive **trade book**, allowing users to review each trade, including the time of execution and trade quantities. It also tracks the current portfolio value, profit, and trade history.

---

## Upcoming Features

- **Live Trades (Paper Trading)**: Simulate real trades with real-time data, without financial risk.
- **Model Customization and Training**: Configure and train supervised and reinforcement learning models.
- **Workspace for Model Training**: Experiment with algorithms, train models, and run multiple backtests.
- **Enhanced Analytics and Visualizations**: Advanced charts and insights for trading strategies.
- **Additional DRL Models**: Support for **DDPG**, **A2C**, and **DQN** for a comprehensive trading analysis.

---

## Getting Started

### Prerequisites

- Python 3.x
- Flask
- ReactJS with Vite
- Node.js
- Docker (optional for environment setup)
- Virtual Environment (for Python dependencies)

### Installation Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chad-stock.git
    cd chad-stock
    ```

2. Navigate to the `frontend` directory and install dependencies:
    ```sh
    npm i --legacy-peer-deps
    ```

3. Start the React frontend:
    ```sh
    npm run dev
    ```
    A link will appear in the terminal:
    ```
    Local: http://localhost:5173/
    ```
    Click on it to access the dashboard.

4. Navigate to the `backend` folder and install Python dependencies:
    ```sh
    pip install -r requirements.txt
    ```

5. Start the Flask backend:
    ```sh
    python api.py
    ```

You can now use the dashboard for backtesting.

---

## Disclaimers

- This project is for educational and research purposes only. It is not intended to provide financial advice or recommendations.
- Trading involves significant risk and may result in substantial or complete loss of funds. Users should conduct their own research and consult with a licensed financial advisor before making any trading decisions.
- The developers are not responsible for any financial losses incurred while using this project.

## Results

Below are some images showcasing the results and features of the project:

<img src="https://github.com/astronova001/RL-Based-Predictive-Trading-with-Sentiment-Risk-Management-and-Backtesting/blob/main/Results/chd.gif" width="550" /> 
<img src="https://github.com/astronova001/RL-Based-Predictive-Trading-with-Sentiment-Risk-Management-and-Backtesting/blob/main/Results/image.png" width="400" />  
<img src="https://github.com/astronova001/RL-Based-Predictive-Trading-with-Sentiment-Risk-Management-and-Backtesting/blob/main/Results/Screenshot%202024-12-27%20113038.png" width="400" />  
<img src="https://github.com/astronova001/RL-Based-Predictive-Trading-with-Sentiment-Risk-Management-and-Backtesting/blob/main/Results/Profit.png" width="400" /> 
<img src="https://github.com/astronova001/RL-Based-Predictive-Trading-with-Sentiment-Risk-Management-and-Backtesting/blob/main/Results/Screenshot%202024-12-27%20113409.png" width="400" /> 
