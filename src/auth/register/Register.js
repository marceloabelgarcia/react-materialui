import { Paper, Step, StepLabel, Stepper } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import { StepControls } from "../../app/common/Wizard";
import useStyles from "./Register.styles";
import {
  DocsStep,
  EndmsgStep,
  InfoStep,
  PayStep,
  PrivacyStep,
  TermsStep,
  BillingStep
} from "./steps";

import LoginBox from "../../landing/LoginBox";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Byevolution.com
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function SignUp() {
  const classes = useStyles();

  const history = useHistory();

  const [activeStep, setActiveStep] = React.useState(1);
  const [terms, setTerms] = React.useState({ disabled: true, accept: false });

  const UpdateTerms = value => {
    setTerms({ disabled: false, accept: value });
  };

  const [privacy, setPrivacy] = React.useState({
    disabled: true,
    accept: false
  });

  const [docType, setDocType] = React.useState(0);

  const UpdatePrivacy = value => {
    setPrivacy({ disabled: false, accept: value });
  };

  const UpdateDoctype = value => {
    setDocType(value);
  };

  const { t } = useTranslation("", { useSuspense: false });

  const steps = [
    t("terms_and_conditions"),
    t("privacy_policy"),
    t("identification"),
    t("information"),
    t("billing"),
    t("briefing")
  ];

  const getStepContent = step => {
    switch (step - 1) {
      case 0:
        return <TermsStep UpdateTerms={UpdateTerms} terms={terms} />;
      case 1:
        return <PrivacyStep UpdatePrivacy={UpdatePrivacy} privacy={privacy} />;
      case 2:
        return <DocsStep UpdateDoctype={UpdateDoctype} docType={docType} />;
      case 3:
        return <InfoStep docType={docType} />;
      case 4:
        return <BillingStep docType={docType} />;
      case 5:
        return <PayStep />;
      case 6:
        return <EndmsgStep />;

      default:
        return getStepContent(0);
    }
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Grid direction="column" container>
      <Grid
        alignItems="center"
        justify="center"
        container
        className={classes.boxHeader}
      >
        <Grid item xs={12} lg={7}>
          <Typography variant="h1" className={classes.logoText} align="center">
            NDL DocKeeper
          </Typography>
        </Grid>
        <Grid className={classes.boxLogin} xs={12} lg item>
          <LoginBox />
        </Grid>
      </Grid>
      <Container component="main">
        <div className={classes.paper}>
          {/* HEADER */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
          </div>
          {/* WIZARD */}
          <Paper variant="outlined" className={classes.wizard}>
            <Stepper activeStep={activeStep - 1}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
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
                endTitle={t("signup:register_and_pay")}
                onEndClick={() => history.push("/message")}
              />
            </Box>
          </Paper>

          {/* FOOTER */}
          {/*          
          <Grid container justify="center">
            <Grid item>
              <Link variant="body2" onClick={() => history.push("/signin")}>
                {t("have_account")}
              </Link>
            </Grid>
          </Grid>
          */}
        </div>
      </Container>
      <Grid className={classes.footerBox} item>
        <Copyright />
      </Grid>
    </Grid>
  );
}
