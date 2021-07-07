import { Paper } from "@material-ui/core";
import React from "react";

import { Table } from "../../app/common";
import useStyles from "./Contacts.styles";

const Contacts = () => {
  // Get styles from hook
  const classes = useStyles();

  const [contacts, setContacts] = React.useState([
    {
      id: "u1",
      name: "Marcelo",
      surname: "García",
      email: "garciamaar@gmail.com",
      phone: "+34 604243920",
    },
  ]);

  const onRowAdd = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setContacts([...contacts, data]);
        resolve();
      }, 1000);
    });

  const onRowUpdate = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const newContacts = contacts.map((c) => {
          if (c.id === data.id) {
            return { ...c, ...data };
          }
          return c;
        });
        setContacts(newContacts);
        resolve();
      }, 1000);
    });

  const onRowDelete = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const newContacts = contacts.filter((c) => c.id !== data.id);
        setContacts(newContacts);
        resolve();
      }, 1000);
    });

  return (
    <Paper variant="outlined">
      <Table
        data={contacts}
        options={{
          pageSizeOptions: [5],
          showTitle: false,
          searchFieldAlignment: "left",
          minBodyHeight: 450,
          filtering: true,
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowAdd: (data) => onRowAdd(data),
          onRowUpdate: (data) => onRowUpdate(data),
          onRowDelete: (data) => onRowDelete(data),
        }}
        columns={[
          { title: "Nombre", field: "name" },
          { title: "Apellidos", field: "surname" },
          { title: "Email", field: "email" },
          { title: "Teléfono", field: "phone" },
        ]}
      />
    </Paper>
  );
};

Contacts.defaultProps = {};

Contacts.propTypes = {};

export default Contacts;
