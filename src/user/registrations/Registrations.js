import { Paper } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { Table } from "../../app/common";
import useStyles from "./Registrations.styles";

const Registrations = () => {
  // Get styles from hook
  const classes = useStyles();

  const history = useHistory();

  const { t } = useTranslation();

  const [registrations, setRegistrations] = React.useState([
    {
      id: 1,
      name: "Marcelo",
      surnames: "García",
      email: "garciamaar@gmail.com",
      phone: "+34 604 24 39 20",
      created_at: "10/02/2020",
      isDoc: true,
    },
    {
      id: 2,
      name: "Juan",
      surnames: "Valdés",
      email: "garciamaar2@gmail.com",
      phone: "+34 649 22 03 02",
      created_at: "17/02/2020",
      isDoc: false,
    },
    {
      id: 3,
      name: "Carolina",
      surnames: "Ruiz",
      email: "carolina@gmail.com",
      phone: "+34 671 33 33 10",
      created_at: "10/01/2020",
      isDoc: false,
    },
    {
      id: 4,
      name: "Antonio",
      surnames: "Gutierrez",
      email: "antonio@gmail.com",
      phone: "+34 951 77 42 23",
      created_at: "25/12/2019",
      isDoc: true,
    },
    {
      id: 5,
      name: "Carmen",
      surnames: "Ruiz",
      email: "carmen@gmail.com",
      phone: "+34 952 88 20 01",
      created_at: "05/01/2020",
      isDoc: true,
    },
  ]);

  const onRowAdd = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setRegistrations([...registrations, data]);
        resolve();
      }, 1000);
    });

  const onRowUpdate = (data) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const newRegistrations = registrations.map((c) => {
          if (c.id === data.id) {
            return { ...c, ...data };
          }
          return c;
        });
        setRegistrations(newRegistrations);
        resolve();
      }, 1000);
    });

  const renderTick = ({ isDoc }) => (isDoc ? <CheckIcon /> : null);

  return (
    <Paper variant="outlined">
      <Table
        data={registrations}
        actions={[
          {
            icon: ChevronRightIcon,
            tooltip: "Detalles",
            onClick: (event, { id }) =>
              history.push(`/admin/registrations/${id}/details`),
          },
        ]}
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
        }}
        columns={[
          {
            title: t("common:registation_date"),
            field: "created_at",
            defaultSort: "desc",
            editable: "never",
          },
          { title: t("common:name"), field: "name" },
          { title: t("common:surname"), field: "surnames" },
          { title: t("common:email"), field: "email" },
          { title: t("common:phone"), field: "phone" },
          {
            title: t("common:documents"),
            field: "isDoc",
            render: (rowData) => renderTick(rowData),
          },
        ]}
      />
    </Paper>
  );
};

Registrations.defaultProps = {};

Registrations.propTypes = {};

export default Registrations;
