import DateFnsUtils from '@date-io/date-fns';
import { Checkbox, Divider, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './PermStep.styles';

import 'date-fns';

const PermStep = ({ classes: rootClasses }) => {
  // Get styles from hook
  const classes = { ...useStyles(), ...rootClasses };

  const { t } = useTranslation();

  const permissions = [
    {
      name: 'consult',
      title: t('consult'),
      price: 1.50,
      startDate: '',
      endDate: '',
      maxUsesCount: 0,
      unlimited: false,
      checked: false,
    },
    {
      name: 'view',
      title: t('view'),
      price: 1.15,
      startDate: '',
      endDate: '',
      maxUsesCount: 0,
      unlimited: false,
      checked: false,
    },
    {
      name: 'download',
      title: t('download'),
      price: 0,
      startDate: '',
      endDate: '',
      maxUsesCount: 0,
      unlimited: false,
      checked: false,
    },
    {
      name: 'streaming',
      title: t('streaming'),
      price: 1.20,
      startDate: '',
      endDate: '',
      maxUsesCount: 0,
      unlimited: false,
      checked: false,
    },
    {
      name: 'share',
      title: t('share'),
      price: 0.70,
      startDate: '',
      endDate: '',
      maxUsesCount: 0,
      unlimited: false,
      checked: false,
    },
  ];

  return (
    <Grid container direction="column" spacing={4} className={classes.stepContainer}>

      <Grid item xs={12} className={classes.stepSection}>
        <Typography variant="h6" className={classes.stepSectionTitle}>{t('permissions')}</Typography>
        <Divider className={classes.stepSectionDivider} />
        {permissions.map((p, i) => (
          <Grid key={p.name} container direction="row" spacing={2} className={classes.permissionContainer}>
            <Grid item xs={12} md={2} className={classes.permissionTitle}>
              <FormControlLabel
                control={(
                  <Checkbox
                    value={p.name}
                    color="primary"
                  />
                  )}
                label={p.title}
              />
            </Grid>
            <Grid item xs={12} md className={classes.permissionItem}>
              <FormControl fullWidth className={classes.formControl} variant="outlined">
                {i === 0 ? <InputLabel htmlFor="price">{t('price')}</InputLabel> : null }
                <OutlinedInput
                  id="price"
                  startAdornment={<InputAdornment position="start">€</InputAdornment>}
                  labelWidth={i === 0 ? 50 : 0}
                  className={classes.formInput}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md className={classes.usesContainer}>
              <FormControl fullWidth className={classes.formControl} variant="outlined">
                {i === 0 ? <InputLabel shrink htmlFor="price">{t('share:number_of_uses')}</InputLabel> : null }
                <OutlinedInput
                  id="uses"
                  labelWidth={i === 0 ? 80 : 0}
                  type="number"
                  notched
                  className={classes.formInput}
                />
              </FormControl>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={12} md={3} className={classes.startDateContainer}>
                <KeyboardDatePicker
                  autoOk
                  fullWidth
                  disableToolbar
                  disableFuture
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  id={`${p.name}_start_date`}
                  InputProps={{ className: classes.formInput }}
                  InputAdornmentProps={{ position: 'start' }}
                  placeholder={t('share:pick_date')}
                  value={null}
                  label={t('share:access_from')}
                />
              </Grid>
              <Grid item xs={12} md={3} className={classes.dateContainer}>
                <KeyboardDatePicker
                  autoOk
                  fullWidth
                  disableToolbar
                  disableFuture
                  variant="inline"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  id={`${p.name}_end_date`}
                  InputProps={{ className: classes.formInput }}
                  InputAdornmentProps={{ position: 'start' }}
                  placeholder={t('share:pick_date')}
                  value={null}
                  label={t('share:access_to')}
                />
              </Grid>
              <Grid item xs={12} md={1}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      value="checkedB"
                      color="primary"
                    />
                  )}
                  label={t('share:unlimited')}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        ))}
      </Grid>

      {/* Options */}
      <Grid item xs={12} className={classes.stepSection}>
        <Typography variant="h6" className={classes.stepSectionTitle}>{t('options')}</Typography>
        <Divider className={classes.sectionDividerOptions} />
        <FormControl>
          <FormControlLabel
            control={<Checkbox value="confirm" color="primary" />}
            label={t('share:require_document_confirmation')}
          />
        </FormControl>
      </Grid>

      {/* Importes */}
      <Grid item xs={12} className={classes.stepSection}>
        <Typography variant="h6" className={classes.stepSectionTitle}>{t('')}</Typography>
        <Divider className={classes.stepSectionDivider} />
        <Grid container direction="row" spacing={4}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="cost">{t('cost')}</InputLabel>
              <OutlinedInput
                id="cost"
                readOnly
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
                labelWidth={45}
                className={classes.formInput}
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                control={<Checkbox color="primary" value="doc_confirm" />}
                label={t('share:charge_cost_recipient')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="profits">{t('benefit')}</InputLabel>
              <OutlinedInput
                id="profits"
                readOnly
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
                labelWidth={70}
                className={classes.formInput}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="total">{t('total')}</InputLabel>
              <OutlinedInput
                id="total"
                readOnly
                startAdornment={<InputAdornment position="start">€</InputAdornment>}
                labelWidth={40}
                className={classes.formInput}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

PermStep.defaultProps = {};

PermStep.propTypes = {
  classes: PropTypes.shape({
    stepContainer: PropTypes.string,
    startDateContainer: PropTypes.string,
    usesContainer: PropTypes.string,
    permissionContainer: PropTypes.string,
    dateContainer: PropTypes.string,
    sectionDividerOptions: PropTypes.string,
    permissionItem: PropTypes.string,
    permissionTitle: PropTypes.string,
    formInput: PropTypes.string,
    formControl: PropTypes.string,
    stepSection: PropTypes.string.isRequired,
    stepSectionTitle: PropTypes.string.isRequired,
    stepSectionDivider: PropTypes.string.isRequired,
  }).isRequired,
};

export default PermStep;
