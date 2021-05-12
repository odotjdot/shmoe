import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../styles/navStyles';

export default function Nav() {

  const classes = useStyles();

  return (
    <Container className={classes.nav}>
      <Grid container alignItems="center" justify="flex-end">
        
        <Grid item sm>
          <Typography className={classes.logo}>SHMOE</Typography>
        </Grid>
        
        <Grid item container sm className={classes.menuItems}>
          <Grid item sm>MUSIC</Grid>
          <Grid item sm>VIDEOS</Grid>
          <Grid item sm>TOUR</Grid>
          <Grid item sm>MERCH</Grid>

        </Grid>
      </Grid>
    </Container>
  )
}
