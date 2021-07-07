import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Title from 'app/common/CustomCard/CustomCardTitle';

import { useTranslation } from 'react-i18next';
import Content from './ProfileContent';

const DashboardProfile = ({ classes }) => {
  const { t } = useTranslation('dashboard');
  return (
    <Grid item xs>
      <Paper className={classes.profileContent}>
        <Grid container direction="column">
          <Title title={t('my_profile')} className={classes.title} />
          <Content classes={classes} />
        </Grid>
      </Paper>
    </Grid>
  );
};

DashboardProfile.propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    profileContent: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardProfile;
