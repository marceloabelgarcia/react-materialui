import { AppBar, Paper, Tab, Tabs } from "@material-ui/core";
import FolderSharedIconshare from "@material-ui/icons/FolderShared";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { useTranslation } from "react-i18next";

import OwnedTab from "./owned";
import ReceivedTab from "./received";
import SharedTab from "./shared";
import KeystoreTab from "./keystore";
import useStyles from "./Store.styles";

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const Store = () => {
  // Get styles from hook
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const { t } = useTranslation("storage");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabContent = index => {
    switch (index) {
      case 0:
        return <OwnedTab rootClasses={classes} />;
      case 1:
        return <SharedTab rootClasses={classes} />;
      case 2:
        return <ReceivedTab rootClasses={classes} />;
      case 3:
        return <KeystoreTab rootClasses={classes} />;
      default:
        return null;
    }
  };

  return (
    <Paper variant="outlined">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="tabs"
          variant="fullWidth"
          centered
        >
          <Tab
            label={t("my_documents")}
            icon={<LibraryBooksIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label={t("shared_documents")}
            icon={<FolderSharedIconshare />}
            {...a11yProps(1)}
          />
          <Tab
            label={t("received_documents")}
            icon={<MoveToInboxIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label={t("keystore")}
            icon={<MoveToInboxIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      {getTabContent(value)}
    </Paper>
  );
};

Store.defaultProps = {};

Store.propTypes = {};

export default Store;
