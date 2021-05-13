import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  videoContainer: {
    // minHeight: '80vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  videoItem: {
    '& img': {
      width: '100%',
    }
  },
  videoTitle: {
    fontSize: '1.15rem',
    fontWeight: 'bold'
  },
  paper: {
    padding: theme.spacing(1)
  }
  
}));
