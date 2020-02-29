import React from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core/';
import Main from './Main.jsx';
import FilterBar from './FilterBar.jsx';
import MovieList from './MovieList.jsx';
import LoadMore from './LoadMore.jsx';
import '../Styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      movies: [],
      type: 'All',
      prevFilter: {},
      indexer: 12,
      view: 'tile',
      currentSort: 'Popularity',
    };
    // given a type, filter movies.
    this.filterType = this.filterType.bind(this);
    // apply applied filters through object, retain filter by type
    this.applyFilters = this.applyFilters.bind(this);
    // update movies based on filtered results
    this.setFilters = this.setFilters.bind(this);
    // remove applied filters, retain filter by type
    this.blankFilters = this.blankFilters.bind(this);
    // change sort and update state
    this.switchSort = this.switchSort.bind(this);
    // change view and update state
    this.switchView = this.switchView.bind(this);
    // update indexer
    this.loadMoreEntries = this.loadMoreEntries.bind(this);
    // reset our indexer
    this.resetIndex = this.resetIndex.bind(this);
  }

  // utility function for filtering against type
  filterByType(type, movies) {
    let filteredTitles;
    if (type === 'All') {
      return movies;
    }
    filteredTitles = movies.filter((item) => {
      if (item.Type === type) {
        return true;
      }
      return false;
    });
    return filteredTitles;
  }

  // utility function for filtering against multiple criteria
  filterByObject(filterObject, movies) {
    let filteredMovies = movies;
    let comparisonCheck;
    filteredMovies = filteredMovies.filter((movie) => {
    /*
        Not performant for scaling.
        - In production environment, receiving all entries and filtering them every time would be a expensive operation.
        - A way to avoid this would be to only filter up until the current page requirement is met by indexer or length of category is exceeded.
        - In subsequent load more operations:
          - start at index of last rendered movie,
          - filter until next length of currentMovies+filteredMovies hits indexer
          - remember index of last filtered movie for subsequent operations
          - concatenate currentMovies+ newFilteredSlice;
    */
      comparisonCheck = true;
      for (const key in filterObject) {
        const itemVal = movie[key];
        if (!filterObject[key][itemVal]) {
          comparisonCheck = false;
        }
      }
      return comparisonCheck;
    });
    return filteredMovies;
  }

  setFilters(filteredMovies) {
    this.setState({
      movies: filteredMovies,
    });
    this.resetIndex();
  }

  applyFilters(filterObject) {
    let filteredMovies = this.state.allMovies.slice();
    const { type } = this.state;
    filteredMovies = this.filterByType(type, filteredMovies);
    if (Object.entries(filterObject).length > 0) {
      const filteredResults = this.filterByObject(filterObject, filteredMovies);
      this.setState({
        prevFilter: filterObject,
      });
      this.setFilters(filteredResults);
    }
  }

  filterType(type) {
    const allTitles = this.state.allMovies.slice();
    let filteredTitles = this.filterByType(type, allTitles);
    if (Object.entries(this.state.prevFilter).length > 0) {
      filteredTitles = this.filterByObject(this.state.prevFilter, filteredTitles);
    }
    this.setState({
      type,
    });
    this.setFilters(filteredTitles);
    this.resetIndex();
  }

  blankFilters() {
    let allMovies = this.state.allMovies.slice();
    const { type } = this.state;
    allMovies = this.filterByType(type, allMovies);
    this.setState({
      prevFilter: {},
      movies: allMovies,
    });
    this.resetIndex();
  }

  switchView(view) {
    this.setState({
      view,
    });
    this.resetIndex();
  }

  switchSort(sort) {
    let sortedAll = this.state.allMovies.slice();
    let sortedActive = this.state.movies.slice();

    if (sort === 'Popularity') {
      sortedAll = sortedAll.sort((a, b) => b.Popularity - a.Popularity);
      sortedActive = sortedActive.sort((a, b) => b.Popularity - a.Popularity);
    }
    if (sort === 'Release Date') {
      sortedAll = sortedAll.sort((a, b) => Number(b.Year) - Number(a.Year));
      sortedActive = sortedActive.sort((a, b) => Number(b.Year) - Number(a.Year));
    }
    if (sort === 'Reviews') {
      sortedAll = sortedAll.sort((a, b) => b.Reviews - a.Reviews);
      sortedActive = sortedActive.sort((a, b) => b.Reviews - a.Reviews);
    }
    this.setState({
      movies: sortedActive,
      allMovies: sortedAll,
      currentSort: sort,
    });
    this.resetIndex();
  }

  resetIndex() {
    this.setState({
      indexer: 12,
    });
  }

  loadMoreEntries() {
    const { indexer } = this.state;
    const { length } = this.state.movies;
    const newIndex = Math.min(indexer + 10, length);
    this.setState({
      indexer: newIndex,
    });
  }

  componentDidMount() {
    axios.get('/api/movies')
      .then(({ data }) => {
        const sortedData = data.sort((a, b) => b.Popularity - a.Popularity);
        this.setState({
          movies: sortedData,
          allMovies: sortedData,
        });
      });
  }

  render() {
    return (
      <Container classes={{ root: 'fluid' }}>
        <Main
          filterType={this.filterType}
          switchView={this.switchView}
          currentSort={this.state.currentSort}
        />
        <FilterBar
          blankFilters={this.blankFilters}
          applyFilters={this.applyFilters}
          sort={this.state.currentSort}
          switchSort={this.switchSort}
        />
        <MovieList
          movies={this.state.movies.slice(0, this.state.indexer)}
          view={this.state.view}
        />
        {this.state.indexer < this.state.movies.length
          ? <LoadMore loadMoreEntries={this.loadMoreEntries} /> : <div />}
      </Container>
    );
  }
}
