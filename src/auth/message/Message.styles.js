import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  stepContent: { paddingLeft: 15, paddingRight: 15 },
  submit: { margin: theme.spacing(3, 0, 2) },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  wizard: {
    minWidth: "100%",
    marginTop: 20,
    marginBottom: 20
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },

  boxHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    background:
      "linear-gradient(90deg, rgba(35,74,162,1) 0%, rgba(9,9,121,1) 0%, rgba(46,114,198,1) 100%)"
  },
  boxContainer: {
    marginTop: 20,
    paddingBottom: 30
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 32
  },
  boxLogin: { paddingLeft: 10 },
  footerBox: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "#f5f5f5"
  }
}));
