import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './Header.styles';

const Header = ({
  nextStep,
  previousStep,
  currentStep,
  totalSteps,
}) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid container item xs={12} sm={4} justify="center">
        <Button variant="contained" color="primary" disabled={currentStep === 1} onClick={() => previousStep()}>
        Volver
        </Button>
      </Grid>
      <Grid container item xs={12} sm={4} justify="center">
        <Typography variant="body2" className={classes.stepIndicator}>
          {`Paso ${currentStep} de ${totalSteps}`}
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={4} justify="center">
        <Button variant="contained" color="primary" onClick={() => nextStep()}>
          { currentStep === totalSteps ? 'Finalizar' : 'Siguiente' }
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default Header;
