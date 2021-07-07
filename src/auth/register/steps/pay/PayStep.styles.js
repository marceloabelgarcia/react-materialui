import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  payBox: {
    border: '1px solid #c0c0c0c0',
    marginTop: 10,
    padding: 15,
    paddingTop: 5,
  },
  value: {
    padding: 10,
  },
  desc: {
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    marginBottom: 10,
    marginTop: 5,
  },
  chip: { margin: 5 },
  list: { height: 130, overflow: 'auto' },
  listItem: { paddingTop: 0, paddingBottom: 0 },
  totalContainer: { paddingTop: 10 },
  total: { padding: 14, fontWeight: 'bold' },
  totalPrice: { padding: 15 },
}));
