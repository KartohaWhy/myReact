import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';
import { pink } from '@material-ui/core/colors';
const useStyles = makeStyles({
    
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'small',
      backgroundPosition: 'center',
    },
    avatar: {
      backgroundColor: pink[500],
    },
  
  });


const SomethingCard = props => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { avatarUrl, title, subtitle, description, image} = props;
    return (
        <Card >
            <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Я
          </Avatar>
           
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
       <CardMedia style ={{ height: "150px" }} image="https://lh3.googleusercontent.com/tyUF72tMIJu9U5_RYRQlc18smZW7sRTAAaoQCKH1ILIg4M5tXLCL01aHqitgQawJQIJVaTyVZUNMKqRBP3mIKxeVDnv08FTA8qMR0Nsdt-jRpddsQS4aVIpCySt9X5EL4ZUA7nxK=w2400"
       
      />
        
        
      

          <CardContent>
            
            <Typography variant="body2" component="p">
              {description}
              
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Взять на игру</Button>
            <Button size="small">Взять на сезон</Button>
          </CardActions>
        </Card>
      );
}

export default SomethingCard;