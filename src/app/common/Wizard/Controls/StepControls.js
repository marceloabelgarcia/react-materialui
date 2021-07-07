import { Button, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

import useStyles from "./StepControls.styles";

const StepControls = props => {
  const {
    nextStep,
    previousStep,
    currentStep,
    totalSteps,
    endTitle,
    onEndClick
  } = props;

  const classes = useStyles();

  // Check if it's the last step
  const isLastStep = currentStep === totalSteps;

  const { t } = useTranslation("", { useSuspense: false });

  const EndClick = () => {
    if (typeof onEndClick === "function") {
      onEndClick();
    }
  };

  return (
    <Grid container item xs={12} className={classes.container}>
      <Grid container item xs={12} sm={4} justify="center">
        <Button
          variant="contained"
          color="primary"
          disabled={currentStep === 1}
          onClick={() => previousStep()}
        >
          {t("back")}
        </Button>
      </Grid>
      <Grid container item xs={12} sm={4} justify="center">
        <Typography variant="body2" className={classes.stepIndicator}>
          {`${t("step")} ${currentStep} ${t("of")} ${totalSteps}`}
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={4} justify="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => (!isLastStep ? nextStep() : EndClick())}
        >
          {currentStep === totalSteps
            ? endTitle || t("finish_and_pay")
            : t("next")}
        </Button>
      </Grid>
    </Grid>
  );
};

StepControls.defaultProps = { endTitle: "" };

StepControls.propTypes = {
  endTitle: PropTypes.string,
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default StepControls;
