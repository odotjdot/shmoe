import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../styles/navStyles';

export default function Nav() {

  const classes = useStyles();

  return (
    <Container className={classes.nav} >
      <Grid container alignItems="center">
        
        <Grid item sm>
          <Typography className={classes.logo}>SHMOE</Typography>
        </Grid>
        
        <Grid item container sm className={classes.menuItems}>
          <Grid item sm>
            <Link href="#MUSIC">
              <a>MUSIC</a>
            </Link>
          </Grid>
          <Grid item sm>
            <Link href="#VIDEOS">
              <a>VIDEOS</a>
            </Link>
          </Grid>
          <Grid item sm>
            <Link href="#TOUR">
              <a>TOUR</a>
            </Link>
          </Grid>
          <Grid item sm>
            <Link href="#STORE">
              <a>STORE</a>
            </Link>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  )
}
