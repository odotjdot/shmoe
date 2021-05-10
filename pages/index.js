import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Music from '../components/Music';
import Videos from '../components/Videos';
import Merch from '../components/Merch';
import Tour from '../components/Tour';

export default function Index({ data }) {
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Music />
      <Videos />
      <Merch />
      <Tour />
    </Container>
  );
}

const YT_API_URL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLGUJd_6WZDWuQqJLk7tQ4cuudDGpIjA5-&key=AIzaSyApfgo4Z1Z2-aQa1nq8ZX8g7QYlkyScOnI';

export async function getStaticProps() {
  const res = await fetch(`${YT_API_URL}`);
  const data = await res.json();

  return {
    props: { data },
  }
}