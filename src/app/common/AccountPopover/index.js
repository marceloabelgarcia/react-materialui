import { CardHeader, Divider, Popover } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './Account.styles';
import NotificationList from './AccountOptsList';
import Placeholder from './Placeholder';

function AccountPopover({ title, opts, anchorEl, ...rest }) {
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
        <CardHeader title={t('account')} titleTypographyProps={{ variant: 'h6' }} />
        <Divider />
        {opts.length > 0 ? (
          <NotificationList opts={opts} />
        ) : (
          <Placeholder />
        )}
        <Divider />
      </div>
    </Popover>
  );
}

AccountPopover.defaultProps = { className: '', anchorEl: null };

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  opts: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AccountPopover;
