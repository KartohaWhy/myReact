import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://lh3.googleusercontent.com/85KRSaKTkgthOAOjXvoybCUFPuTCOqk1MB5dHh0USW0X_R72vZWppbj9G_mR_7KJqOT81Ha2rv38nbHl07xIJvvJuxIYdLwXTDeEj1lMCW6-kXC16Z7W6Q62YIdFqTVTA6tnhlw1=w2400',
    title: 'Удгу',
    width: '40%',
  },
  {
    url: 'https://lh3.googleusercontent.com/348h6krQhjhdVwZwerI00UsPibPTQ0cug9d9a_sTAutnxxXqm0Cy-wR53viNkbPL-cbuNM5R6uMrV8YvSX2o-SVz8ITUw-iqJzF9mn6CQBvQ921vWc3-rgPa43hKhq2Z7t7NTR2j=w2400',
    title: 'Else with Burgers',
    width: '30%',
  },
  {
    url: 'https://lh3.googleusercontent.com/nVQgSyD1YkbOA_Kdstd24ZbfHDxhaZxnQxl96gh1oLX3z2RCvvS1nl73Ot8D20CtXnxuQamSKMUUI1E_6BoZr6Go4nQXSYwqRsHQ-PZlzDnbSZ1_ajdlm6lNvjoHDBc8Ic-QwNol=w2400',
    title: 'Кукуха',
    width: '30%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}