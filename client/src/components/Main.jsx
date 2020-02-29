import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilm, faTv, faGamepad, faCommentDots, faList, faTh,
} from '@fortawesome/free-solid-svg-icons';
import { Box, Button } from '@material-ui/core/';
import '../Styles/Main.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      view: 'tile',
    };
    this.select = this.select.bind(this);
    this.selectView = this.selectView.bind(this);
  }

  select(selected) {
    // Pass type to filterType component, update selected type for css selected styling.
    // material ui does not expose id tag on components, so its passed in manually as a string.
    this.props.filterType(selected);
    this.setState({
      selected,
    });
  }

  selectView(view) {
    // switch view between state and tile
    this.props.switchView(view);
    this.setState({
      view,
    });
  }


  render() {
    const { filterType, switchView } = this.props;
    const { selected, view } = this.state;
    return (
      <Box classes={{ root: 'container' }}>

        <Box classes>
          <Box classes={{ root: 'searchResults' }}>
            SEARCH
            {' '}
            {'  '}
            <div className="spacer" />
            RESULTS
          </Box>
        </Box>

        <Box classes={{ root: 'containerRight' }}>
          <Box classes={selected === 'All' ? { root: 'main selected' } : { root: 'main' }} onClick={() => this.select('All')}>
            <Box classes={{ root: 'tile' }}>
              All
            </Box>
          </Box>

          <Box classes={selected === 'Movies' ? { root: 'main selected' } : { root: 'main' }} onClick={() => this.select('Movies')}>
            <Box classes={{ root: 'tile icon' }}>
              <FontAwesomeIcon icon={faFilm} />
            </Box>
            <Box classes={{ root: 'tile' }}>
              Movies
            </Box>
          </Box>

          <Box classes={selected === 'TV Shows' ? { root: 'main selected' } : { root: 'main' }} id="TV" onClick={() => this.select('TV Shows')}>
            <Box classes={{ root: 'tile icon' }}>
              <FontAwesomeIcon icon={faTv} />
            </Box>
            <Box classes={{ root: 'tile' }}>
              TV Shows
            </Box>
          </Box>

          <Box classes={selected === 'Games and apps' ? { root: 'main selected' } : { root: 'main' }} onClick={() => this.select('Games and apps')}>
            <Box classes={{ root: 'tile icon' }}>
              <FontAwesomeIcon icon={faGamepad} />
            </Box>
            <Box classes={{ root: 'tile' }}>
              Games & apps
            </Box>
          </Box>

          <Box classes={selected === 'Blog' ? { root: 'main selected' } : { root: 'main' }} onClick={() => this.select('Blog')}>
            <Box classes={{ root: 'tile icon' }}>
              <FontAwesomeIcon icon={faCommentDots} />
            </Box>
            <Box classes={{ root: 'tile icon' }}>
              Blog
            </Box>
          </Box>

          <Box classes={selected === 'Other' ? { root: 'main selected' } : { root: 'main' }} onClick={() => this.select('Other')}>
            <Box classes={{ root: 'tile' }}>
              Other
            </Box>
          </Box>

          <Box classes={view === 'tile' ? { root: 'view selected' } : { root: 'view' }} onClick={() => this.selectView('tile')}>
            <Button classes={{ root: 'button view' }}>
              <FontAwesomeIcon icon={faTh} />
            </Button>
          </Box>

          <Box classes={view === 'list' ? { root: 'view selected' } : { root: 'view' }} onClick={() => this.selectView('list')}>
            <Button classes={{ root: 'button view' }}>
              <FontAwesomeIcon icon={faList} />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
