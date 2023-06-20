import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px',
    backgroundColor: '#ff9800',
    // this will only work on mobile devices
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      flexWrap: 'wrap',
    },
  },
  //  menu button will trigger on mobile devices but theme.bp.up(sm) will only trigger wit devices that are higher than snmall
  menuButton: {
    marginRight: theme.spacing(2),
    // menu button will hide for anything above mobile devices
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      textDecoration: 'none',
    },
  },
}));
