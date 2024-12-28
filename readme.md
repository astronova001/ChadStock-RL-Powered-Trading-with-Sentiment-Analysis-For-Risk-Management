### Backend

The backend is built using Flask, ensuring scalability and robust performance. It handles data processing, model training, and API endpoints for the frontend to interact with. The project will be migrated to Django later.

- **Configuration Files:**
    - `settings.py`: Django settings for configuring the project (to be used after migration).
    - `urls.py`: URL routing for the Django application (to be used after migration).

The steps to run it are simple:

1. After cloning the repository, navigate to the `frontend` directory and use the following command:
    ```sh
    npm i --legacy-peer-deps
    ```
2. Next, run the command:
    ```sh
    npm run dev
    ```
   As I am using React Vite for the frontend, after that, the link will appear:
    ```
    Local: http://localhost:5173/
    ```
   Click on it to go to the dashboard.

3. Now, navigate to the `backend` folder and run:
    ```sh
    pip install -r requirements.txt
    ```
   to install all required libraries.

4. Finally, run `api.py` in the `backend` folder. Now you can use the dashboard for backtesting.

- **Dependencies:**
    - Flask and related libraries for backend development.
    - REST framework for building APIs.
    - Celery for handling asynchronous tasks.
    - Redis for caching and message brokering.

## Project Overview

This project focuses on backtesting stock trading strategies using Reinforcement Learning (RL). Users can backtest stocks over any time range to evaluate their RL model performance. The project is ongoing and not yet completed.

## Future Objectives

The following features are planned for future development:
- **Live Trading**: Implement live trading capabilities.
- **Simulation**: Provide simulation environments for testing strategies.
- **Forward Testing**: Enable forward testing to validate strategies in real-time.
- **Custom Model Support**: Allow users to build and integrate their own models, including various types beyond RL, such as sentiment analysis.

## Usage

To use the project, follow these steps:

1. **Home Page**: After starting the server, you’ll land on the home page. This page introduces you to the project and its features.

2. **Navigation**: Use the navigation bar to switch between different pages, such as:
    - **Dashboard**: Access the main dashboard for trading insights.
    - **Settings**: Configure your trading preferences and risk management settings.
    - **Reports**: View detailed reports on trading performance and backtesting results.

## Contributing

We welcome contributions to the project. Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

We would like to thank the open-source community for their valuable contributions and resources that made this project possible.

## Disclaimers

- This project is for educational and research purposes only. It is not intended to provide financial advice or recommendations.
- Trading involves significant risk and may result in substantial or complete loss of funds. Users should conduct their own research and consult with a licensed financial advisor before making any trading decisions.
- The developers are not responsible for any financial losses incurred while using this project.

## Results

Below are some images showcasing the results and features of the project:

<img src="https://github.com/astronova001/RL-Based-Predictive-Trading-with-Sentiment-Risk-Management-and-Backtesting/blob/main/Results/chd.mp4" width="550" /> 
<img src="https://github.com/astronova001/Krushak-Agri-Chat-Bot/blob/main/Results/chat.png" width="400" />  
<img src="https://github.com/astronova001/Krushak-Agri-Chat-Bot/blob/main/Results/gov1.png" width="400" />  
<img src="https://github.com/astronova001/Krushak-Agri-Chat-Bot/blob/main/Results/gov2.png" width="400" /> 
