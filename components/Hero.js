import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../styles/heroStyles';

export default function Hero() {

  const classes = useStyles();

  return (
    <div className={classes.hero} style={{ backgroundImage: `url(/images/herobg.jpg)` }}>
    <Container disableGutters>
      <Container>
        <Grid 
          container 
          className={classes.heroInner}
          spacing={2}
        >
          <Grid item sm className={classes.heroBanner}>
            <img src="https://via.placeholder.com/420?text=Buy+The+New+Single+Now" />
          </Grid>
          <Grid item sm className={classes.heroContent}>
            <Typography variant="h6">New Release</Typography>
            <Typography variant="h2">SHMOE LIFE</Typography>
            <Typography variant="h5">Listen Now</Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
    </div>
  )
}
