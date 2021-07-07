import { makeStyles } from '@material-ui/core';


export default makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: { display: 'inline' },
  delete: { margin: 'auto', marginRight: 20, textAlign: 'end' },
  title: { padding: 20 },
  list: { maxHeight: 600, overflow: 'auto', paddingLeft: 10 },
}));
