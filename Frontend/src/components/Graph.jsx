import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({ jsonData, resposedata }) => {
  console.log(resposedata);

  // Trace 1: Candlestick trace
  const trace1 = {
    type: 'candlestick',
    x: jsonData.map(item => item.date), // Extract only the date part
    close: jsonData.map(item => item.close),
    high: jsonData.map(item => item.high),
    low: jsonData.map(item => item.low),
    open: jsonData.map(item => item.open),
    name: 'Price',
  };

  // Trace 2: Stock Price with markers for buy and sell actions
  const trace2 = {
    type: 'scatter',
    mode: 'lines+markers+text',
    x: resposedata.map(item => item.Date),
    y: resposedata.map(item => item.price),
    name: 'Stock Price',
    line: {
      color: 'purple',
    },
    marker: {
      symbol: resposedata.map(item => {
        if (item.action === 0 && item.amount > 0) {
          return 'triangle-up'; // Green upward triangle for 'buy' action
        } else if (item.action === 1 && item.amount > 0) {
          return 'triangle-down'; // Red downward triangle for 'sell' action
        }
        return ''; // No marker for other actions
      }),
      color: resposedata.map(item => {
        if (item.action === 0 && item.amount > 0) {
          return 'green'; // Green for 'buy' action
        } else if (item.action === 1 && item.amount > 0) {
          return 'red'; // Red for 'sell' action
        }
        return 'transparent'; // No color for other actions
      }),
      size: 10, // Adjust the size of the triangles
    },
    text: resposedata.map(item => {
      if ((item.action === 0 || item.action === 1) && item.amount > 0) {
        return `${item.amount}`; // Show amount for buy/sell actions
      }
      return ''; // No text for other actions
    }),
    textposition: 'top center', // Position the amount text above the markers
    textfont: {
      size: 8,
      color: 'black',
    },
  };

  // Trace 3: Market Value (secondary y-axis)
  const trace3 = {
    type: 'line',
    x: resposedata.map(item => item.Date),
    y: resposedata.map(item => item.market_value),
    name: 'Market Value',
    mode: 'lines',
    line: {
      dash: 'dashdot',
      width: 4,
      color: 'rgba(128, 128, 128, 0.5)', // Grey color with reduced opacity
    },
    yaxis: 'y2', // This assigns trace3 to the second y-axis
  };

  // Layout for the chart
  const layout = {
    title: 'Portfolio Performance vs Stock Prices',
    xaxis: {
      rangeslider: {
        visible: true,
      },
      title: 'Time',
    },
    yaxis: {
      title: 'Stock Price', // Primary y-axis
      autorange: true, // Automatically adjust the y-axis range based on the data
      type: 'linear'

    },
    yaxis2: {
      title: 'Market Value', // Secondary y-axis
      overlaying: 'y', // Makes the second y-axis overlay the first y-axis
      side: 'right', // Places the secondary y-axis on the right
      scaleanchor: 'y', // Normalize the second y-axis with the primary y-axis
      autorange: true, // Automatically adjust the secondary y-axis range based on the data
      type: 'linear'

    },
    showlegend: true,
  };

  return (
    <Plot
      data={[trace1, trace2, trace3]}
      layout={{ ...layout, height: 800 }} // Increase the height of the plot
      config={{ responsive: true }}
    />
  );
};

export default Graph;
