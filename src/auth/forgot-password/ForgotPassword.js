import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { FormControlLabel } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './ForgotPassword.styles';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
        Copyright © ByEvolution Creative Factory
    {' '}
    {new Date().getFullYear()}
      .
  </Typography>
);

const ForgotPassword = (props) => {
  const { email, password } = props;

  /** Styles */
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

  /** Use history to navegate */
  const history = useHistory();

  const onForgotPasswordClick = () => {
    // TODO: AUTHENTICATION
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('forgot_password')}
        </Typography>
        <Typography variant="caption" align="center">
          {t('forgot_password_helper')}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={email}
            required
            fullWidth
            id="email"
            label={t('email')}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onForgotPasswordClick()}
          >
            Enviar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={() => history.push('/signgin')} variant="body2">
                {t('have_account')}
              </Link>
            </Grid>
            <Grid item>
              <Link component="button" onClick={() => history.push('/signup')} variant="body2">
                {t('dont_have_account')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

ForgotPassword.defaultProps = {
  email: '',
  password: '',
};

ForgotPassword.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default ForgotPassword;
