import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

import avatarImg from "../../../../app/assets/avatar.jpg";
import dnifrontImg from "../../../../app/assets/dnifront.png";
import useStyles from "./PayStep.styles";

const PayStep = () => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const name = "nombre";
  const surname = "surname";
  const companyposition = "companyposition";
  const company = "company";
  const email = "email@email.com";
  const user = "username";
  const phone = "555-555555";
  const promcode = "XXKda82aa";
  const iam = "Persona";
  const nif = "389382938";
  const juridicform = "Sociedad Limitada";
  const cif = "88822283";
  const address = "Poseidon 223";
  const zipcode = "29630";
  const city = "Málaga";
  const location = "Benalmádena";
  const town = "España";
  const totalPrice = 5;

  /**
   * Styled Component
   * @param  {} {children}
   */
  const PayBox = ({ children }) => (
    <Box
      style={{ maxHeight: 200, overflow: "auto" }}
      className={classes.payBox}
    >
      {children}
    </Box>
  );

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      alignContent="center"
      style={{ padding: 30 }}
    >
      <Grid
        style={{
          maxWidth: 600,
          margin: "auto"
        }}
        item
        xs={12}
        sm={12}
      >
        <Typography variant="body1">{t("briefing")}</Typography>

        {/* Basic Info Section */}
        <PayBox>
          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:name")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {name}
          </Typography>
          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:surname")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {surname}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:iam")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {iam}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:nif")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {nif}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:juridic_form")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {juridicform}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:company")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {company}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:cif")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {cif}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:email")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {email}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:address")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {address}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:zipcode")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {zipcode}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:city")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {city}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:location")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {location}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:town")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {town}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:user")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {user}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:phone")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {phone}
          </Typography>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:photo")}
          </Typography>
          <Grid item xs={7}>
            <div className={classes.imgFrame}>
              <img width={150} height="auto" src={avatarImg} />
            </div>
          </Grid>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:document")}
          </Typography>
          <Grid item xs={7}>
            <div className={classes.imgFrame}>
              <img width={250} height="auto" src={dnifrontImg} />
            </div>
          </Grid>

          <Typography variant="body2" color="primary" className={classes.title}>
            {t("signup:promotional_code")}
          </Typography>
          <Typography variant="subtitle2" className={classes.desc}>
            {promcode}
          </Typography>
        </PayBox>
      </Grid>
    </Grid>
  );
};

PayStep.defaultProps = {};

PayStep.propTypes = {};

export default PayStep;
