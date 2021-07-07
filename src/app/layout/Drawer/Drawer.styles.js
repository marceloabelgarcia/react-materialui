import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';

const drawerWidth = 240;
export default makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: { flexShrink: 0 },
    whiteSpace: 'nowrap',
  },
  drawerPaper: { width: drawerWidth },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    zIndex: theme.zIndex.appBar - 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: { width: theme.spacing(7) + 1 },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    backgroundImage: `url(${logo})`,
    backgroundSize: '55%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.primary.light,
    ...theme.mixins.toolbar,
  },
  toolbarShift: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  listItem: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
