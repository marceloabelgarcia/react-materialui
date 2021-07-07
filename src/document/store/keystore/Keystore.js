import {
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  Hidden,
  IconButton,
  Tooltip,
  InputBase,
  Avatar,
} from "@material-ui/core";
import React from "react";
import { FixedSizeList } from "react-window";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import GroupIcon from "@material-ui/icons/Group";
import HistoryIcon from "@material-ui/icons/History";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import EuroIcon from "@material-ui/icons/Euro";
import { useTranslation } from "react-i18next";

const Keysotre = (props) => {
  const { children, rootClasses } = props;

  const [contactSelected, setContactSelected] = React.useState("");

  const { t } = useTranslation("storage");

  const [contacts, setContacts] = React.useState([
    {
      id: "chelo",
      name: "Stephany",
      surname: "Hugg",
      documents: [
        {
          id: "doc1",
          name: "Documento1.pdf",
          status: "Certificado",
          certDate: "20/12/2019",
        },
        {
          id: "doc2",
          name: "Documento2.pdf",
          status: "Certificado",
          certDate: "10/03/2019",
        },
        {
          id: "doc3",
          name: "Documento3.pdf",
          status: "En Curso",
          certDate: "23/05/2019",
        },
      ],
    },
    {
      id: "ramon",
      name: "Jack",
      surname: "Reacher",
      documents: [
        {
          id: "doc1",
          name: "Documento1.pdf",
          status: "Certificado",
          certDate: "20/12/2019",
        },
        {
          id: "doc2",
          name: "Documento2.pdf",
          status: "Certificado",
          certDate: "10/03/2019",
        },
        {
          id: "doc3",
          name: "Documento3.pdf",
          status: "En Curso",
          certDate: "23/05/2019",
        },
        {
          id: "doc4",
          name: "Documento4.pdf",
          status: "Rechazado",
          certDate: "01/05/2019",
        },
      ],
    },
    {
      id: "pedro",
      name: "Jonh",
      surname: "Doe",
      documents: [
        {
          id: "doc1",
          name: "Documento1.pdf",
          status: "Certificado",
          certDate: "20/12/2019",
        },
        {
          id: "doc2",
          name: "Documento2.pdf",
          status: "Certificado",
          certDate: "10/03/2019",
        },
        {
          id: "doc3",
          name: "Documento3.pdf",
          status: "Certificado",
          certDate: "09/05/2019",
        },
        {
          id: "doc4",
          name: "Documento4.pdf",
          status: "En Curso",
          certDate: "20/05/2019",
        },
        {
          id: "doc5",
          name: "Documento5.pdf",
          status: "En Curso",
          certDate: "21/05/2019",
        },
      ],
    },
  ]);

  const [documents, setDocuments] = React.useState([]);

  const onContactClick = (contact) => {
    const { documents: docs } = contact;

    if (docs.length > 0) {
      setContactSelected(contact.id);
      setDocuments(docs);
    }
  };

  const renderContactRow = ({ index, style }) => (
    <ListItem
      button
      key={index}
      id={contacts[index].id}
      selected={contacts[index].id === contactSelected}
      onClick={() => onContactClick(contacts[index])}
      style={{
        ...style,
        marginTop: 5,
        borderBottom: "1px solid #f0f0f0f0",
        padding: 30,
        paddingLeft: 20,
      }}
    >
      <ListItemIcon style={{ minWidth: 35, maxWidth: 50, marginRight: 10 }}>
        <Avatar>E</Avatar>
      </ListItemIcon>
      <ListItemText
        primary={contacts[index].name}
        secondary={contacts[index].surname}
      />
    </ListItem>
  );

  const renderDocumentRow = ({ index, style }) => (
    <ListItem
      key={index}
      id={documents[index].id}
      style={{ ...style, marginTop: 5 }}
    >
      <ListItemIcon style={{ minWidth: 35, maxWidth: 50 }}>
        <PictureAsPdfIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={documents[index].name}
        secondary={
          <Grid container>
            <Grid item xs={1} style={{ maxWidth: 25 }}>
              <EuroIcon
                fontSize="small"
                style={{
                  color:
                    documents[index].status === "Certificado"
                      ? "green"
                      : "#c0c0c0",
                }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${documents[index].status} - ${documents[index].certDate}`}</Typography>
            </Grid>
          </Grid>
        }
      />
      <ListItemIcon style={{ minWidth: 35, maxWidth: 50 }}>
        <Tooltip title={t("common:view_contacts")}>
          <IconButton>
            <GroupIcon />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
      <ListItemIcon style={{ minWidth: 35, maxWidth: 50 }}>
        <Tooltip title={t("common:view_history")}>
          <IconButton>
            <HistoryIcon />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
      <ListItemIcon style={{ minWidth: 35, maxWidth: 50 }}>
        <Tooltip title={t("common:view_details")}>
          <IconButton>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
    </ListItem>
  );

  return (
    <Paper className={rootClasses.tab}>
      {/* FOLDER TREE */}
      <Grid container></Grid>
    </Paper>
  );
};

Keysotre.propTypes = {};

export default Keysotre;
