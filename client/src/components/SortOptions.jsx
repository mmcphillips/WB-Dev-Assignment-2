import React from 'react';
import { Box, Button } from '@material-ui/core';
import '../Styles/Options.css';

const SortOptions = ({ switchSort, hideSort }) => (
  <Box classes={{ root: 'sortContainer' }}>
    <Button classes={{ root: 'button sort' }} onClick={() => { hideSort(); switchSort('Popularity'); }}>
      Popularity
    </Button>
    <Button classes={{ root: 'button sort' }} onClick={() => { hideSort(); switchSort('Release Date'); }}>
      Release Date
    </Button>
    <Button classes={{ root: 'button sort' }} onClick={() => { hideSort(); switchSort('Reviews'); }}>
      Reviews
    </Button>
  </Box>
);

export default SortOptions;
