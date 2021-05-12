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

  // const { music, merch, tour } = data;
  const { music, videos, merch, tour } = data;

  console.log(data);
  return (
    <>
      <Context.Provider value={{ music, videos, merch, tour }}>
      {/* <Context.Provider value={{ music, merch, tour }}> */}
        <Container disableGutters={true}>
          <Nav />
          <Hero />
          <Music />
          <Tour />
          <Videos />
          <Merch />
        </Container>
      </Context.Provider>
    </>
  );
}


const ARTIST = 'kendrick lamar';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const MUSIC_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ARTIST}&api_key=${API_KEY}&format=json&limit=5&page=1`;
const YT_API_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=3&key=AIzaSyApfgo4Z1Z2-aQa1nq8ZX8g7QYlkyScOnI';
const MERCH_URL = 'https://fakerapi.it/api/v1/products?_quantity=4&_price_max=50.99&_price_min=10.50&_seed=12456';
const TOUR_URL = 'http://localhost:3000/api/tourDates';

const getMusic = async () => {
  const response = await fetch(MUSIC_URL);
  const result = await response.json();

  return result;
}

const getVideos = async () => {
  const response = await fetch(YT_API_URL);
  const result = await response.json();
  console.log(result);
  return result;
}

const getMerch = async () => {
  const response = await fetch(MERCH_URL);
  const result = await response.json();

  return result;
}

const getTour = async () => {
  const response = await fetch(TOUR_URL);
  const result = await response.json();

  return result;
}

export async function getStaticProps() {

  const data = await Promise.all([
    getMusic(),
    getVideos(),
    getMerch(),
    getTour(),
  ])
  .then(([musicPromise, videosPromise, merchPromise, tourPromise ]) => {
    const music = musicPromise.toptracks;
    const videos = videosPromise;
    const merch = merchPromise.data;
    const tour = tourPromise;
    
    return { music, videos, merch, tour }
  })
  .catch(err => {
    console.error(err);
  });

  return {
    props: { data },
  }
}