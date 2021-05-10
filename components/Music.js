import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



export default function Music() {

  const [music, setMusic] = useState([]);
  const [page, setPage] = useState(1);

  const ARTIST = 'jayz';
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const SECRET = process.env.NEXT_PUBLIC_SECRET;
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=1&page=${page}`;

  useEffect(() => {
    
    async function getMusic() {
      
      const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=5&page=${page}`);
      const result = await response.json();

      const albums = result.topalbums.album;

      // console.log(result.topalbums.album)
      if (page === 1) {
        setMusic(albums);
        return;
      }
      
      setMusic((prev) => {
        
        // const current = albums;
  
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

  // console.log(music)
  
  return (
    <div>
      {music && music.map((m)=> {
        // console.log(m)
        return (
          <Typography key={m.playcount}>{m.name}</Typography>
        )
      })
      }

      <Button onClick={handleLoadMore}>Load More</Button>
    </div>
  )
}
