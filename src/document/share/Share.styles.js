import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  stepContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
  },
  stepSection: { borderRadius: 15, paddingBottom: '0 !important' },
  stepSectionTitle: {
    fontSize: 15,
    paddingBottom: 5,
  },
  stepSectionDivider: { marginBottom: 20 },
}));
