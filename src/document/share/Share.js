import { Box, Paper, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { StepControls } from '../../app/common/Wizard';
import useStyles from './Share.styles';
import { ShareStep } from './steps';
import PermStep from './steps/PermStep';

const Share = () => {
  // Get styles from hook
  const classes = useStyles();

  // Get translation using hook
  const { t } = useTranslation();

  const [activeStep, setActiveStep] = React.useState(1);

  const steps = [t('share:document_and_share'), t('share:perms_and_pay')];

  const getStepContent = (step) => {
    switch (step - 1) {
      case 0:
        return (
          <ShareStep classes={classes} />
        );
      case 1:
        return (
          <PermStep classes={classes} />
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
    <Paper variant="outlined">
      <Stepper activeStep={activeStep - 1}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = { };
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
      <StepControls
        nextStep={handleNext}
        previousStep={handleBack}
        currentStep={activeStep}
        totalSteps={steps.length}
      />
    </Paper>
  );
};

Share.defaultProps = {};

Share.propTypes = {};

export default Share;
