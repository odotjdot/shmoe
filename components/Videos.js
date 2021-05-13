import React, { useEffect, useState, useContext } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Context from '../src/Context';

import { useStyles } from '../styles/videoStyles';


export default function Videos() {
  
  const classes = useStyles();

  const { videos: { items } } = useContext(Context);
  
  return (
    <Container className={classes.videoContainer} id="VIDEOS">
      <Grid container>
        <Grid item sm={2}>
          <Typography variant="h5">Videos</Typography>
        </Grid>
        <Grid item sm={10}>
        <Grid container spacing={3} >

          { items?.map((item) => {
            console.log(item)
            const { id, snippet } = item;

            return (
              <Grid item md={4} key={id} className={classes.videoItem}>
                <Paper className={classes.paper}>
                  <img src={snippet.thumbnails.high.url} />
                  <Typography className={classes.videoTitle}>{snippet.title}</Typography>
                </Paper>
              </Grid>
            )
          }) }

          </Grid>
        </Grid>

      </Grid>
      
    </Container>
  )
}
