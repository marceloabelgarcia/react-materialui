import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import TreeView from "@material-ui/lab/TreeView";
import PropTypes from "prop-types";
import React from "react";
import FolderTreeItem from "./FolderTreeItem";
import useStyles from "./FolderTreeView.styles";
import FolderTreeMenu from "./FolderTreeMenu";

const FolderTreeView = props => {
  // Use styles hook
  const classes = useStyles();

  // Get props
  const { folders, showmenu, onItemClick } = props;

  const renderItems = items =>
    items.map(i => {
      const { content } = i;
      const sFolders = content.folders || [];
      const sDocuments = content.documents || [];

      const totalFolders = sFolders.length;
      const totalDocs = sDocuments.length;
      const total = totalFolders + totalDocs;

      return (
        <FolderTreeItem
          key={i.id}
          nodeId={i.id}
          labelText={i.name}
          labelIcon={i.icon}
          onClick={() => onItemClick(i)}
          labelInfo={total}
          color="#1a73e8"
          bgColor="#e8f0fe"
          showmenu={showmenu}
        >
          {folders ? renderItems(sFolders) : null}
        </FolderTreeItem>
      );
    });

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {renderItems(folders)}
    </TreeView>
  );
};

FolderTreeView.defaultProps = {
  folders: []
};

FolderTreeView.propTypes = {
  folders: PropTypes.array
};

export default FolderTreeView;
