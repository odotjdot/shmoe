import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tourContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: 'white',
    zIndex: '1',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '2',
      background: 'linear-gradient(174deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 100%);',
    },
    '& select': {
      color: 'white'
    }
  },
  tourTable: {
    marginBottom: theme.spacing(3),
    borderBottom: '1px solid #0e0e0e',
    position: 'relative',
    zIndex: '10',
  },
  tourDetails: {
    textAlign: 'center',
  },
  date: {
    fontSize: '1.4rem',
    fontWeight: '300',
    textAlign: 'center',
  },
  city: {
    fontSize: '1.3rem',
  },
  venue: {
    fontSize: '1.3rem',
    fontWeight: '600',
  },
  tourSectionTitle: {
    color: 'white',
    position: 'relative',
    zIndex: '10',
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 120,
    color: 'white',
    zIndex: '11',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  whiteText: {
    color: 'white',
  },
  whiteBorder: {

    '& before': {
      borderBottomColor: 'white',
    }
  },
  chartContainer: {
    position: 'relative',
    zIndex: '10',
  },
  chartTitle: {
    position: 'relative',
    zIndex: '10',
    textAlign: 'center',
    width: '100%',
    margin: theme.spacing(8, 0),
    fontWeight: '500',
  }
  
}));
