import React, { useEffect, useState, useContext } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { tourDates } from '../pages/api/data';

import { useStyles } from '../styles/tourStyles';


export default function Tour() {
  const classes = useStyles();

  return (
    <Container className={classes.tourContainer} id="TOUR" style={{ backgroundImage: `url(/images/tourbg.jpg)` }}>
      <Grid container>
        <Grid item sm={2}>
          <Typography variant="h5" className={classes.tourSectionTitle}>Tour Dates</Typography>
        </Grid>
        <Grid item container sm={10}>

        { tourDates.map((t) => {
          
          return(

            <Grid container sm={12} item spacing={3} key={t.date} className={classes.tourTable}>
              <Grid item xs={6}>
                <Typography className={classes.date}>{t.date}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.tourDetails}>
                <Typography className={classes.city}>{t.city}</Typography>
                <Typography className={classes.venue}>{t.venue}</Typography>
                <Typography className={classes.tickets}>BUY TICKETS</Typography>
              </Grid>

             
            </Grid>

          )
      }) }



        </Grid>
      </Grid>


      
    </Container>
  )
}