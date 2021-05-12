import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  hero: {
    padding: theme.spacing(8, 0, 1),
    
    background: 'red'
  },
  heroInner: {
    height: '80vh',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  heroBanner: {
    textAlign: 'center',
    '& img': {
      width: '100%',
    }
  },
  heroContent: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    }
  }
  
}));
