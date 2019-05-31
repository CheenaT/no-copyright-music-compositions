import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import styled from 'styled-components';
import { compositions } from '../../constants'
import { Context } from '../../context.js';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
    height: 650,
    maxWidth: 564,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 650,
    color: 'black',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  listItem: {
    display: 'block',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  dialog: {

  },
  dialogTitle: {
    height: window.orientation === 90 ? 247 : 400,
  },
  button: {
    position: 'absolute',
    bottom: 25,
    color: '#000',
    backgroundColor: 'white',

  },
}));

function ListOfCompositions() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const q =document.querySelector.bind(document);
  const StyledList = styled(List)`
    && { /* some hack to avoid !important for few properties */
      position: absolute;
      top: 50px;
      left: 1100px;
      @media (max-width: 667.2px) and (orientation: landscape) {
        left: 0px;
        height: 221px;
      }
      @media (max-width: 375.2px) {
        {/*top: 434px;*/}
        left: 0px;
        height: 374px;
      }

    }
  `;
  const list = (
    <Context.Consumer>
      {({ currentComposition, setCurrentComposition }) => (
        <StyledList className={classes.root} subheader={<li />}>
          {['Classic', 'Johannes Brahms', 'Andrea Bocelli', 'Pyotr Tchaikovsky', 'Amadeus Mozart'].map(sectionId => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <Divider/>
                <ListSubheader>{sectionId}</ListSubheader>
                <Divider/>
                {compositions.map((el, i) => (
                  <ListItem
                    divider
                    button
                    className={classes.listItem}
                    key={"composition" + i}
                    onClick={() => { setCurrentComposition(el.id); setOpen(false) } }
                  >
                    <ListItemText primary={el.author.replace(/by /, "")} />
                    <ListItemText primary={el.name} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </StyledList>
      )}
      </Context.Consumer>
  );

  if (window.innerWidth < 376 || window.orientation === 90) {
    return (
          <React.Fragment>
            <Button className={classes.button + ' button-compositions'} variant="contained" onClick={() => setOpen(true)}>
              Compositions
            </Button>
            <Dialog open={open} className={classes.dialog} maxWidth = {'xl'} fullWidth={true}>
              <DialogTitle id="simple-dialog-title" className={classes.dialogTitle} >Set backup account</DialogTitle>
                {list}
            </Dialog>
          </React.Fragment>
    );
  }
  return list;
}

export default ListOfCompositions;
