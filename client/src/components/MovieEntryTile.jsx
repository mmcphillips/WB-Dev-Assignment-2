import React from 'react';
import '../Styles/MovieEntryTile.css';

const MovieEntryTile = ({ movie }) => (
  <section className="entry">
    <article className="posterCont">
      <img className="poster" src={movie.Poster} alt={movie.Title} />
    </article>
    <section className="info">
      <article className="infoCont">
        <p>{movie.Type}</p>
        <h3>{movie.Title}</h3>
      </article>
    </section>
  </section>
);

export default MovieEntryTile;
