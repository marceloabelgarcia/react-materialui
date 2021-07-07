import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography, Divider, Button, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Dropzone } from '../../app/common';
import useStyles from './Verify.styles';

const Verify = (props) => {
  // Get classes
  const classes = useStyles();

  // Get translations
  const { t } = useTranslation();
  return (
    <Paper style={{ padding: 20 }}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <Typography variant="h6" style={{ padding: 10 }}>
            {t('verify_document')}
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs>
          <TextField fullWidth label={t('document_identifier')} variant="outlined" />
        </Grid>

        <Grid item xs>
          <Dropzone
            placeholder={t('drop_file_or_click')}
            className={classes.dropzone}
          />
        </Grid>

        <Grid item xs>
          <Button fullWidth variant="contained" color="primary">
            {t('verify')}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

Verify.propTypes = {};

export default Verify;
