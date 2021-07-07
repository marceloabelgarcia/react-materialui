import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';

import useStyles from './Notification.styles';

const NotificationsList = ({ notifications, onChange }) => {
  const classes = useStyles();

  const renderItem = ({ id, title, subtitle, icon }) => {
    const notification = notifications.find((n) => n.id === id);
    return (
      <ListItem key={id} button alignItems="flex-start">
        <ListItemIcon>
          <Checkbox
            id={String(id)}
            name={String(id)}
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={notification.isSelected || false}
            onChange={onChange}
          />
        </ListItemIcon>
        <ListItemAvatar>
          <Avatar>
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={subtitle}
        />
      </ListItem>
    );
  };

  return (
    <List className={classes.list}>
      {notifications.map((n) => renderItem(n))}
    </List>
  );
};

NotificationsList.propTypes = {};

export default NotificationsList;
