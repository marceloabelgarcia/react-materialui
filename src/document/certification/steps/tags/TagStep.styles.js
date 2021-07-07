import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  keysContainer: {
    marginTop: 10,
  },
  formControlHidden: {
    display: 'none',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  storageHelper: {
    marginBottom: 20,
  },
  generateButton: {
    marginBottom: 20,
  },
  formControl: {
    marginBottom: 15,
  },
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
  titleSection: {
    marginBottom: 10,
  },
  labelIcon: {
    marginRight: 5,
  },
  list: {
    maxHeight: 370,
    overflow: 'auto',
  },
  listItem: {
    borderBottom: '1px solid rgba(229, 229, 229, 1)',
  },
  listItemText: {
    textAlign: 'center',
    minWidth: '50%',
    maxWidth: '50%',
  },
  listItemDivider: {
    minHeight: 35,
  },
  sectionTitle: {
    marginBottom: 10,
  },
  grid: {
    minHeight: '480px',
  },
  propsTable: { marginTop: 10 },
}));
