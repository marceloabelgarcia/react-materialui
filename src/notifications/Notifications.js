import { Avatar, Paper } from '@material-ui/core';
import { blue, green, red } from '@material-ui/core/colors';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutlineRounded';
import React from 'react';

import NotificationsList from './NotificationsList';
import NotificationsListHeader from './NotificationsListHeader';

const Notifications = (props) => {
  const [state, setState] = React.useState({
    allSelected: false,
    notifications: [
      {
        id: 1,
        title: 'Transferencia aceptada',
        subtitle: 'Hace 15 minutos',
        icon: (
          <Avatar style={{ backgroundColor: blue[500] }}>
            <MailOutlineIcon />
          </Avatar>
        ),
      },
      {
        id: 2,
        title: 'Transferencia rechazada',
        subtitle: 'Hace 20 minutos',
        icon: (
          <Avatar style={{ backgroundColor: red[500] }}>
            <CloseIcon />
          </Avatar>
        ),
      },
      {
        id: 3,
        title: 'Documento recibido',
        subtitle: 'Hace 2 horas',
        icon: (
          <Avatar style={{ backgroundColor: green[500] }}>
            <CallReceivedIcon />
          </Avatar>
        ),
      },
      {
        id: 4,
        title: 'Documento recibido',
        subtitle: 'Hace 3 horas',
        icon: (
          <Avatar style={{ backgroundColor: green[500] }}>
            <CallReceivedIcon />
          </Avatar>
        ),
      },
      {
        id: 5,
        title: 'Documento recibido',
        subtitle: 'Hace 5 días',
        icon: (
          <Avatar style={{ backgroundColor: green[500] }}>
            <CallReceivedIcon />
          </Avatar>
        ),
      },
      {
        id: 6,
        title: 'Documento recibido',
        subtitle: 'Hace 5 días',
        icon: (
          <Avatar style={{ backgroundColor: green[500] }}>
            <CallReceivedIcon />
          </Avatar>
        ),
      },
      {
        id: 7,
        title: 'Documento recibido',
        subtitle: 'Hace 5 días',
        icon: (
          <Avatar style={{ backgroundColor: green[500] }}>
            <CallReceivedIcon />
          </Avatar>
        ),
      },
      {
        id: 8,
        title: 'Documento recibido',
        subtitle: 'Hace 5 días',
        icon: (
          <Avatar style={{ backgroundColor: green[500] }}>
            <CallReceivedIcon />
          </Avatar>
        ),
      },
    ],
  });

  const showDelete = state.notifications.filter((n) => n.isSelected).length > 0;

  /**
   * Handle select all checkboxes
   * @param {bool} checked
   */
  const onAllChecked = (checked) => {
    const notifications = state.notifications.map((n) => ({ ...n, isSelected: !showDelete }));
    return setState({ ...state, notifications, allSelected: (checked && !showDelete) });
  };

  /**
   * Handle checkbox item check
   * @param {event} event
   * @param {bool} checked
   */
  const onItemChecked = (event, checked) => {
    const notifications = state.notifications.map(
      (n) => (String(n.id) === event.target.id ? ({ ...n, isSelected: checked }) : n),
    );

    return setState({ ...state, notifications, allSelected: checked });
  };

  return (
    <Paper>
      <NotificationsListHeader
        onAllChecked={onAllChecked}
        showDelete={showDelete}
        allChecked={state.allSelected}
      />

      <NotificationsList
        notifications={state.notifications}
        onChange={onItemChecked}
      />

    </Paper>
  );
};

Notifications.propTypes = {};

export default Notifications;
