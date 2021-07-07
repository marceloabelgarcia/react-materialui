import { makeStyles } from '@material-ui/core';
import { blue, green, indigo, orange, grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {},
  listItem: { color: grey[700], '&:hover': { color: blue[500], backgroundColor: theme.palette.background.default } },
  avatarBlue: { backgroundImage: blue[500] },
  avatarGreen: { backgroundImage: green[500] },
  avatarOrange: { backgroundImage: orange[500] },
  avatarIndigo: { backgroundImage: indigo[500] },
  arrowForwardIcon: { color: theme.palette.icon },
}));
