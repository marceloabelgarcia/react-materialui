import { Avatar, Button, Divider, Grid, Typography } from '@material-ui/core';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import avatarImg from 'app/assets/avatar.jpg';

import ContentSection from './ProfileContentSection';

const Separator = () => (
  <Grid item xs>
    <Divider />
  </Grid>
);

const Content = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Avatar
          variant="rounded"
          src={avatarImg}
          style={{
            margin: 'auto',
            marginTop: 20,
            marginBottom: 5,
            width: 140,
            height: 140,
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 15, paddingBottom: 25, textAlign: 'center' }}>
        <Typography variant="h6" style={{ lineHeight: 1.3, marginBottom: 5 }}>{`${t('welcome')} Ramón`}</Typography>
        <Typography variant="caption">CEO @ ByEvolution</Typography>
      </Grid>

      <Grid container item xs={12} spacing={3}>
        {/* Section separator */}
        <Separator />

        {/* Plan Type */}
        <ContentSection
          color="primary"
          bgColor="rgba(230, 235, 251, 1)"
          tooltip="Plan contratado"
          icon={AccountBalanceWalletIcon}
          button={(
            <Button size="small" variant="contained" color="primary">{t('upgrade')}</Button>
        )}
          text={t('dashboard:basic_plan')}
        />
      </Grid>
    </Grid>
  );
};

Content.defaultProps = { classes: {} };
Content.propTypes = { classes: PropTypes.shape({}) };

export default Content;
