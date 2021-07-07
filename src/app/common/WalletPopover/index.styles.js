import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export default makeStyles(() => ({
  root: {
    width: 350,
    maxWidth: '100%',
  },
  actions: {
    backgroundColor: grey[50],
    justifyContent: 'center',
  },
}));
