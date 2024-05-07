// frontend/src/components/PollingPage.js

import React, { useState } from 'react';
import './PollingPage.css';

const PollingPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
    // Add logic to submit the selected option
  };

  return (
    <div className="polling-page">
      <h1>Create or Answer Polls</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PollingPage;
