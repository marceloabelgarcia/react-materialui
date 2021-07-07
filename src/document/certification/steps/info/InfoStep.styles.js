
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  dropzone: {
    height: 125,
    marginBottom: 17,
  },
  keysContainer: { marginTop: 10 },
  formControlHidden: { display: 'none' },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: { margin: 2 },
  storageHelper: { marginBottom: 20 },
  generateButton: { marginBottom: 20 },
  formControl: { marginBottom: 15 },
  middleDivider: {
    marginTop: 10,
    marginBottom: 10,
  },
  stepIndicator: {
    margin: 'auto',
    padding: 10,
  },
  headerDivider: {
    marginTop: 0,
    marginBottom: 15,
  },
}));
