import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

import useStyles from "./LoginBox.styles";

const LoginBox = props => {
  const { email, password } = props;

  /** Styles */
  const classes = useStyles();

  const { t } = useTranslation("", { useSuspense: false });

  /** Use history to navegate */
  const history = useHistory();

  const onLoginClick = () => {
    // TODO: AUTHENTICATION
    localStorage.setItem("token", "test");
    history.push("/dashboard");
  };

  return (
    <Grid container style={{ paddingTop: 20 }}>
      <Grid spacing={2} container item>
        <Grid item sm={4} xs={12} className={classes.grid}>
          <Input
            required
            className={classes.textField}
            id="email"
            placeholder={t("email")}
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item sm={4} xs={12} className={classes.grid}>
          <Input
            required
            className={classes.textField}
            id="password"
            placeholder={t("password")}
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item sm={4} xs={12} className={classes.gridButton}>
          <Button
            variant="contained"
            className={classes.submit}
            onClick={() => onLoginClick()}
          >
            {t("sign_in")}
          </Button>
        </Grid>
      </Grid>

      <Grid spacing={2} container>
        <Grid item sm={4} xs={12} className={classes.grid}>
          <Link
            className={classes.linkText}
            onClick={() => history.push("/forgot-password")}
            variant="body2"
          >
            {t("forgot_password_recover")}
          </Link>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.grid}>
          <Link
            className={classes.linkText}
            component="button"
            onClick={() => history.push("/signup")}
            variant="body2"
          >
            {t("dont_have_account")}
          </Link>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.grid} />
      </Grid>
    </Grid>
  );
};

LoginBox.defaultProps = {
  email: "",
  password: ""
};

LoginBox.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};

export default LoginBox;
