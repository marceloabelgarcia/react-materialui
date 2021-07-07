import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  tags: { marginLeft: 10 },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': { fontWeight: theme.typography.fontWeightRegular },
  },
  group: {
    marginLeft: 0,
    '& $content': { paddingLeft: theme.spacing(2) },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: { marginRight: theme.spacing(1) },
  labelText: { fontWeight: 'inherit' },
}));
