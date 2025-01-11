import React from 'react';
import './Details.css';
import { FaWifi, FaDollarSign, FaUsers } from 'react-icons/fa';

const Details = () => {
  return (
    <div className="details">
      <div className="detail-item">
        <FaWifi className="icon" /> <span className='box'>Hybrid</span>
      </div>
      <div className="detail-item">
        <FaDollarSign className="icon" /> <span className='box'>Free</span>
      </div>
      <div className="detail-item">
        <FaUsers className="icon" /> <span className='box'> Team Size: 1-4</span>
      </div>
    </div>
  );
};

export default Details;
