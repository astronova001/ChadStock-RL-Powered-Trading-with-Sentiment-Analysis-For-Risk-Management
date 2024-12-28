import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import madaraIcon from '../assets/images/madara-icon.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard'); // Set default active item to 'Dashboard'

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="brand" style={{cursor:'pointer'}}>ChadStock</h1>
        
        <input
          type="text"
          className="search-input"
          placeholder="Search Stocks..."
          aria-label="Search Stocks"
        />
        
        <div className="nav-menu">
      {['Dashboard', 'Trade', 'Chart'].map(item => (
        <button
          key={item}
          className="nav-button"
          style={{
            backgroundColor: activeItem === item ? 'blue' : 'transparent', // Inline CSS for active item
            color: activeItem === item ? 'white' : 'black', // Inline CSS for text color
            border: activeItem === item ? '2px solid blue' : '1px solid gray' // Optional styling for active item
          }}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </button>
      ))}
    </div>

        <img className="profile-icon" alt="Profile" src={madaraIcon} />
      </div>
    </nav>
  );
};

export default Navbar;