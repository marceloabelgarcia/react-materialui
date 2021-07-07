import React from "react";
import Drawer from "./Drawer";
import Header from "./Header";
import ContentLayout from "./ContentLayout";

export default (props) => {
  const { classes, routes, children, isMobile, drawerOpen, onToggleDrawer } =
    props;

  return (
    <div className={classes.root}>
      <Header
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => onToggleDrawer()}
      />
      <Drawer
        isMobile={isMobile}
        routes={routes}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => onToggleDrawer()}
      />
      <ContentLayout>{children}</ContentLayout>
    </div>
  );
};
