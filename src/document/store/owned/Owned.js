import {
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddRounded";
import DeleteIcon from "@material-ui/icons/Delete";
import EuroIcon from "@material-ui/icons/Euro";
import FolderIcon from "@material-ui/icons/Folder";
import GroupIcon from "@material-ui/icons/Group";
import HistoryIcon from "@material-ui/icons/History";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { FixedSizeList } from "react-window";

import { FolderTreeView } from "../../../app/common/FolderTree";
import useStyles from "./Owned.styles";

const Owned = props => {
  const { children, rootClasses } = props;

  const classes = { ...useStyles(), ...rootClasses };

  const history = useHistory();

  const [documents, setDocuments] = React.useState([]);

  const { t } = useTranslation("storage");

  const [folders, setFolders] = React.useState([
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
                        certDate: "15/12/2019"
                      },
                      {
                        id: "doc2",
                        name: "Documento2.pdf",
                        status: "En Curso",
                        certDate: "14/12/2019"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      id: "patents",
      name: "Patentes",
      icon: FolderIcon,
      content: {
        documents: [
          {
            id: "doc1",
            name: "Documento1.pdf",
            status: "Certificado",
            certDate: "15/12/2019"
          },
          {
            id: "doc2",
            name: "Documento2.pdf",
            status: "Rechazado",
            certDate: "14/12/2019"
          }
        ],
        folders: []
      }
    },
    {
      id: "works",
      name: "Obras",
      icon: FolderIcon,
      content: {
        documents: [
          {
            id: "doc1",
            name: "Documento1.pdf",
            status: "En Curso",
            certDate: "15/12/2019"
          },
          {
            id: "doc2",
            name: "Documento2.pdf",
            status: "Cancelado",
            certDate: "15/12/2019"
          }
        ],
        folders: []
      }
    },
    {
      id: "docvideos",
      name: "Documentales",
      icon: FolderIcon,
      content: {
        documents: [
          {
            id: "doc1",
            name: "Documento1.pdf",
            status: "Certificado",
            certDate: "20/12/2019"
          },
          {
            id: "doc2",
            name: "Documento2.pdf",
            status: "Certificado",
            certDate: "10/03/2019"
          },
          {
            id: "doc3",
            name: "Documento3.pdf",
            status: "En Curso",
            certDate: "23/05/2019"
          }
        ],
        folders: []
      }
    }
  ]);

  const onFolderClick = folder => {
    const { content } = folder;
    const docs = content.documents || [];

    if (docs.length > 0) {
      setDocuments(docs);
    }
  };

  const onAddDocumentClick = () => history.push("/certify");

  const onViewClick = id => {
    history.push(`/store/documents/${id}`);
  };

  const renderRow = ({ index, style }) => (
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
          <IconButton onClick={() => onViewClick(documents[index].id)}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
      <ListItemIcon style={{ minWidth: 35, maxWidth: 50 }}>
        <Tooltip title={t("delete_document")}>
          <IconButton>
            <DeleteIcon color="action" />
          </IconButton>
        </Tooltip>
      </ListItemIcon>
    </ListItem>
  );

  return (
    <Paper className={rootClasses.tab}>
      {/* FOLDER TREE */}
      <Grid container>
        <Grid item xs={12} md={3}>
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
              folders={folders}
              showmenu={true}
              onItemClick={folder => onFolderClick(folder)}
            />
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Divider orientation="vertical" className={classes.verticalDivider} />
        </Hidden>

        <Grid item xs={12} md>
          <Grid container direction="row">
            <Grid item xs={2}>
              <Typography
                variant="h6"
                style={{ padding: 20, paddingBottom: 15 }}
              >
                {t("common:documents")}
              </Typography>
            </Grid>
            <Grid container item xs justify="flex-end">
              <InputBase
                className={classes.input}
                placeholder={`${t("common:search")}...`}
                inputProps={{ "aria-label": "search" }}
              />
              <Tooltip title={`${t("common:search")}...`}>
                <IconButton style={{ minWidth: 70 }}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={`${t("storage:add_document")}`}>
                <IconButton
                  onClick={() => onAddDocumentClick()}
                  style={{ minWidth: 70 }}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs style={{ paddingTop: 10 }}>
            <FixedSizeList
              height={600}
              width="100%"
              itemSize={55}
              itemCount={documents.length}
            >
              {renderRow}
            </FixedSizeList>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

Owned.propTypes = { rootClasses: PropTypes.shape({}).isRequired };

export default Owned;
