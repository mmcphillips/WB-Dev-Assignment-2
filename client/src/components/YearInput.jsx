import React from 'react';
import '../Styles/Options.css';

const YearInput = ({ handleInput, preventSubmit }) => (
  <form onSubmit={(e) => preventSubmit(e)}>
    <div>
      <label htmlFor="Year">Year:</label>
      <input type="text" id="Year" placeholder="Enter Year" onChange={(e) => handleInput(e.target)} maxLength="4" width="40px" />
    </div>
  </form>
);

export default YearInput;
