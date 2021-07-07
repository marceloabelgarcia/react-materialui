import { Checkbox, Divider, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './Pay.styles';
import PayCertifierList from './PayCertifierList';

const KeyInput = ({
  id, label, className,
  margin, required, width,
  onPaste,
  ...props
}) => (
  <FormControl fullWidth margin={margin} variant="outlined" className={className} required={required}>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <OutlinedInput
      rows={4}
      rowsMax={6}
      rowsMin={2}
      multiline
      endAdornment={(
        <InputAdornment position="end">
          <IconButton
            aria-label="Pegar desde portapepeles"
            onClick={() => onPaste(id)}
          >
            <CopyIcon />
          </IconButton>
        </InputAdornment>
      )}
      {...props}
    />
  </FormControl>
);

const Pay = ({ classes: rootClasses }) => {
  // Get styles from hook
  const classes = { ...useStyles(), ...rootClasses };

  const { t } = useTranslation();

  const [certifiers, setCertifiers] = React.useState([]);
  const [encryptedStorage, setEncryptedStorage] = React.useState(false);
  const [totalCost, setTotalCost] = React.useState(0);
  const [keys, setKeys] = React.useState({
    private: '',
    public: '',
  });

  const loadCertifiers = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newCertifiers = [];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters.charAt(i);
      newCertifiers.push({
        id: letter,
        avatar: letter,
        cost: i + 1,
        name: `Certificador ${i}`,
        checked: false,
      });
    }

    setCertifiers(newCertifiers);
  };

  /**
   * Get content from clipboard and execute given callback
   * @param {function} callback
   */
  const fromClipboard = (id, callback) => navigator.clipboard.readText()
    .then((text) => callback({ ...keys, [id]: text }))
    .catch((err) => console.log(err));

  const onPaste = (id) => fromClipboard(id, setKeys);

  const onCertifiersChange = (index, checked) => {
    const newCertifiers = certifiers;
    const cost = certifiers ? certifiers[index].cost : 0;
    const tCost = (totalCost + cost);

    newCertifiers[index].checked = checked;

    setTotalCost(tCost);
    setCertifiers(newCertifiers);
  };

  React.useEffect(() => {
    loadCertifiers();
  }, []);

  return (
    <Grid container className={classes.stepContainer} spacing={2}>

      <Grid item xs={12} md className={classes.stepSection}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('encrypted_storage')}</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.checkbox}
            control={(
              <Checkbox
                checked={encryptedStorage}
                color="primary"
                onChange={(e) => setEncryptedStorage(e.target.checked)}
              />
            )}
            label={t('activate')}
          />
          <KeyInput
            id="private"
            margin="normal"
            label={t('private_key')}
            value={keys.private}
            className={classes.input}
            labelWidth={110}
            onPaste={(id) => onPaste(id)}
            onChange={(e) => setKeys(e.target.id, e.target.value)}
            required
          />
          <KeyInput
            id="public"
            margin="normal"
            label={t('public_key')}
            value={keys.public}
            className={classes.input}
            labelWidth={110}
            onPaste={(id) => onPaste(id)}
            onChange={(e) => setKeys(e.target.id, e.target.value)}
            required
          />
        </Grid>
      </Grid>

      <Grid item xs={12} md className={classes.stepSection}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('signers')}</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <PayCertifierList
            certifiers={certifiers}
            onCertifiersChange={onCertifiersChange}
            height={330}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('total')}</Typography>
          <Divider />
          <TextField
            id="totalCost"
            disabled
            fullWidth
            value={totalCost}
            variant="outlined"
            margin="normal"
          />
        </Grid>
      </Grid>

    </Grid>
  );
};

Pay.defaultProps = {};

Pay.propTypes = {
  classes: PropTypes.shape({
    checkbox: PropTypes.string.isRequired,
    stepContainer: PropTypes.string.isRequired,
    stepSection: PropTypes.string.isRequired,
    stepSectionTitle: PropTypes.string.isRequired,
    stepSectionDivider: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pay;
