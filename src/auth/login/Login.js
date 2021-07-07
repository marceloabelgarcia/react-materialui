import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import useStyles from './Login.styles';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
        Copyright © ByEvolution Creative Factory
    {' '}
    {new Date().getFullYear()}
      .
  </Typography>
);

const SignIn = (props) => {
  const { email, password } = props;

  /** Styles */
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

  /** Use history to navegate */
  const history = useHistory();

  const onLoginClick = () => {
    // TODO: AUTHENTICATION
    localStorage.setItem('token', 'test');
    history.push('/dashboard');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('sign_in')}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={email}
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={password}
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onLoginClick()}
          >
            {t('sign_in')}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={() => history.push('/forgot-password')} variant="body2">
                {t('forgot_password_recover')}
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

SignIn.defaultProps = {
  email: '',
  password: '',
};

SignIn.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default SignIn;
