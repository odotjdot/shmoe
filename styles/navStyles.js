import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  nav: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '60px',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  menuItems: {
    fontSize: '1.1rem',
    textAlign: 'right',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '600',
  }
  
}));
