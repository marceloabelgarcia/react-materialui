import { AppBar, Avatar, Button, Divider, Grid, MenuItem, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './Datas.styles';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const Datas = () => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const [docType, setDocType] = React.useState('Pasaporte');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const docTypes = [t('nif'), t('passport')];

  const docTypesItems = docTypes.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  const onDocTypeChange = (e) => {
    setDocType(e.target.value);
  };

  const renderDocumentImage = (k) => (
    <Grid item xs key={k}>
      <Avatar
        variant="rounded"
        src="https://i.pravatar.cc/200"
        style={{
          margin: 'auto',
          width: '100%',
          height: 140,
        }}
      />
    </Grid>
  );

  const getTabContent = (index) => {
    switch (index) {
      case 0:
        return <div />;
      case 1:
        return <div />;

      default:
        return null;
    }
  };

  return (
    <Grid container justify="center" spacing={4}>
      {/* LEFT SIDE */}
      <Grid container item xs={12} md={12} lg={6} direction="column">
        <Grid container item xs>
          <Grid item xs>
            <Typography variant="h6">{t('information')}</Typography>
            <Divider />
          </Grid>
        </Grid>

        {/* NAME AND SURNAMES */}
        <Grid container item xs spacing={2}>
          <Grid item xs={12} md>
            <TextField
              fullWidth
              required
              id="name"
              label={t('name')}
              value="Juan"
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md>
            <TextField
              fullWidth
              id={t('surname')}
              label="Apellidos"
              value="Valdés"
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>

        {/* USER */}
        <Grid container item xs spacing={2}>
          <Grid item xs>
            <TextField
              fullWidth
              required
              id="username"
              label={t('user')}
              value="valdes"
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>

        {/* EMAIL */}
        <Grid container item xs spacing={2}>
          <Grid item xs>
            <TextField
              fullWidth
              required
              id="email"
              label={t('email')}
              value="valdes@gmail.com"
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>

        {/* PHONE */}
        <Grid container item xs spacing={2}>
          <Grid item xs>
            <TextField
              fullWidth
              id="phone"
              label={t('phone')}
              value="639303010"
              variant="outlined"
              margin="normal"
            />
          </Grid>
        </Grid>

        {/* DOCUMENT TYPE */}
        <Grid container item xs spacing={2}>
          <Grid item xs={12} md>
            <TextField
              fullWidth
              required
              select
              id="docType"
              label={t('document_type')}
              value={docType}
              variant="outlined"
              margin="normal"
              onChange={onDocTypeChange}
            >
              {docTypesItems}
            </TextField>
          </Grid>
          <Grid item xs={12} md>
            <TextField
              fullWidth
              disabled={!docType}
              id="docValue"
              label={t('document_number')}
              value=""
              variant="outlined"
              margin="normal"
            />
          </Grid>

          {/* PAYMENT */}
          <Grid item xs={12}>
            <Typography variant="body2">
              Pago realizado por TPV Caixa
            </Typography>
            <Typography variant="subtitle2">30€</Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid container item xs={12} md={12} lg={6} spacing={2}>
        {/* DOCUMENTS */}
        <Grid container item xs={12} spacing={2} alignContent="flex-start">
          <Grid item xs={12}>
            <Typography variant="h6">{t('documents')}</Typography>
            <Divider />
          </Grid>

          {/* LIST */}
          <Grid container item xs={12} justify="center" spacing={2}>
            {docType ? [1, 2].map((v) => renderDocumentImage(v)) : null}
          </Grid>
        </Grid>

        <Grid
          container
          className={classes.docContents}
          item
          xs={12}
          spacing={2}
        >
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="tabs"
            >
              <Tab label="Frontal" {...a11yProps(0)} />
              <Tab label="Trasera" {...a11yProps(1)} />
            </Tabs>
            {getTabContent(value)}
          </AppBar>
        </Grid>
        {/* SIGN UP */}
        <Grid container item xs={12} alignContent="flex-end" spacing={2}>
          <Grid item xs>
            <Button fullWidth variant="contained" color="inherit">
              Reclamar
            </Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth variant="contained" color="primary">
              {t('register')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Datas.defaultProps = {};

Datas.propTypes = {};

export default Datas;
