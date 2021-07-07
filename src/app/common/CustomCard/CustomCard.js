import { Grid, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import Title from './CustomCardTitle';

const Card = ({ children, title, buttons, height }) => (
  <Paper style={{ height }}>
    <Grid container direction="row">
      <Title title={title} buttons={buttons} />
      <Grid item xs style={{ padding: 10, paddingTop: 0 }}>
        {children}
      </Grid>
    </Grid>
  </Paper>
);

Card.defaultProps = { height: null, buttons: null };

Card.propTypes = {
  buttons: PropTypes.any,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.any,
};

export default Card;
