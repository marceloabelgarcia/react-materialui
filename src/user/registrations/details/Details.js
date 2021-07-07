import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Paper,
  TextField,
  AppBar,
  Tabs,
  Tab,
  Typography
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./Details.styles";

import Datas from "../datas/";
import Aditionals from "../aditionals/";
function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const Details = () => {
  // Get styles from hook
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [docType, setDocType] = React.useState("Pasaporte");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const history = useHistory();

  const docTypes = ["DNI/NIE", "Pasaporte"];

  const docTypesItems = docTypes.map(option => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  const onDocTypeChange = e => {
    setDocType(e.target.value);
  };

  const onBackClick = () => history.goBack();

  const getTabContent = index => {
    switch (index) {
      case 0:
        return <Datas></Datas>;
      case 1:
        return <Aditionals></Aditionals>;

      default:
        return null;
    }
  };

  const renderDocumentImage = k => (
    <Grid item xs key={k}>
      <Avatar
        variant="rounded"
        src="https://i.pravatar.cc/200"
        style={{
          margin: "auto",
          width: "100%",
          height: 140
        }}
      />
    </Grid>
  );

  return (
    <Box variant="outlined">
      <Paper className={classes.header}>
        <AssignmentIcon color="primary" className={classes.centered} />
        <Typography variant="h6" color="primary" className={classes.centered}>
          Detalles del Registro
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onBackClick()}
          className={classes.backButton}
        >
          Volver atrás
        </Button>
      </Paper>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="tabs"
          align-tabs="end"
          className={classes.tabPanel}
        >
          <Tab label="Datos y documentos" {...a11yProps(0)} />
          <Tab label="Adicional" {...a11yProps(1)} />
        </Tabs>
        <Paper className={classes.content}>{getTabContent(value)}</Paper>
      </AppBar>
    </Box>
  );
};

Details.defaultProps = {};

Details.propTypes = {};

export default Details;
