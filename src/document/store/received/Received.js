import {
  Avatar,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/AddRounded";
import StateIcon from "@material-ui/icons/Lens";
import EuroIcon from "@material-ui/icons/Euro";
import FolderIcon from "@material-ui/icons/Folder";
import HistoryIcon from "@material-ui/icons/History";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useTranslation } from "react-i18next";
import { FixedSizeList } from "react-window";
import { useHistory } from "react-router-dom";

import { FolderTreeView } from "../../../app/common/FolderTree";

const Shared = props => {
  const { rootClasses } = props;

  const [contactSelected, setContactSelected] = React.useState("");

  const { t } = useTranslation("storage");
  const history = useHistory();

  const [contacts, setContacts] = React.useState([
    {
      id: "stephany",
      name: "Stephany",
      surname: "Hugg",
      folders: [
        {
          id: "contracts",
          name: "Contratos",
          icon: FolderIcon,
          content: {
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
                state: 1
              },
              {
                id: "doc2",
                name: "Documento2.pdf",
                status: "Rechazado",
                certDate: "10/03/2019",
                from: "20/12/2019",
                to: "20/12/2021",
                access: 3,
                price: 5,
                state: 2
              }
            ]
          }
        }
      ]
    },
    {
      id: "jack",
      name: "Jack",
      surname: "Reacher",
      folders: [
        {
          id: "contracts",
          name: "Contratos",
          icon: FolderIcon,
          content: {
            folders: [
              {
                id: "employees",
                name: "Empleados",
                icon: FolderIcon,
                content: {
                  folders: [
                    {
                      id: "2019",
                      name: "2019",
                      icon: FolderIcon,
                      content: {
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
                            state: 1
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
                            state: 0
                          },
                          {
                            id: "doc3",
                            name: "Documento3.pdf",
                            status: "En Curso",
                            certDate: "09/05/2019",
                            from: "20/12/2019",
                            to: "20/12/2021",
                            access: 3,
                            price: 5,
                            state: 0
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: "doe",
      name: "Jonh",
      surname: "Doe",
      folders: [
        {
          id: "contracts",
          name: "Contratos",
          icon: FolderIcon,
          content: {
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
                state: 1
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
                state: 1
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
                state: 1
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
                state: 1
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
                state: 1
              }
            ]
          }
        }
      ]
    }
  ]);

  const [documents, setDocuments] = React.useState([]);

  const [folders, setFolders] = React.useState([]);

  const onAddDocumentClick = () => {
    history.push("/store/documents/doc1");
  };

  const onContactClick = contact => {
    const { folders: folds } = contact;

    if (folds.length > 0) {
      setContactSelected(contact.name);
      setFolders(folds);
      setDocuments([]);
    }
  };

  const onFolderClick = folder => {
    const { content } = folder;
    const docs = content.documents || [];

    if (docs.length > 0) {
      setDocuments(docs);
    }
  };

  const getStateColor = state => {
    let color = "#ccc";
    if (state === 1) {
      color = "#0c0";
    }
    if (state === 2) {
      color = "#c00";
    }

    return color;
  };
  const renderContactRow = ({ index, style }) => (
    <ListItem
      button
      key={index}
      id={contacts[index].id}
      selected={contacts[index].name === contactSelected}
      onClick={() => onContactClick(contacts[index])}
      style={{
        ...style,
        marginTop: 5,
        borderBottom: "1px solid #f0f0f0f0",
        padding: 30,
        paddingLeft: 20
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
                      : "#c0c0c0"
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
        <StateIcon style={{ color: getStateColor(documents[index].state) }} />
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
        <Grid item xs={12} md={2} style={{ minWidth: 220 }}>
          <Typography variant="h6" style={{ padding: 20, paddingBottom: 15 }}>
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

        <Grid item xs={12} md={2} style={{ minWidth: 220 }}>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              style={{ width: "100%", padding: 20, paddingBottom: 15 }}
            >
              {t("common:folders")}
            </Typography>

            <Tooltip title={t("common:add_folder")}>
              <IconButton style={{ minWidth: 70 }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Divider />
          <Grid
            item
            xs
            style={{ paddingTop: 10, paddingLeft: 5, marginRight: 10 }}
          >
            <FolderTreeView
              showmenu={true}
              folders={folders}
              onItemClick={folder => onFolderClick(folder)}
            />
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
                {t("received_documents")}
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
