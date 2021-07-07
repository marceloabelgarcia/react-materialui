import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  linkText: {
    color: "#FFF",
    textAlign: "left",
    whiteSpace: "normal"
  },
  textField: {
    background: "white",
    // padding: ,
    padding: 10,
    borderRadius: 5
  },
  grid: { margin: "auto", textAlign: "center" },
  gridButton: {
    margin: "auto",
    [theme.breakpoints.down("md")]: { textAlign: "center" }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: { margin: theme.spacing(3, 0, 2), backgroundColor: blue[500] }
}));
