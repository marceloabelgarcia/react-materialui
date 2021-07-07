import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './EndmsgStep.styles';

const EndmsgStep = (props) => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

  return (
    <Grid container direction="column" alignItems="center">
      <Grid container item direction="column" xs spacing={2}>
        <Grid item xs={12}>
          <Paper style={{ height: 300, overflow: 'auto', textAlign: 'center' }}>
            <Typography variant="subtitle2" className={classes.desc}>
              <br />
              <br />
              {t('signup:processing_registration_advise')}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EndmsgStep;
