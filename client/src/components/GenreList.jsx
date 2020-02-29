import React from 'react';
import '../Styles/Options.css';

const GenreList = ({ handleChecks }) => (

  <form onChange={(e) => handleChecks(e)}>
    <div>
      <input id="Action/Adventure" className="genres" name="Action/Adventure" type="checkbox" />
      <label htmlFor="Action/Adventure">Action/Adventure</label>
    </div>

    <div>
      <input id="Comedy" className="genres" name="Comedy" type="checkbox" />
      <label htmlFor="Comedy">Comedy</label>
    </div>

    <div>
      <input id="Horror" className="genres" name="Horror" type="checkbox" />
      <label htmlFor="Horror">Horror</label>
    </div>

    <div>
      <input id="Thriller" className="genres" name="Thriller" type="checkbox" />
      <label htmlFor="Thriller">Thriller</label>
    </div>

  </form>


);

export default GenreList;
