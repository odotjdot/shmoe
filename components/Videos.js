import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { useStyles } from '../src/theme';


export default function Videos() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
      <Grid item md>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
