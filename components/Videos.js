import React, { useEffect, useState, useContext } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Context from '../src/Context';

import { useStyles } from '../src/theme';


export default function Videos() {
  
  const classes = useStyles();

  const { videos: { items } } = useContext(Context);
  
  return (
    <Container>
      <Grid container spacing={3}>

        { items.map((item) => {
          // console.log(item)
          const { id, snippet } = item;

          return (
            <Grid item md key={id}>
              <Paper className={classes.paper}>
                <img src={snippet.thumbnails.medium.url} />
                <Typography>{snippet.title}</Typography>
              </Paper>
            </Grid>
          )
        }) }
      
      </Grid>
    </Container>
  )
}
