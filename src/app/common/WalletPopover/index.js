import { Button, CardActions, CardHeader, colors, Divider, Popover } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './index.styles';
import NotificationList from './MovementsList';
import Placeholder from './Placeholder';

function WalletPopover({ movements, anchorEl, ...rest }) {
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

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
        <CardHeader
          title={t('header:movements')}
          titleTypographyProps={{ variant: 'h6' }}
          action={
            <Button color="primary" variant="contained">{t('header:recharge')}</Button>
          }
        />
        <Divider />
        {movements.length > 0 ? (
          <NotificationList movements={movements} />
        ) : (
          <Placeholder />
        )}
        <Divider />
        <CardActions className={classes.actions}>
          <Button
            component={RouterLink}
            size="small"
            to="/wallet"
          >
            {t('common:more')}
          </Button>
        </CardActions>
      </div>
    </Popover>
  );
}

WalletPopover.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  movements: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default WalletPopover;
