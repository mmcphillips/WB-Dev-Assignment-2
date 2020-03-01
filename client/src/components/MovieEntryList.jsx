import React from 'react';
import '../Styles/MovieEntryList.css';

const MovieEntryList = ({ movie }) => (
  <section className="listEntry">
    <img className="listPoster" src={movie.Poster} alt={movie.Title} />

    <article className="listInfo">
      <section className="list">
        <h3 className="listTitle">
          {movie.Title}
          {`\n(${movie.Year})`}
        </h3>
      </section>
      <section className="list">
        <h4>{movie.Type}</h4>
      </section>
      <section className="list">
        <h4>{movie.Rating} / {movie.Genre}</h4>
      </section>
      <section className="plot">
        <p>{movie.Plot}</p>
      </section>
    </article>

  </section>
);

export default MovieEntryList;
