import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './Properties.styles';

const Properties = (props) => {
  const { children, rootClasses } = props;

  const classes = { ...useStyles(), ...rootClasses };

  const history = useHistory();

  return (
    <Paper className={rootClasses.tab} />
  );
};

Properties.propTypes = {
  rootClasses: PropTypes.shape({}).isRequired,
};

export default Properties;
