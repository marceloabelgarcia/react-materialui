import React from "react";

import { makeStyles, Menu, MenuItem, MenuList } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

const FolderTreeMenu = props => {
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    onClick,
    ...other
  } = props;

  const { t } = useTranslation("storage");

  const options = [
    t("common:add_folder"),
    t("common:rename_folder"),
    t("common:delete_folder")
  ];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          overflow: "hidden",
          height: 20,
          padding: 0,
          marginTop: -4,
          marginLeft: 5
        }}
      >
        <Icon>more_vert</Icon>
      </div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        {options.map(option => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

FolderTreeMenu.propTypes = {};

export default FolderTreeMenu;
