import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  appBar: {
    // background: 'rgb(35,74,162)',
    background: 'linear-gradient(90deg, rgba(35,74,162,1) 0%, rgba(9,9,121,1) 0%, rgba(46,114,198,1) 100%)',
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },
  // appBarShift: {
  //   backgroundColor: '#2E72C7',
  //   marginLeft: drawerWidth,
  //   [theme.breakpoints.up('sm')]: { width: `calc(100% + 1px - ${drawerWidth}px)` },
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  hide: { display: 'none' },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  menuButton: { marginRight: 36 },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: { display: 'flex' },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: { display: 'none' },
  },
  grow: { flexGrow: 1 },
}));
