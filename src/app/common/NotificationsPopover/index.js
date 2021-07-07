import { Button, CardActions, CardHeader, Divider, Popover } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './Notification.styles';
import NotificationList from './NotificationList';
import Placeholder from './Placeholder';

function NotificationsPopover({ notifications, anchorEl, ...rest }) {
  const classes = useStyles();

  const { t } = useTranslation('header', { useSuspense: false });

  return (
    <Popover
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <div className={classes.root}>
        <CardHeader title={t('notifications')} titleTypographyProps={{ variant: 'h6' }} />
        <Divider />
        {notifications.length > 0 ? (
          <NotificationList notifications={notifications} />
        ) : (
          <Placeholder />
        )}
        <Divider />
        <CardActions className={classes.actions}>
          <Button
            component={RouterLink}
            size="small"
            to="/notifications"
          >
            {t('common:more')}
          </Button>
        </CardActions>
      </div>
    </Popover>
  );
}

NotificationsPopover.defaultProps = {
  anchorEl: null,
  className: '',
};

NotificationsPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default NotificationsPopover;
