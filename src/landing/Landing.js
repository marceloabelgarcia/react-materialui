import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Functionalities from './Functionalities';
import HiringPlans from './HiringPlans';
import useStyles from './Landing.styles';
import LoginBox from './LoginBox';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    Copyright © ByEvolution Creative Factory
    {' '}
    {new Date().getFullYear()}
.
  </Typography>
);

const Landing = () => {
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

  return (
    <Grid direction="column" container>
      <Grid alignItems="center" justify="center" container className={classes.boxHeader}>
        <Grid item xs={12} lg={7}>
          <Typography
            variant="h1"
            className={classes.logoText}
            align="center"
          >
              NDL DocKeeper
          </Typography>
        </Grid>
        <Grid className={classes.boxLogin} xs={12} lg item>
          <LoginBox />
        </Grid>
      </Grid>
      <Container>
        <Grid className={classes.boxContainer} container spacing={2}>

          <Grid container item xs={12} lg={6} alignContent="flex-start">
            <Grid item xs={12} style={{ height: 80 }}>
              <Typography variant="h5" align="center">
                {t('signin:functionalities')}
              </Typography>
            </Grid>

            <Functionalities />
          </Grid>

          <Grid container item xs={12} lg={6}>
            <Grid item xs={12} style={{ height: 80 }}>
              <Typography variant="h5" align="center">
                {t('signin:plans')}
              </Typography>
            </Grid>

            <HiringPlans />
          </Grid>
        </Grid>
      </Container>
      <Grid className={classes.footerBox} item>
        <Copyright />
      </Grid>
    </Grid>
  );
};

Landing.defaultProps = {};
Landing.propTypes = {};

export default Landing;
