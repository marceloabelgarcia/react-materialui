import {
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
  Hidden,
  IconButton,
  Tooltip,
  InputBase,
  Avatar,
  List,
} from "@material-ui/core";
import React from "react";
import { FixedSizeList } from "react-window";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import StateIcon from "@material-ui/icons/Lens";
import GroupIcon from "@material-ui/icons/Group";
import HistoryIcon from "@material-ui/icons/History";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import EuroIcon from "@material-ui/icons/Euro";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const Shared = (props) => {
  const { children, rootClasses } = props;

  const [contactSelected, setContactSelected] = React.useState("");

  const { t } = useTranslation("storage");
  const history = useHistory();

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
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
          state: 1,
        },
        {
          id: "doc2",
          name: "Documento2.pdf",
          status: "Certificado",
          certDate: "10/03/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
          state: 1,
        },
        {
          id: "doc3",
          name: "Documento3.pdf",
          status: "En Curso",
          certDate: "23/05/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
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
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
          state: 1,
        },
        {
          id: "doc2",
          name: "Documento2.pdf",
          status: "Certificado",
          certDate: "10/03/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
          state: 1,
        },
        {
          id: "doc3",
          name: "Documento3.pdf",
          status: "En Curso",
          certDate: "23/05/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
        },
        {
          id: "doc4",
          name: "Documento4.pdf",
          status: "Rechazado",
          certDate: "01/05/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
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
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
        },
        {
          id: "doc2",
          name: "Documento2.pdf",
          status: "Certificado",
          certDate: "10/03/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
        },
        {
          id: "doc3",
          name: "Documento3.pdf",
          status: "Certificado",
          certDate: "09/05/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
        },
        {
          id: "doc4",
          name: "Documento4.pdf",
          status: "En Curso",
          certDate: "20/05/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
        },
        {
          id: "doc5",
          name: "Documento5.pdf",
          status: "En Curso",
          certDate: "21/05/2019",
          from: "20/12/2019",
          to: "20/12/2021",
          access: 3,
          price: 5,
        },
      ],
    },
  ]);

  const [documents, setDocuments] = React.useState([]);

  const onAddDocumentClick = () => {
    history.push("/store/documents/doc1");
  };

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
        style={{ width: 50 }}
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
      <ListItemText
        style={{ maxWidth: 150 }}
        primary={documents[index].from}
        secondary={documents[index].to}
      />
      <ListItemText
        style={{ maxWidth: 80, textAlign: "center" }}
        primary={documents[index].access}
      />
      <ListItemText
        style={{ maxWidth: 80, textAlign: "center" }}
        primary={documents[index].price}
      />

      <ListItemIcon style={{ minWidth: 70, maxWidth: 70, paddingLeft: 25 }}>
        <StateIcon
          style={
            documents[index].state === 1 ? { color: "#0c0" } : { color: "#ccc" }
          }
        />
      </ListItemIcon>

      <ListItemIcon style={{ minWidth: 35, maxWidth: 35 }}>
        <Tooltip title={t("common:view_details")}>
          <IconButton onClick={() => onAddDocumentClick()}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
      <ListItemIcon style={{ minWidth: 35, maxWidth: 35 }}>
        <Tooltip title={t("common:delete_document")}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
    </ListItem>
  );

  return (
    <Paper className={rootClasses.tab}>
      {/* FOLDER TREE */}
      <Grid container>
        <Grid item xs={12} md={3} style={{ minWidth: 100 }}>
          <Typography variant="h6" style={{ padding: 20, paddingBottom: 5 }}>
            {t("common:contacts")}
          </Typography>
          <Grid container direction="row">
            <Grid container item xs justify="flex-end">
              <InputBase
                placeholder={`${t("common:search")}...`}
                inputProps={{ "aria-label": "search" }}
                style={{ width: "calc(100% - 80px)" }}
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Divider />
          <Grid item xs>
            <FixedSizeList
              height={600}
              width="100%"
              itemSize={60}
              itemCount={contacts.length}
            >
              {renderContactRow}
            </FixedSizeList>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Divider
            orientation="vertical"
            className={rootClasses.verticalDivider}
          />
        </Hidden>

        <Grid item xs={12} md>
          <Grid container direction="row">
            <Grid item xs>
              <Typography
                variant="h6"
                style={{ padding: 20, paddingBottom: 15 }}
              >
                {t("shared_documents")}
              </Typography>
            </Grid>
            <Grid container item xs justify="flex-end">
              <InputBase
                placeholder={`${t("common:search")}...`}
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton style={{ minWidth: 70 }}>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs style={{ paddingTop: 10 }}>
            <List>
              <ListItem>
                <ListItemText
                  variant="h6"
                  primary={t("docs:document_access")}
                  style={{ width: 50 }}
                ></ListItemText>

                <ListItemText
                  style={{ maxWidth: 150 }}
                  primary={t("docs:available")}
                />
                <ListItemText
                  style={{ maxWidth: 90, minWidth: 90, textAlign: "center" }}
                  primary={t("docs:nacc")}
                />
                <ListItemText
                  style={{ maxWidth: 70, minWidth: 70, textAlign: "center" }}
                  primary={t("docs:price")}
                />
                <ListItemText
                  style={{ maxWidth: 70, minWidth: 70, textAlign: "center" }}
                  primary={t("docs:state")}
                />
                <ListItemText
                  style={{ minWidth: 70, maxWidth: 70, textAlign: "right" }}
                  primary={t("docs:options")}
                />
              </ListItem>
            </List>

            <FixedSizeList
              height={600}
              width="100%"
              itemSize={55}
              itemCount={documents.length}
            >
              {renderDocumentRow}
            </FixedSizeList>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

Shared.propTypes = {};

export default Shared;
