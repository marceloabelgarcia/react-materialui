import { Grid, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './Form.styles';

const FormStep = ({ classes: rootClasses }) => {
  // Get styles from hook
  const classes = { ...useStyles(), ...rootClasses };

  const { t } = useTranslation('send', { useSuspense: false });

  return (
    <Grid container direction="column" spacing={2} className={classes.stepContainer}>
      <TextField
        required
        fullWidth
        label={t('receiver')}
        variant="outlined"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        label={t('subject')}
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        multiline
        rows={10}
        label={t('message')}
        variant="outlined"
        margin="normal"
      />
    </Grid>
  );
};

FormStep.defaultProps = {};

FormStep.propTypes = {
  classes: PropTypes.shape({
    stepContainer: PropTypes.string.isRequired,
    stepSection: PropTypes.string.isRequired,
    stepSectionTitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormStep;
