import { AppBar, Box, Button, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';
import { useHistory } from 'react-router-dom';

import AccessTab from './access';
import CatalogTab from './catalog';
import useStyles from './Details.styles';
import FormTab from './form';
import PropertiesTab from './properties';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const Details = () => {
  // Get styles from hook
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onBackClick = () => history.goBack();

  const getTabContent = (index) => {
    switch (index) {
      case 0:
        return <FormTab rootClasses={classes} />;
      case 1:
        return <CatalogTab rootClasses={classes} />;
      case 2:
        return <PropertiesTab rootClasses={classes} />;
      case 3:
        return <AccessTab rootClasses={classes} />;

      default:
        return null;
    }
  };

  return (
    <Box variant="outlined">
      <Paper style={{
        padding: 10, marginBottom: 10, display: 'flex', flexDirection: 'row',
      }}
      >
        <AssignmentIcon color="primary" className={classes.centered} />
        <Typography variant="h6" color="primary" className={classes.centered}>FICHA DEL DOCUMENTO</Typography>
        <Button variant="contained" color="primary" onClick={() => onBackClick()} className={classes.backButton}>Volver atrás</Button>
      </Paper>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="tabs"
          variant="fullWidth"
          centered
        >
          <Tab label="Datos" {...a11yProps(0)} />
          <Tab label="Catalogación" {...a11yProps(1)} />
          <Tab label="Propiedades" {...a11yProps(2)} />
          <Tab label="Accesos" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      {getTabContent(value)}
    </Box>
  );
};

Details.defaultProps = {};

Details.propTypes = {};

export default Details;
