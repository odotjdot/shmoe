import React, { useEffect, useState, useContext } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Context from '../src/Context';

import { useStyles } from '../src/theme';


export default function Tour() {
  const classes = useStyles();

  const { tour } = useContext(Context)

  return (
    <Container>

      { tour.map((t) => {
          
          return(

            <Grid container spacing={3} key={t.date}>
              <Grid item md>
                <Typography className={classes.paper}>{t.date}</Typography>
              </Grid>
              <Grid item md>
                <Typography className={classes.paper}>{t.city}</Typography>
              </Grid>
              <Grid item md>
                <Typography className={classes.paper}>{t.venue}</Typography>
              </Grid>
              <Grid item md>
                <Typography className={classes.paper}>BUY TICKETS</Typography>
              </Grid>
            </Grid>

          )
      }) }

    </Container>
  )
}