import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  profileContainer: { minWidth: 300 },
  profileContent: { height: '100%' },
  title: {
    padding: 15,
    paddingLeft: 20,
  },
  buttonGroupContainer: { textAlign: 'end', maxWidth: 250 },
  buttonsContainer: { minWidth: 500, padding: 8 },
  buttonsGroup: { marginRight: 10 },
  groupButtons: { height: 35, width: 80 },
}));
