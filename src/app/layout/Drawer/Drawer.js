import { Divider, Drawer, IconButton, List, useTheme, Hidden, useMediaQuery } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ListItemLink from '../ListItemLink';
import useStyles from './Drawer.styles';

// Drawer Component
const CustomDrawer = ({ isMobile, routes, drawerOpen, onToggleDrawer }) => {
  const classes = useStyles();
  const theme = useTheme();

  const renderItems = () => (routes ? routes.map((r) => {
    if (r.menu) {
      return (
        <ListItemLink
          key={`item-${r.name}`}
          to={r.path}
          title={r.menu}
          icon={r.menuIcon}
          divider={r.divider}
        />
      );
    }
    return null;
  }) : null);

  const renderDrawerContent = () => (
    <div>
      <div
        className={classes.toolbar}
      >
        {isMobile ? (
          <IconButton onClick={onToggleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        ) : null }
      </div>
      <Divider />
      <List>
        {renderItems()}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="menu">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerOpen && isMobile}
          onClose={onToggleDrawer}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          {renderDrawerContent()}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: false,
            // [classes.drawerOpen]: drawerOpen && !isMobile,
            [classes.drawerClose]: true,
            // [classes.drawerClose]: !drawerOpen || isMobile,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: false,
              [classes.drawerClose]: true,
            }),
          }}
        >
          {renderDrawerContent()}
        </Drawer>
      </Hidden>
    </nav>
  );
};

CustomDrawer.defaultProps = {
  drawerOpen: false,
  onToggleDrawer: () => {},
};

CustomDrawer.propTypes = {
  routes: PropTypes.array.isRequired,
  drawerOpen: PropTypes.bool,
  onToggleDrawer: PropTypes.func,
};

export default CustomDrawer;
