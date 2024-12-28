import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import '../styles/Main_page.css';
import Graph from '../components/Graph';
import toast from 'react-hot-toast';
import axios from 'axios';
import { stockEnum } from '../data/stocksenum';
import Table from '../components/Table';
const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

const Main_page = () => {
    const [botConfig, setBotConfig] = useState({
        ticker: '',
        start: formatDate('1/1/2024'),
        end: formatDate('31/10/2024'),
        amount: '100000',
        slippage_cost: '0.05',
        commission: '0.2',
    });

    const [loading, setLoading] = useState(false);
    const [jsonData, setJsonData] = useState([]);
    const [responseData, setResponseData] = useState({
        accuracy: 0,
        final_balance: 0,
        initial_balance: 0,
        num_trades: 0,
        profit_pct: 0,
        profitable_trades: 0,
        total_profit: 0,
    });
    const [responsejsonData, setResponseJsonData] = useState([]);

    const handleBotConfigChange = (e) => {
        const { name, value } = e.target;
        setBotConfig((prevConfig) => ({
            ...prevConfig,
            [name]: value,
        }));
    };

    const handleOnStartBot = async () => {
        console.log('Bot Config:', botConfig);

        // Validate inputs
        if (!botConfig.ticker) {
            toast.error('Please select a stock');
            return;
        }
        if (!botConfig.amount || botConfig.amount <= 0) {
            toast.error('Please enter a valid amount');
            return;
        }
        if (!botConfig.slippage_cost || botConfig.slippage_cost < 0) {
            toast.error('Slippage cost should be greater than or equal to 0');
            return;
        }
        if (!botConfig.commission || botConfig.commission < 0) {
            toast.error('Commission should be greater than or equal to 0');
            return;
        }

        // Adjust slippage_cost and commission
        const adjustedSlippageCost = botConfig.slippage_cost ;
        const adjustedCommission = botConfig.commission ;
        setBotConfig((prevConfig) => ({
            ...prevConfig,
            slippage_cost: adjustedSlippageCost,
            commission: adjustedCommission,
        }));

        setLoading(true);

        const formData = new FormData();
        formData.append('ticker', botConfig.ticker);
        formData.append('start', botConfig.start);
        formData.append('end', botConfig.end);
        formData.append('amount', botConfig.amount);
        formData.append('slippage_cost', adjustedSlippageCost);
        formData.append('commission', adjustedCommission);

        try {
            const response = await axios.post('http://127.0.0.1:5000/process', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data) {
                toast.success('Bot started successfully');
                setResponseData(response.data.metrics);
                setJsonData(response.data.data);
                setResponseJsonData(response.data.observations);
            } else {
                toast.error('An error occurred while starting the bot');
            }
        } catch (error) {
            console.error('Error starting the bot:', error);
            toast.error('Failed to start the bot');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            {/* <div className="header">
                <h1>Dashboard</h1>
            </div> */}
            {loading ? (
                <div className="loading-spinner">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="main-content">
                    <div className="graph-section">
                        <h2>Stock Price Graph</h2>
                        <Graph jsonData={jsonData} resposedata={responsejsonData} />
                    </div>
                    <div className="sidebar">
                        <div className="account-status">
                            <h3>Account Status</h3>
                            <div className="account-details">
                                <p><strong>Initial Balance:</strong> ₹{responseData.initial_balance}</p>
                                <p><strong>Final Balance:</strong> ₹{responseData.final_balance}</p>    
                                <p>
                                    <strong>Trade P&L:</strong>
                                    <span className={responseData.total_profit < 0 ? 'negative' : 'positive'}>
                                    ₹{responseData.total_profit}
                                        <span className={`triangle ${responseData.total_profit < 0 ? 'down-triangle' : 'up-triangle'}`}>
                                            {responseData.total_profit < 0 ? '▼' : '▲'}
                                        </span>
                                    </span>
                                </p>
                                <p>
                                    <strong>P&L Percentage:</strong>
                                    <span className={responseData.profit_pct < 0 ? 'negative' : 'positive'}>
                                        {responseData.profit_pct}% 
                                        <span className={`triangle ${responseData.profit_pct < 0 ? 'down-triangle' : 'up-triangle'}`}>
                                            {responseData.profit_pct < 0 ? '▼' : '▲'}
                                        </span>
                                    </span>
                                </p>
                                <p><strong>Number of Trades:</strong> {responseData.num_trades}</p>
                                <p><strong>Profitable Trades:</strong> {responseData.profitable_trades}</p>
                            </div>
                        </div>

                        <div className="bot-configuration">
                            <h3>Bot Configuration</h3>
                            <label>Stocks:</label>
                            <select
                                name="ticker"
                                value={botConfig.ticker}
                                onChange={handleBotConfigChange}
                            >
                                <option value="">Select Bot Type</option>
                                {Object.keys(stockEnum).map((key) => (
                                    <option key={key} value={key}>{stockEnum[key]}</option>
                                ))}
                            </select>

                            <label>Amount:</label>
                            <input
                                type="number"
                                name="amount"
                                value={botConfig.amount}
                                onChange={handleBotConfigChange}
                            />

                            <label>Slippage Cost:</label>
                            <input
                                type="number"
                                name="slippage_cost"
                                value={botConfig.slippage_cost}
                                onChange={handleBotConfigChange}
                                step={2}
                                max={101}
                                min={0}
                            />
                            <label>Commission:</label>
                            <input
                                type="number"
                                name="commission"
                                value={botConfig.commission}
                                onChange={handleBotConfigChange}
                                step={2}
                                max={101}
                                min={0}
                            />
                            <label>Start Date:</label>
                            <input
                                type="date"
                                name="start"
                                value={botConfig.start}
                                onChange={handleBotConfigChange}
                            />

                            <label>End Date:</label>
                            <input
                                type="date"
                                name="end"
                                value={botConfig.end}
                                onChange={handleBotConfigChange}
                            />
                        </div>

                        <button onClick={handleOnStartBot}>Get Response</button>
                    </div>

                  
                </div>
            )}

            <div className="table-section">
                <Table
                    responsejsonData={responsejsonData}
                ></Table>
                </div>
        </>
    );
};

export default Main_page;
