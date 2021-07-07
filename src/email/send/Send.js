import { Box, Paper, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { StepControls } from '../../app/common/Wizard';
import useStyles from './Send.styles';
import { FormStep, PayStep } from './steps';

const Send = () => {
  // Get styles from hook
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(1);

  const { t } = useTranslation();

  const steps = [t('form'), t('briefing')];

  const getStepContent = (step) => {
    switch (step - 1) {
      case 0:
        return (
          <FormStep classes={classes} />
        );
      case 1:
        return (
          <PayStep classes={classes} />
        );
      default:
        return getStepContent(0);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper variant="outlined" className={classes.wizardPaper}>
      <Stepper activeStep={activeStep - 1}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box className={classes.stepContent}>
        {getStepContent(activeStep)}
      </Box>
      <Box>
        <StepControls
          nextStep={handleNext}
          previousStep={handleBack}
          currentStep={activeStep}
          totalSteps={steps.length}
        />
      </Box>
    </Paper>
  );
};

Send.defaultProps = { description: '' };

Send.propTypes = {};

export default Send;
