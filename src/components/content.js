import React from 'react';
import SomethingCard from './somethingcard';
import { Grid } from '@material-ui/core';
import ImgMediaCard from './cardlizard';


const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
            <SomethingCard 
            title ='Дектерёв Ян Олегович'
            subtitle="11к ммр в доте"
            avatarUrl= "https://source.unsplash.com/random"
            description="Учится в Удгу, играет на виспе"
            imgUrl=""
            />
        <ImgMediaCard />

        
            </Grid>
        </Grid>
    
    );
}

export default Content;