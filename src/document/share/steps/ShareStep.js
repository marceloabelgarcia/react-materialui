import { Divider, FormControl, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactList from './ShareContactList';
import useStyles from './ShareStep.styles';

const ShareStep = ({ classes: rootClasses }) => {
  // Get styles from hook
  const classes = { ...useStyles(), ...rootClasses };

  // Get translation using hook
  const { t } = useTranslation();

  const [document, setdocument] = React.useState('');

  const [contacts, setContacts] = React.useState([]);

  const [selectedContact, setSelectedContact] = React.useState(0);

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

  const handleChange = (event) => {
    setdocument(event.target.value);
  };

  return (
    <Grid container direction="column" spacing={3} className={classes.stepContainer}>
      <Grid item xs={12} className={classes.stepSection}>
        <Typography variant="h6" className={classes.stepSectionTitle}>{t('choose_document')}</Typography>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Select
            labelId="document"
            id="document"
            value={document || 'doc1'}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="doc1">Documento Ejemplo 01</MenuItem>
            <MenuItem value="doc2">Documento Ejemplo 02</MenuItem>
            <MenuItem value="doc3">Documento Ejemplo 03</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.stepSection}>
        <Typography variant="h6" className={classes.stepSectionTitle}>{t('pick_contact')}</Typography>
        <Divider />
        <ContactList
          contacts={contacts}
          selectedContact={selectedContact}
          onContactsChange={setSelectedContact}
          height={450}
        />
      </Grid>
    </Grid>
  );
};

ShareStep.defaultProps = {};

ShareStep.propTypes = {
  classes: PropTypes.shape({
    stepContainer: PropTypes.string.isRequired,
    stepSection: PropTypes.string.isRequired,
    stepSectionTitle: PropTypes.string.isRequired,
    stepSectionDivider: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShareStep;
