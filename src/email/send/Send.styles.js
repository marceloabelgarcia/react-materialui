import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: { padding: 5 },
  subtitle: { paddingLeft: 5 },
  wizardPaper: {
    padding: 15,
    position: 'relative',
  },
  wizard: { padding: 5 },
  stepContainer: {
    padding: 10,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
  },
  stepSection: {
    // backgroundColor: 'rgba(239, 239, 239, 0.55)',
    // marginLeft: 15,
    // marginRight: 15,
    // padding: 15,
    borderRadius: 10,
  },
  stepSectionTitle: {
    fontSize: 15,
    padding: 5,
  },
  stepSectionDivider: { marginBottom: 20 },
}));
