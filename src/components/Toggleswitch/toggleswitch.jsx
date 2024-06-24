// src/components/ToggleSwitch.js

import React, { useState } from 'react';
import './toggleswitch.css';

const ToggleSwitch = ({ darkMode, setDarkMode }) => {
  const toggleMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode); // Save user preference to localStorage
  };

  return (
    <div className='toggle-container'>
      <span className='size' style={{  color: darkMode ? 'grey' : 'hsl(0, 46%, 51%)' }}>☀︎ </span>
      <span className='toggle'>
        <input
          checked={darkMode}
          onChange={toggleMode}
          id='checkbox'
          className='checkbox'
          type='checkbox'
        />
        <label htmlFor='checkbox' />
      </span>
      <span className='size' style={{ color: darkMode ? 'hsl(0, 46%, 51%)' : 'black' }}> ☽</span>
    </div>
  );
};

export default ToggleSwitch;
