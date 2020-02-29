import React from 'react';
import '../Styles/Options.css';

const RatingsList = ({ handleChecks }) => (
  <form onChange={(e) => handleChecks(e)}>
    <div>
      <input id="G" name="G" className="ratings" type="checkbox" />
      <label htmlFor="G">G</label>
    </div>

    <div>
      <input id="PG-13" name="PG-13" className="ratings" type="checkbox" />
      <label htmlFor="PG-13">PG-13</label>
    </div>

    <div>
      <input id="R" name="R" className="ratings" type="checkbox" />
      <label htmlFor="R">R</label>
    </div>
    <div>
      <input id="NC-17" name="NC-17" className="ratings" type="checkbox" />
      <label htmlFor="NC-17">NC-17</label>
    </div>

  </form>
);
export default RatingsList;
