import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  nav: {
    position: 'absolute',
    top: '0',
    left: '50%',
    zIndex: '100',
    transform: 'translateX(-50%)',
    height: '60px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '100%',
    '& a': {
      textDecoration: 'none',
      fontWeight: '700',
      color: 'white',
    }
  },
  menuItems: {
    fontSize: '1.1rem',
    textAlign: 'right',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    }
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: 'white',
  }
  
}));
