import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Music from '../components/Music';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Music />
    </Container>
  );
}
