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
          <Typography>Shop</Typography>
        </Grid>
        <Grid item sm={10}>
        <Grid container spacing={3}>

          { merch.map((m)=> {

            return (
              <Grid item md={6} key={m.upc}>
                <Paper className={classes.paper}>
                  <img src={m.image} style={{ width: '100%'}} />
                  <Typography>{ m.name }</Typography>
                  <Typography>${ m.price }</Typography>
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