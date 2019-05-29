import React, { useState, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { compositions } from '../../constants';
import { Context } from '../../context.js';
import ListOfCompositions from '../List-Of-Compositions';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
console.log(' images : ', images);

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function SongCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const audioElement = useRef(null);
  const [currentComposition, setCurrentComposition] = useState(0);

  return (
    <Context.Provider value={{currentComposition, setCurrentComposition}}>
    <Card className={classes.card}>
		<audio ref={audioElement} id="card__audio" src={compositions[currentComposition].compositionUrl} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {compositions[currentComposition].name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {compositions[currentComposition].author}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="Play/pause" onClick={() => {
    				console.log(' debug ref : ', audioElement);
    				if (audioIsPlaying) {
    					audioElement.current.pause();
    					setAudioIsPlaying(false);
    				} else {
    					audioElement.current.play();
    					setAudioIsPlaying(true);
    				}
    			}}>
            { audioIsPlaying ? <PauseIcon className={classes.playIcon} /> : <PlayArrowIcon className={classes.playIcon} /> }
          </IconButton>
          <IconButton aria-label="Next" onClick={() => {
            console.log('onClick')
            if (currentComposition < compositions.length - 1) {
              setAudioIsPlaying(false);
              setCurrentComposition(currentComposition + 1);
              console.log('true')
            } else {
              setAudioIsPlaying(false);
              setCurrentComposition(0);
              console.log('false')
            }
          }} >
            <SkipNextIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={images[currentComposition]}
        title="Live from space album cover"
      />
    </Card>
    <ListOfCompositions className="main__list-of-compositions"/>
    </Context.Provider>
  );
}

export default SongCard;
