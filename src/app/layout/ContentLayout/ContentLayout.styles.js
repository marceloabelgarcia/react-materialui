import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 1, 1, 1),
  },
  container: {
    minHeight: 600,
    paddingLeft: 10,
    paddingRight: 10,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    minHeight: '57px !important',
  },
}));
