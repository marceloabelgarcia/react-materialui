import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './Catalog.styles';

const Catalog = (props) => {
  const { children, rootClasses } = props;

  const classes = { ...useStyles(), ...rootClasses };

  const history = useHistory();

  return (
    <Paper className={rootClasses.tab} />
  );
};

Catalog.propTypes = {
  rootClasses: PropTypes.shape({}).isRequired,
};

export default Catalog;
