import React, { useState } from 'react';
import '../styles/Table.css';
const Table = ({ responsejsonData }) => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data to include only rows where amount > 0
  const filteredData = responsejsonData ? responsejsonData.filter(data => data.amount > 0) : [];

  if (filteredData.length === 0) {
    return null; // Don't display anything if no data with amount > 0
  }

  // Calculate the total pages based on the filtered data length and rows per page
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Calculate the current rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle the page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="table-section">
      <h2 className="table-title">Trade Details</h2>
      <table className="trade-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Market Value</th>
            <th>Price</th>
            <th>Stock Owned</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((data, index) => (
            <tr key={index}>
              <td>{data.Date}</td>
              <td>{data.action === 0 ? 'Buy' : data.action === 1 ? 'Sell' : 'Hold'}</td>
              <td>{data.amount}</td>
              <td>{data.balance}</td>
              <td>{data.market_value}</td>
              <td>{data.price}</td>
              <td>{data.stock_owned}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button 
          className="pagination-btn" 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          className="pagination-btn" 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
