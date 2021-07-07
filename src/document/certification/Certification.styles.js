import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  title: { padding: 5 },
  subtitle: { paddingLeft: 5 },
  wizardPaper: {
    minHeight: 600,
    padding: 15,
  },
  wizard: { padding: 5 },
  stepContent: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
  },
  stepSectionTitle: {
    fontSize: 15,
    padding: 5,
  },
}));
