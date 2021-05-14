import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Context from '../src/Context';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Music from '../components/Music';
import Videos from '../components/Videos';
import Merch from '../components/Merch';
import Tour from '../components/Tour';

export default function Index({ data }) {

  const { albums, videos, merch } = data;

  return (
    <>
      <Context.Provider value={{ albums, videos, merch }}>
        <Nav />
        <Hero />
        <Music />
        <Tour />
        <Videos />
        <Merch />
      </Context.Provider>
    </>
  );
}


const ARTIST = process.env.NEXT_PUBLIC_ARTIST;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const MUSIC_URL = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=4&page=1`;
const YT_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=3&key=${YOUTUBE_API_KEY}`;
const MERCH_URL = 'https://fakerapi.it/api/v1/products?_quantity=4&_price_max=50.99&_price_min=10.50&_seed=12456';

const getMusic = async () => {
  const response = await fetch(MUSIC_URL);
  const result = await response.json();

  return result;
}

const getVideos = async () => {
  const response = await fetch(YT_API_URL);
  const result = await response.json();
  return result;
}

const getMerch = async () => {
  const response = await fetch(MERCH_URL);
  const result = await response.json();
  return result;
}

export async function getStaticProps() {

  const data = await Promise.all([
    getMusic(),
    getVideos(),
    getMerch(),
  ])
  .then(([musicPromise, videosPromise, merchPromise ]) => {
    const albums = musicPromise.topalbums.album;
    const videos = videosPromise;
    const merch = merchPromise.data;
    
    return { albums, videos, merch }
  })
  .catch(err => {
    console.error(err);
  });

  return {
    props: { data },
  }
}