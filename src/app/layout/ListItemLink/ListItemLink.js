import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import useStyles from './ListItemLink.styles';

const ListItemLink = ({ divider, location, to, onClick, title, icon }) => {
  const activeRoute = (routePath) => location.pathname === routePath;

  const classes = useStyles();

  return (
    <ListItem
      button
      selected={activeRoute(to)}
      onClick={onClick}
      divider={divider}
      component={React.forwardRef((itemProps, ref) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <RouterLink to={to} {...itemProps} ref={ref} />
      ))}
    >
      <Tooltip placement="right-end" title={title}>
        <ListItemIcon color="primary" className={classes.icon}>{icon}</ListItemIcon>
      </Tooltip>

      <ListItemText primary={title} className={classes.item} />
    </ListItem>
  );
};

export default withRouter(ListItemLink);
