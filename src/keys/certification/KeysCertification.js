import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CertifierList from './CertifierList';
import KeyInput from './KeyInput';
import useStyles from './KeysCertification.styles';

const KeysCertification = (props) => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const [certifiers, setCertifiers] = React.useState([]);

  const initCertifiers = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newCertifiers = [];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters.charAt(i);
      newCertifiers.push({
        id: letter,
        avatar: letter,
        price: i + 1,
        name: `Certificador ${i}`,
        checked: false,
      });
    }

    setCertifiers(newCertifiers);
  };

  React.useEffect(() => {
    initCertifiers();
  }, []);

  return (
    <Paper variant="outlined" className={classes.wizardPaper}>
      <Grid
        container
        direction="row"
        spacing={2}
        style={{ padding: 20 }}
      >
        <Grid item xs={12} sm={12} lg>
          <Typography variant="h6" style={{ padding: 10 }}>
            {t('information')}
          </Typography>
          <Divider />

          <Grid container direction="column" style={{ paddingTop: 15 }} spacing={2}>

            <Grid item xs>
              <TextField
                required
                fullWidth
                label={t('name')}
                variant="outlined"
              />
            </Grid>

            <Grid item xs>
              <TextField
                required
                fullWidth
                label={t('description')}
                variant="outlined"
              />
            </Grid>

            <Grid item xs>
              <TextField
                required
                fullWidth
                label={t('user')}
                variant="outlined"
              />
            </Grid>

            <Grid item xs>
              <FormControl
                required
                fullWidth
                variant="outlined"
              >
                <InputLabel htmlFor="country">{t('content_type')}</InputLabel>

                <Select
                  labelId="typecontent"
                  id="typecontent"
                  value="RSA"
                  labelWidth={185}
                >
                  {['RSA', 'ECC', 'AES', 'Simple', 'X509'].map((type, i) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs>
              <KeyInput
                id="private"
                label={t('private_key')}
                value=""
                className={classes.input}
                labelWidth={110}
                // onPaste={(id) => onPaste(id)}
                // onChange={(e) => setKeys(e.target.id, e.target.value)}
                required
              />
              <KeyInput
                id="public"
                margin="normal"
                label={t('public_key')}
                value=""
                className={classes.input}
                labelWidth={110}
                // onPaste={(id) => onPaste(id)}
                // onChange={(e) => setKeys(e.target.id, e.target.value)}
                required
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} lg>
          <Grid item xs>
            <Typography variant="h6" style={{ padding: 10 }}>
              {t('signers')}
            </Typography>
            <Divider />
          </Grid>
          <Grid
            container
            direction="column"
            style={{ paddingTop: 15 }}
            spacing={4}
          >

            <CertifierList
              certifiers={certifiers}
              height={350}
            />

            <Grid item xs={12}>
              <Typography variant="subtitle2" className={classes.subtitle}>
                {t('total')}
              </Typography>
              <Divider />
              <TextField
                id="totalCost"
                disabled
                fullWidth
                value={0}
                variant="outlined"
                margin="normal"
              />
            </Grid>

            <Grid container item xs alignContent="center" justify="center" spacing={2}>
              <Grid item xs>
                <Button fullWidth variant="contained" color="primary">
                  {t('certify')}
                </Button>
              </Grid>
              <Grid item xs>
                <Button fullWidth variant="contained">
                  {t('cancel')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

KeysCertification.defaultProps = { };

KeysCertification.propTypes = {};

export default KeysCertification;
