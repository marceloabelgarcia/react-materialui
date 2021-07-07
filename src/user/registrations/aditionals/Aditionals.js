import { Avatar, Grid, MenuItem, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import useStyles from "./Aditionals.styles";
import { Table } from "../../../app/common";

const Aditionals = props => {
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

  const [properties, setProperties] = React.useState([
    { key: "name", value: "patente_3k" },
    { key: "type", value: "mp3" },
    { key: "size", value: "1084kb" },
    { key: "size1", value: "1084kb" },
    { key: "size2", value: "1084kb" },
    { key: "size3", value: "1084kb" },
    { key: "size4", value: "1084kb" },
    { key: "size5", value: "1084kb" },
    { key: "size6", value: "1084kb" },
    { key: "size7", value: "1084kb" },
    { key: "size8", value: "1084kb" },
    { key: "size9", value: "1084kb" },
    { key: "size12", value: "1084kb" },
    { key: "size13", value: "1084kb" }
  ]);

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
    <Grid container spacing={4}>
      {/* LEFT SIDE */}

      <Grid item xs={12} sm={6}>
        <Typography variant="body1" className={classes.titleSection}>
          Propiedades
        </Typography>

        <Table
          data={properties}
          className={classes.propsTable}
          actions={[
            {
              icon: "cloud_upload",
              tooltip: "Subir Archivo",
              isFreeAction: true,
              onClick: () => console.log("file picker not implemented")
            }
          ]}
          options={{
            pageSizeOptions: [5],
            showTitle: false,
            searchFieldAlignment: "left"
          }}
          editable={{}}
          columns={[
            { title: "Clave", field: "key" },
            { title: "Valor", field: "value" }
          ]}
        />
      </Grid>
    </Grid>
  );
};

Aditionals.defaultProps = {};

Aditionals.propTypes = {};

export default Aditionals;
