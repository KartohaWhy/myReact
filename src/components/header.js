import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import MoodBadIcon from '@material-ui/icons/MoodBad';

const useStyles = makeStyles({
  hiStyle: {
    fontStyle: 'oblique',
    color: 'black',
    fontSize: '32px',
    flex: 1
  },
  buttonStyles: {
    color: 'green',
    border: 0,
  }
});

const Header = () => {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
        className={classes.hiStyle}
        >
         InstaYan
        </Typography>
        

        <FaceIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header;