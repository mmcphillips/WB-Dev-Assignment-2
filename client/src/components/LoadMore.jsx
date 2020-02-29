import React from 'react';
import { Button } from '@material-ui/core/';
import '../Styles/LoadMore.css';

const LoadMore = ({ loadMoreEntries }) => (
  <Button
    classes={{ root: 'button loadMore' }}
    onClick={() => loadMoreEntries()}
    variant="contained"
  >
    Load More
  </Button>
);

export default LoadMore;
