import React, { useEffect, useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


import { tourDates } from '../pages/api/data';

import { useStyles } from '../styles/tourStyles';


export default function Tour() {
  const classes = useStyles();

  const [ tour, setTourDates ] = useState(tourDates);
  const [ tourCity, setTourCity ] = useState('');
  
  const cityArray = tourDates.map((item) => {
    return [item.city, item];
  });

  const singleCityArray = new Map(cityArray);
  const singleCities = [ ...singleCityArray.values()];

  const handleCityChange = (event) => {
    setTourCity(event.target.value)
  }

  useEffect(()=> {
    const newDates = tourDates.filter( c => {

      if (tourCity === '') {
        return c;
      }

      return tourCity === c.city;

    });
    setTourDates(newDates)

  }, [tourCity]);

  return (
    <Container 
      className={classes.tourContainer} 
      id="TOUR" 
      style={{ backgroundImage: `url(/images/tourbg.jpg)` }}
    >
      <Grid container>
        <Grid item sm={2}>
          <Typography variant="h5" className={classes.tourSectionTitle}>Tour Dates</Typography>
          <FormControl className={classes.formControl} classes={{root: classes.whiteBorder,}}>
          <Select
            labelId="city-label"
            id="city-select"
            value={tourCity}
            autoWidth={true}
            variant="outlined"
            onChange={handleCityChange}
            displayEmpty
            classes={{
              root: classes.whiteBorder,
              select: classes.whiteText,
              icon: classes.whiteText,
            }}
          >
            <MenuItem value="">
              All Cities
            </MenuItem>
              { singleCities.map((c) => {
                return (
                  <MenuItem key={c.city} value={c.city}>{c.city}</MenuItem>
                )
                })
              }
            </Select>
            <FormHelperText classes={{
              root: classes.whiteText
            }}>
              Select City
            </FormHelperText>
          </FormControl>
        
        </Grid>
        <Grid item container sm={10}>
        <Grid container item sm={12}>
      
        </Grid>
        { tour.map((t) => {
          
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