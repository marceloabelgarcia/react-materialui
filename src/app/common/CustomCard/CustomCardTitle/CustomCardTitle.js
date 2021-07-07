import { Divider, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './CustomCardTitle.styles';

const Title = ({ title, buttons }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={buttons ? 3 : 12} lg={buttons ? 3 : 6} className={classes.title}>
        <Typography variant="h6">
          {title}
        </Typography>
      </Grid>
      <Grid container item xs>
        {buttons}
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

Title.defaultProps = { buttons: null };

Title.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.any,
};

export default Title;
