import { Box, Paper, Step, StepLabel, Stepper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { StepControls } from '../../app/common/Wizard';
import useStyles from './Certification.styles';
import { InfoStep, PayStep, TagStep } from './steps';

const Certification = (props) => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const [activeStep, setActiveStep] = React.useState(1);

  const steps = [t('information'), t('cataloging_and_data'), t('briefing')];

  const {
    UpdateDocumentName,
    UpdateDocumentDescription,
    UpdateDocumentCategory,
    UpdateDocumentSubcategory,
    UpdateDocumentFormat,
    UpdateDocumentCertifiers,
    UpdateDocumentTotalPrice,
    UpdateDocumentEncryptedStorage,
    UpdateDocumentPublicKey,
    UpdateDocumentPrivateKey,
    UpdateDocumentSelectedTags,
    UpdateDocumentProperties,
    GetCertifiersByType,
  } = props;

  const { info, tags } = props;

  const pay = { ...info, ...tags };

  const getStepContent = (step) => {
    switch (step - 1) {
      case 0:
        return (
          <InfoStep
            data={info}
            classes={classes}
            UpdateDocumentName={UpdateDocumentName}
            UpdateDocumentDescription={UpdateDocumentDescription}
            UpdateDocumentCategory={UpdateDocumentCategory}
            UpdateDocumentSubcategory={UpdateDocumentSubcategory}
            UpdateDocumentFormat={UpdateDocumentFormat}
            UpdateDocumentCertifiers={UpdateDocumentCertifiers}
            UpdateDocumentTotalPrice={UpdateDocumentTotalPrice}
            GetCertifiersByType={GetCertifiersByType}
          />
        );
      case 1:
        return (
          <TagStep
            data={tags}
            classes={classes}
            UpdateDocumentSelectedTags={UpdateDocumentSelectedTags}
            UpdateDocumentProperties={UpdateDocumentProperties}
            UpdateDocumentEncryptedStorage={UpdateDocumentEncryptedStorage}
            UpdateDocumentPrivateKey={UpdateDocumentPrivateKey}
            UpdateDocumentPublicKey={UpdateDocumentPublicKey}
          />
        );
      case 2:
        return (
          <PayStep
            data={pay}
            classes={classes}
          />
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

Certification.defaultProps = { };

Certification.propTypes = {
  // Data
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    certifiers: PropTypes.array.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,

  tags: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    selectedTags: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
    encryptedStorage: PropTypes.bool.isRequired,
    privateKey: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
  }).isRequired,

  // Funcs
  UpdateDocumentName: PropTypes.func.isRequired,
  UpdateDocumentDescription: PropTypes.func.isRequired,
  UpdateDocumentCategory: PropTypes.func.isRequired,
  UpdateDocumentSubcategory: PropTypes.func.isRequired,
  UpdateDocumentFormat: PropTypes.func.isRequired,
  UpdateDocumentCertifiers: PropTypes.func.isRequired,
  UpdateDocumentEncryptedStorage: PropTypes.func.isRequired,
  UpdateDocumentPrivateKey: PropTypes.func.isRequired,
  UpdateDocumentPublicKey: PropTypes.func.isRequired,
  UpdateDocumentTotalPrice: PropTypes.func.isRequired,
  UpdateDocumentSelectedTags: PropTypes.func.isRequired,
  UpdateDocumentProperties: PropTypes.func.isRequired,
  GetCertifiersByType: PropTypes.func.isRequired,
};

export default Certification;
