import { Grid, Tooltip, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const ContentSection = ({
  bgColor,
  iconColor, icon: Icon,
  button,
  text, tooltip,
}) => (
  <Grid container item xs={12} style={{ paddingLeft: 30, backgroundColor: bgColor }}>
    <Grid item xs={2} style={{ paddingTop: 5 }}>
      <Tooltip title={tooltip} placement="top">
        <Icon color={iconColor} />
      </Tooltip>
    </Grid>
    <Grid item xs style={{ margin: 'auto' }}>
      <Typography variant="caption">{text}</Typography>
    </Grid>
    <Grid item xs style={{ margin: 'auto' }}>
      {button}
    </Grid>
  </Grid>
);

ContentSection.defaultProps = {
  iconColor: 'primary',
  bgColor: 'transparent',
  tooltip: '',
  button: null,
};

ContentSection.propTypes = {
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  button: PropTypes.element,
};

export default ContentSection;
