import React from 'react';
import { Box } from '@material-ui/core';
import FilterBarPrimary from './FilterBarPrimary.jsx';
import FilterBarSecondary from './FilterBarSecondary.jsx';
import GenreList from './GenreList.jsx';
import RatingsList from './RatingsList.jsx';
import YearInput from './YearInput.jsx';

export default class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      genres: {},
      year: '',
      showFilter: false,
      showSort: false,
      selectedFilter: '',
    };
    // filter information
    this.showFilter = this.showFilter.bind(this);
    this.showFilterOptions = this.showFilterOptions.bind(this);
    this.hideFilter = this.hideFilter.bind(this);
    // sorting display
    this.showSort = this.showSort.bind(this);
    this.hideSort = this.hideSort.bind(this);
    // pass values of user input to state
    this.handleInput = this.handleInput.bind(this);
    this.handleChecks = this.handleChecks.bind(this);
    // build an object for filtering based on state
    this.buildFilterObject = this.buildFilterObject.bind(this);
  }

  handleInput(target) {
    const { value } = target;
    this.setState({
      year: value,
    });
  }

  handleChecks(e) {
    const { name, className } = e.target;
    const classObject = { ...this.state[className] };
    if (classObject[name]) {
      delete classObject[name];
    } else {
      classObject[name] = true;
    }
    this.setState({
      [className]: classObject,
    });
  }

  showSort() {
    this.setState({
      showSort: true,
    });
  }

  hideSort() {
    this.setState({
      showSort: false,
    });
  }

  showFilter() {
    this.setState({
      showFilter: true,
    });
    this.hideSort();
  }

  hideFilter() {
    this.setState({
      showFilter: false,
    });
  }

  preventSubmit(e) {
    e.preventDefault();
  }

  buildFilterObject() {
    const filterObject = {};
    if (Object.entries(this.state.ratings).length > 0 && this.state.ratings.constructor === Object) {
      filterObject.Rating = { ...this.state.ratings };
    }
    if (Object.entries(this.state.genres).length > 0 && this.state.ratings.constructor === Object) {
      filterObject.Genre = { ...this.state.genres };
    }
    if (this.state.year.length > 0) {
      filterObject.Year = { [this.state.year.slice()]: true };
    }
    // blank selected filters on submission.
    this.setState({
      ratings: {},
      genres: {},
      year: '',
    });
    return filterObject;
  }

  showFilterOptions(selectedFilter) {
    this.setState({
      selectedFilter,
    });
    this.hideSort();
  }

  render() {
    return (
      <Box>

        <FilterBarPrimary
          showFilter={this.showFilter}
          showSort={this.showSort}
          hideSort={this.hideSort}
          switchSort={this.props.switchSort}
          sort={this.props.sort}
          isSort={this.state.showSort}
        />

        {this.state.showFilter === true ? (
          <FilterBarSecondary
            showFilter={this.showFilter}
            showFilterOptions={this.showFilterOptions}
            selectedFilter={this.state.selectedFilter}
            hideFilter={this.hideFilter}
            hideSort={this.hideSort}
            handleInput={this.handleInput}
            handleChecks={this.handleChecks}
            buildFilterObject={this.buildFilterObject}
            applyFilters={this.props.applyFilters}
            blankFilters={this.props.blankFilters}
            preventSubmit={this.preventSubmit}
          />
        ) : <Box />}
      </Box>
    );
  }
}
