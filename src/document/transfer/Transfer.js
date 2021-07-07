import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactList from './ContactList';
import OwnedTab from './owned';
import useStyles from './Transfer.styles';

const Transfer = () => {
  // Get styles from hook
  const classes = useStyles();

  const [contacts, setContacts] = React.useState([]);

  const [selectedContact, setSelectedContact] = React.useState(0);

  const { t } = useTranslation();

  const loadContacts = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newContacts = [];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters.charAt(i);
      newContacts.push({
        id: letter,
        avatar: letter,
        name: `Contacto ${i}`,
        checked: false,
      });
    }

    setContacts(newContacts);
  };

  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <Paper variant="outlined" className={classes.paper}>

      {/* MAIN CONTAINER */}
      <Grid container className={classes.stepContainer} spacing={2}>

        {/* FOLDER LIST */}
        <Grid item xs={12} sm={12} md={8} className={classes.stepSection}>
          <OwnedTab rootClasses={classes} />
        </Grid>

        {/* CONTACT LIST */}
        <Grid item xs={12} sm={12} md className={classes.stepSection}>
          <Paper>
            <Typography variant="h6" align="center" style={{ padding: 17 }}>
              {t('common:pick_contact')}
            </Typography>
            <Divider />
            <ContactList
              contacts={contacts}
              selectedContact={selectedContact}
              onContactsChange={setSelectedContact}
              height={411}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} className={classes.bottomSection}>
          <Typography variant="h6" className={classes.stepSectionTitle}>
            {t('common:more_options')}
          </Typography>
          <Divider className={classes.stepSectionDivider} />
          <FormControlLabel
            label={t('transfer:confirm_document')}
            control={(
              <Checkbox
                // checked={docConfirmation}
                // onChange={(e) => handleDocConfirmation(e)}
                color="primary"
              />
          )}
          />
        </Grid>

        {/* Importes */}
        <Grid item xs={12} className={classes.stepSection}>
          <Typography variant="h6" className={classes.stepSectionTitle}>
            {t('amounts')}
          </Typography>
          <Divider className={classes.stepSectionDivider} />
          <Grid container direction="row" spacing={2} className={classes.bottomSection}>
            <Grid item xs={12} md={4}>
              <FormControl
                fullWidth
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel htmlFor="cost">{t('cost')}</InputLabel>
                <OutlinedInput
                  id="cost"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                }
                  labelWidth={45}
                  className={classes.formInput}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl
                fullWidth
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel htmlFor="profits">{t('benefit')}</InputLabel>
                <OutlinedInput
                  id="profits"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                }
                  labelWidth={70}
                  className={classes.formInput}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl
                fullWidth
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel htmlFor="total">{t('total')}</InputLabel>
                <OutlinedInput
                  id="total"
                  readOnly
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                }
                  labelWidth={40}
                  className={classes.formInput}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs alignContent="center" alignItems="center" justify="center" className={classes.bottomSection}>
          <Grid item xs style={{ marginRight: 20 }}>
            <Button fullWidth variant="contained" color="primary">
              {t('save')}
            </Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth variant="contained">
              {t('cancel')}
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </Paper>
  );
};

Transfer.defaultProps = {};

Transfer.propTypes = {};

export default Transfer;
