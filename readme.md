---

# ChadStock: RL-Powered Trading with Sentiment and Risk Management  

## Overview  

ChadStock is a cutting-edge platform that leverages **Reinforcement Learning (RL)** to develop predictive trading strategies. It integrates **sentiment analysis** for enhanced risk management, enabling traders to preemptively shut down trades during adverse market news, potentially saving significant capital. This feature is particularly useful in mitigating losses during market drawdowns, a period where most algorithms struggle to generate profits.  

The platform currently supports backtesting with the **PPO (Proximal Policy Optimization)** model and provides tools for customizing parameters like **slippage**, **trade commission**, and **starting amount**. ChadStock is designed to evolve with live trading capabilities, enhanced analytics, and the addition of advanced sentiment-based decision-making. 

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

1. **Sentiment Analysis for Risk Management**  
   - Integrates real-time news and social media sentiment analysis to detect negative trends and preemptively halt trades. This feature aims to minimize losses during market downturns and significant events.  

2. **Live Trading with Sentiment Insights**  
   - Real-time trade execution with integrated sentiment-driven alerts to adapt to market changes swiftly.  

3. **Expanded DRL Models**  
   - Addition of **DDPG, A2C, and DQN** to provide a variety of RL-based strategies for enhanced performance in diverse market conditions.  

4. **Workspace for Model Training and Customization**  
   - A sandbox environment for training and experimenting with custom machine learning models.  

5. **Advanced Backtesting and Visualizations**  
   - Deeper insights with new metrics, visualizations, and portfolio analytics.  
---

### Sentiment Analysis: A Game-Changer  

The integration of sentiment analysis distinguishes ChadStock as a forward-thinking trading platform. By combining RL strategies with real-time sentiment data, traders can navigate unpredictable market environments more effectively. This feature supports:  

- **Market Event Detection**: Spotting negative news or sentiment spikes from social media and news platforms.  
- **Automated Trade Management**: Halting trades during adverse events to protect portfolios.  
- **Improved Decision-Making**: Leveraging sentiment data as an additional layer of intelligence in trading strategies.  

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
