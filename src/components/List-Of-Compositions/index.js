import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'grey',
      outline: '1px solid slategrey',
    }
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 650,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

function ListOfCompositions() {
  const classes = useStyles();
  const StyledList = styled(List)`
    && { /* some hack to avoid !important for few properties */
      position: absolute;
      top: 50px;
      left: 1100px;
    }
  `;

  return (
    <StyledList className={classes.root} subheader={<li />}>
      {[0, 1, 2, 3, 4].map(sectionId => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`I'm pinned ${sectionId}`}</ListSubheader>
            {Array.apply(null, { length: 5 }).map((item, i) => (
              <ListItem key={`item-${i}`}>
                <ListItemText primary={`Item`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </StyledList>
  );
}

export default ListOfCompositions;
