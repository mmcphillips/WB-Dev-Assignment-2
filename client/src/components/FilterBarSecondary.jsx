import React from 'react';
import { Box, Button} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ClearIcon from '@material-ui/icons/Clear';
import GenreList from './GenreList.jsx';
import RatingsList from './RatingsList.jsx';
import YearInput from './YearInput.jsx';
import '../Styles/FilterBar.css';

const FilterBarSecondary = ({
  showFilter, applyFilters, blankFilters, showFilterOptions, hideSort, hideFilter, selectedFilter, preventSubmit, handleInput, handleChecks, buildFilterObject,
}) => (
  <Box classes={{ root: 'subContainer' }}>

    <Box classes={{ root: 'subLeft' }}>

      <Box classes={{ root: 'main' }} onClick={() => showFilterOptions('Year')}>
        <Box classes={{ root: 'tile text' }}>
          Release Year
        </Box>
        <Box classes={{ root: 'tile chevron' }} name="test">
          <FontAwesomeIcon icon={faChevronDown} />
          {selectedFilter === 'Year' ? (
            <Box classes={{ root: 'options' }}>
              <YearInput handleInput={handleInput} preventSubmit={preventSubmit} />
            </Box>
          ) : <Box />}
        </Box>
      </Box>

      <Box classes={{ root: 'main' }} onClick={() => showFilterOptions('Genre')}>
        <Box classes={{ root: 'tile text' }}>
          Genre
        </Box>
        <Box classes={{ root: 'tile chevron' }}>
          <FontAwesomeIcon icon={faChevronDown} />
          {selectedFilter === 'Genre' ? (
            <Box classes={{ root: 'options' }}>
              <GenreList handleChecks={handleChecks} />
            </Box>
          ) : <Box />}
        </Box>
      </Box>

      <Box classes={{ root: 'main' }} onClick={() => showFilterOptions('Rating')}>
        <Box classes={{ root: 'tile text' }}>
          Rating
        </Box>
        <Box classes={{ root: 'tile chevron' }}>
          <FontAwesomeIcon icon={faChevronDown} />
          {selectedFilter === 'Rating' ? (
            <Box classes={{ root: 'options' }}>
              <RatingsList handleChecks={handleChecks} />
            </Box>
          ) : <Box />}
        </Box>
      </Box>

    </Box>


    <Box classes={{ root: 'subRight' }} onClick={() => showFilterOptions('x')}>

      <Box classes={{ root: 'main wide' }}>
        <Button classes={{ root: 'button sub' }} onClick={() => applyFilters(buildFilterObject())}>
          Apply Filters
        </Button>
      </Box>

      <Box classes={{ root: 'main wide' }}>
        <Button classes={{ root: 'button sub' }} onClick={() => blankFilters()}>
          Clear Filters
        </Button>
      </Box>

      <Box classes={{ root: 'main' }}>
        <Button classes={{ root: 'button x' }} onClick={() => blankFilters()}>
          <ClearIcon fontSize="large" onClick={() => { hideSort(); hideFilter(); }} />
        </Button>
      </Box>

    </Box>

  </Box>
);

export default FilterBarSecondary;
