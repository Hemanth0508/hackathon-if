import React from 'react';
import './Header.css';
import logo from 'C:/Users/Admin/hackathon-interface/src/components/Container.png'; // Correct path to image
import Details from './Details';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="header-logo" src={logo} alt="Hackathon Logo" />
        <div className="header-details">
          <h1>HACK-AI-THON 2024</h1>
            <Details/>
          {/* <div className="info">
            <span> Hybrid</span>
            <span> Free</span>
            <span>👥 Team Size: 1-4</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
