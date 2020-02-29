import React from 'react';
import { Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SortOptions from './SortOptions.jsx';
import '../Styles/FilterBar.css';

const FilterBarPrimary = ({
  showFilter, showSort, hideSort, switchSort, sort, isSort,
}) => (
  <Box classes={{ root: 'primaryContainer' }}>

    <Box classes={{ root: 'main ' }} onClick={() => { showFilter(); hideSort(); }}>
      <Box classes={{ root: 'tile text' }}>
        Filter
      </Box>
      <Box classes={{ root: 'tile chevron' }}>
        <FontAwesomeIcon icon={faChevronDown} />
      </Box>
    </Box>

    <Box classes={{ root: 'main ' }}>
      <Box classes={{ root: 'tile sort' }}>
        Sorted By
      </Box>

      <Box classes={{ root: 'tile text' }} onClick={() => showSort()}>
        {`${sort}`}
      </Box>
      <Box classes={{ root: 'tile chevron' }}>
        <FontAwesomeIcon icon={faChevronDown} />
        {isSort === true ? (
          <Box classes={{ root: 'options' }}>
            <SortOptions switchSort={switchSort} hideSort={hideSort} />
          </Box>
        ) : <Box />}
      </Box>
    </Box>

  </Box>
);

export default FilterBarPrimary;
