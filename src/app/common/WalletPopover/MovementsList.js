import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './MovementsList.styles';

import 'moment/locale/es';

function NotificationList({ movements, className, ...rest }) {
  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
      disablePadding
    >
      {movements.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < movements.length - 1}
          key={notification.id}
          to="#"
        >
          <ListItemAvatar>
            <Avatar style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: notification.quantity > 0 ? green[500] : red[700] }}>
              {`${notification.quantity > 0 ? '+' : ''}${notification.quantity}€`}
            </Avatar>
          </ListItemAvatar>
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

NotificationList.defaultProps = { className: '' };

NotificationList.propTypes = {
  className: PropTypes.string,
  movements: PropTypes.array.isRequired,
};

export default NotificationList;
