import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  merchContainer: {
    minHeight: '80vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  paper: {
    padding: theme.spacing(1)
  },
  merchTitle: {
    fontSize: '1.3rem'
  },
  merchPrice: {
    fontSize: '1.2rem'
  }
  
}));
