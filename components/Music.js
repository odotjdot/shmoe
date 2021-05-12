import React, { useEffect, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Context from '../src/Context';

import { useStyles } from '../styles/musicStyles';

export default function Music() {

  const [music, setMusic] = useState([]);
  const [page, setPage] = useState(1);

  const classes = useStyles();

  const ARTIST = 'kendrick lamar';
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const SECRET = process.env.NEXT_PUBLIC_SECRET;
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=1&page=${page}`;

  useEffect(() => {
    
    async function getMusic() {
      
      const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=4&page=${page}`);
      const result = await response.json();

      const albums = result.topalbums.album;

      // console.log(result.topalbums.album)
      if (page === 1) {
        setMusic(albums);
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
    <Container className={classes.musicContainer}>
      <Grid container>
        <Grid item sm={2}>
          <Typography>Music</Typography>
        </Grid>
        <Grid item sm={10}>
          <Grid container spacing={3}>
            { music && music.map((m)=> {
              // console.log(m)
                return (
                  
                  <Grid item key={m.playcount} sm={6}> 
                  <div className={classes.paper}>
                    <img src={m.image[3]['#text']} />
                    <Typography >
                      {m.name}
                    </Typography>
                  </div>
                  </Grid>
                )
              })
            }
          </Grid>
          <div className={classes.musicButtonContainer}>
            <Button onClick={handleLoadMore}>Load More</Button>
          </div>
        </Grid>
        
      </Grid>
    </Container>
  )
}
