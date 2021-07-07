import { useMediaQuery, useTheme, LinearProgress } from "@material-ui/core";
import React, { Suspense } from "react";

import Layout from "./Layout";
import useStyles from "./Layout.styles";

export default ({ children, routes }) => {
  const theme = useTheme();

  // Open drawer (no mobile)
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Open mobile drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Checks if it's mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  // Get root styles
  const classes = useStyles();

  /**
   * @name onToggleDrawer
   * @desc Handle toggle drawer click event
   */
  const onToggleDrawer = () => setDrawerOpen(!drawerOpen);
  // const onToggleDrawer = () => {};

  return (
    <Layout
      classes={classes}
      routes={routes}
      isMobile={isMobile}
      drawerOpen={drawerOpen}
      onToggleDrawer={onToggleDrawer}
    >
      <Suspense fallback={<LinearProgress />}>{children}</Suspense>
    </Layout>
  );
};
