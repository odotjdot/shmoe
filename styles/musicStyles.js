import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  musicContainer: {
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  musicButtonContainer: {
    width: '100%',
    display: 'block',
    padding: theme.spacing(5, 0, 2),
  },
  paper: {
    width: '100%',
    padding: theme.spacing(1),
    '& img': {
      width: '100%',
    }
  },
  albumTitle: {
    padding: theme.spacing(1, 0, 1),
    fontWeight: '500',
  }
  
}));
