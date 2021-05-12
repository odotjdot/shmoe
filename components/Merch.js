import React, { useEffect, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Context from '../src/Context';

import { useStyles } from '../styles/merchStyles';


export default function Merch() {
  const classes = useStyles();

  const { merch } = useContext(Context);

  return (
    <Container className={classes.merchContainer}>


      <Grid container>
        <Grid item sm={2}>
          <Typography variant="h5">Store</Typography>
        </Grid>
        <Grid item sm={10}>
        <Grid container spacing={3}>

          { merch.map((m)=> {

            return (
              <Grid item md={6} key={m.upc}>
                <Paper className={classes.paper}>
                  <img src="https://via.placeholder.com/480?text=Buy+The+New+Single+Now" style={{ width: '100%'}} />
                  <Typography className={classes.merchTitle}>{ m.name }</Typography>
                  <Typography className={classes.merchPrice}>${ m.price }</Typography>
                </Paper>
              </Grid>
            )
            })
          }

          </Grid>
        </Grid>
      </Grid>


      
    </Container>
  )
}