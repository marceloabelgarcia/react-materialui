import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  boxHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    background: 'linear-gradient(90deg, rgba(35,74,162,1) 0%, rgba(9,9,121,1) 0%, rgba(46,114,198,1) 100%)',
  },
  boxContainer: {
    marginTop: 20,
    paddingBottom: 30,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
  },
  boxLogin: { paddingLeft: 10 },
  footerBox: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#f5f5f5',
  },
}));
