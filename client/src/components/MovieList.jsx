import React from 'react';
import { Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MovieEntryList from './MovieEntryList.jsx';
import MovieEntryTile from './MovieEntryTile.jsx';

const MovieList = ({ movies, view }) => {
  const theme = useTheme();// access predetermined breakpoints from Material UI
  const small = useMediaQuery(theme.breakpoints.down('814'));// screen width > 814px;

  if (small) {
    return (
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        {view === 'tile'
          ? movies.map((movie) => <MovieEntryTile movie={movie} key={movie.imdbID} />)
          : movies.map((movie) => <MovieEntryList movie={movie} key={movie.imdbID} />)}
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      {view === 'tile'
        ? movies.map((movie) => <MovieEntryTile movie={movie} key={movie.imdbID} />)
        : movies.map((movie) => <MovieEntryList movie={movie} key={movie.imdbID} />)}
    </Grid>
  );
};

export default MovieList;
