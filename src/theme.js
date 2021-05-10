import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;

export const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(1, 0 , 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  weatherContent: {
    textAlign: 'center',
  },
  cityTitle: {
    textAlign: 'center',
    width: '100%',
    margin: theme.spacing(3, 0),
  },
  weatherCol: {
    textAlign: 'center',
  },
  weatherTemp: {
    width: 'auto',
    position: 'relative',
  },
  tempDeg: {
    // position: 'absolute',
    // top: '0',
    // right: '50%',
    textSize: '1rem',
  }
}));

