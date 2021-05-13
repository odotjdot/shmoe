import React, { useEffect, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Context from '../src/Context';

import { useStyles } from '../styles/musicStyles';

export default function Music() {
  const { albums } = useContext(Context);
  const [music, setMusic] = useState(albums);
  const [page, setPage] = useState(1);

  const classes = useStyles();

  const ARTIST = process.env.NEXT_PUBLIC_ARTIST;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=4&page=${page}`;

  useEffect(() => {
    
    async function getMusic() {
      
      const response = await fetch(URL);
      const result = await response.json();

      const albums = result.topalbums.album;

      if (page === 1) {
        return;
      }
      
      setMusic((prev) => {
        
        const newState = [
          ...prev,
          ...albums,
        ]
        
        return newState;
      });
    }
    
    getMusic();
    
  }, [page]);
  
  const handleLoadMore = () => {
    setPage((prevState) => {

      const newPageNumber = prevState + 1;

      return newPageNumber;
    })
  }
  
  return (
    <Container className={classes.musicContainer} id="MUSIC">
      <Grid container>
        <Grid item sm={2}>
          <Typography variant="h5">Music</Typography>
        </Grid>
        <Grid item sm={10}>
          <Grid container justify="center" spacing={3}>
            { music && music.map((m)=> {
                return (
                  
                  <Grid item key={m.playcount} sm={6}> 
                  <Paper className={classes.paper}>
                    <img src={m.image[3]['#text']} />
                    <Typography variant="h6" className={classes.albumTitle} >
                      {m.name}
                    </Typography>
                  </Paper>
                  </Grid>
                )
              })
            }
          </Grid>
          <div className={classes.musicButtonContainer}>
            {page === 3 
              ? <Typography>All Loaded</Typography> 
              : <Button onClick={handleLoadMore}>View More</Button>
            }
            
          </div>
        </Grid>
        
      </Grid>
    </Container>
  )
}
