import React, { useState } from 'react';
import './NavigationTabs.css';

const tabs = ['About', 'Challenges', 'Evaluation parameters', 'Timeline', 'Prize', 'FAQs'];

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="registration">
        <button className="registration-button">Registration Closed</button>
      </div>
    </div>
  );
};

export default NavigationTabs;
