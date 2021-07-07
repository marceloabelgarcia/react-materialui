import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './NotificationList.styles';

import 'moment/locale/es';

function NotificationList({ notifications, className, ...rest }) {
  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
      disablePadding
    >
      {notifications.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < notifications.length - 1}
          key={notification.id}
          to="/notifications"
        >
          <ListItemAvatar>{notification.icon}</ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={moment(notification.created_at).locale('es').fromNow()}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
}

NotificationList.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired,
};

export default NotificationList;
