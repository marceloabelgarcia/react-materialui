import { Chip, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Table } from "../../../app/common";
import useStyles from "./Access.styles";

const Access = (props) => {
  const { rootClasses } = props;

  const classes = { ...useStyles(), ...rootClasses };

  const sharingTypes = {
    view: "Leer",
    download: "Descargar",
    streaming: "Streaming",
    share: "Compartir",
  };

  const [access] = React.useState([
    {
      id: 1,
      accessDatetime: "21/01/2020 15:03:05",
      user: "Marcelo García",
      sharingType: "view",
      payment: "1.05€",
      fee: "0.55€",
      benefits: "0.50€",
    },
    {
      id: 2,
      accessDatetime: "11/10/2019 10:03:06",
      user: "Ramón Márquez",
      sharingType: "share",
      payment: "1.05€",
      fee: "0.55€",
      benefits: "0.50€",
    },
    {
      id: 3,
      accessDatetime: "11/10/2019 10:03:06",
      user: "Pedro Gutierrez",
      sharingType: "download",
      payment: "0.00€",
      fee: "0.00€",
      benefits: "0.00€",
    },
  ]);

  const getSharingType = (type) => sharingTypes[type] || "";

  const renderChip = (type) => (
    <Chip color="primary" label={getSharingType(type)} />
  );

  return (
    <Paper className={classes.tab} style={{ padding: 30 }}>
      <Table
        data={access}
        options={{
          pageSizeOptions: [5],
          showTitle: false,
          searchFieldAlignment: "left",
          minBodyHeight: 450,
          filtering: true,
        }}
        editable={{}}
        columns={[
          {
            title: "Fecha",
            field: "accessDatetime",
            cellStyle: { width: 200 },
          },
          {
            title: "Usuario",
            field: "user",
            lookup: {
              "Marcelo García": "Marcelo García",
              "Ramón Márquez": "Ramón Márquez",
              "Pedro Gutierrez": "Pedro Gutierrez",
            },
            filtering: true,
          },
          {
            title: "Tipo Sharing",
            field: "sharingType",
            lookup: sharingTypes,
            render: ({ sharingType }) => renderChip(sharingType),
          },
          { title: "Pago destinatario", field: "payment", filtering: false },
          { title: "Comisión", field: "fee", filtering: false },
          { title: "Beneficios", field: "benefits", filtering: false },
        ]}
      />
    </Paper>
  );
};

Access.propTypes = {
  rootClasses: PropTypes.shape({
    tab: PropTypes.string.isRequired,
  }).isRequired,
};

export default Access;
