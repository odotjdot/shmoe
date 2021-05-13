import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  hero: {
    padding: theme.spacing(8, 0, 1),
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: '1',
    background: '#000000',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '2',
      background: 'linear-gradient(174deg, rgba(0,0,0,0.95) 0%, rgba(113,0,0,0.6) 100%);',
    }
  },
  heroInner: {
    minHeight: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    zIndex: '10',
  },
  heroBanner: {
    textAlign: 'center',
    '& img': {
      width: '100%',
    }
  },
  heroContent: {
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 1px 5px rgba(0,0,0,0.5)',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    }
  }
  
}));
