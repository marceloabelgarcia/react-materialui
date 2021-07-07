import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: { padding: 15 },
  stepContainer: {},
  stepSection: { borderRadius: 10 },
  bottomSection: { paddingTop: 5, paddingBottom: 10 },
  stepSectionTitle: {
    fontSize: 15,
    padding: 15,
    paddingLeft: 0,
  },
  stepSectionDivider: { marginBottom: 20 },
  separator: { minHeight: 60 },
}));
