import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  image: {
    height: 240,
    backgroundImage: 'url("/images/undraw_empty_xct9.svg")',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
