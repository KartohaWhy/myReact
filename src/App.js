import React, { Component } from 'react';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import Header from './components/header'
import {AppDrawer} from './components/drawer';
import UploadButtons from './components/buttonupload'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Content from './components/content'
import Login from './components/Login'
import ButtonBases from './components/buttons';

const useStyles = makeStyles({
  hiStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: '24px',
  },
  buttonStyles: props => {
    return{
      color: props.cool ? 'green': "black",
    backgroundColor: props.cool ? "orange" : "yellow",
    
  }
    
  }
});
 
  
  

  


const  App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      
      
      

      <Grid container direction="column">
        <Grid item>
        <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid xs={12} sm={8}>
         
          <Content />

          </Grid>
          <Grid item xs={false} sm={2} />
          </Grid>
          <Button 
      className={classes.buttonStyles}
      color="secondary" 
      variant="outlined"
       > Кнопочка </Button>
      
      <Typography
      className={classes.hiStyle} 
      color ="secondary">
      Приветствую смотрящих
      </Typography>
      </Grid>
      <AppDrawer 
      />
      <UploadButtons />

      <ButtonBases />

         <Login />  



    

    
      
    </div>
  );
};

export default App;






