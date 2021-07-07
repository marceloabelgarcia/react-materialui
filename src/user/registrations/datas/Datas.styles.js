import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  backButton: { marginLeft: "auto" },
  header: {
    padding: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row"
  },
  content: {
    minHeight: 500,
    padding: 20
  },
  docContents: {
    minHeight: 200,
    padding: 30
  },
  centered: {
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 10
  }
}));
