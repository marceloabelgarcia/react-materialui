import { Grid, InputAdornment, Paper, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './Form.styles';


const Form = ({ rootClasses }) => {
  const classes = { ...useStyles(), ...rootClasses };


  return (
    <Paper className={classes.tab} style={{ padding: 50 }}>
      <TextField
        fullWidth
        required
        id="name"
        label="Nombre"
        value="Documento 1"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        id="description"
        label="Descripción"
        value="Contratos 2020"
        variant="outlined"
        margin="normal"
        multiline
        rows={8}
      />
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            fullWidth
            id="owner"
            label="Propietario"
            value="Jonh Doe"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            disabled
            id="certifyBy"
            label="Certificado por"
            value="Jonh Doe"
            variant="outlined"
            margin="normal"
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        disabled
        id="size"
        label="Tamaño"
        value={231}
        variant="outlined"
        margin="normal"
        InputProps={{ endAdornment: <InputAdornment position="end">mb</InputAdornment> }}
      />
      <TextField
        fullWidth
        disabled
        id="certifyDate"
        label="Fecha de certificación"
        value="21/01/2020"
        variant="outlined"
        margin="normal"
      />
    </Paper>
  );
};

Form.propTypes = { rootClasses: PropTypes.shape({}).isRequired };

export default Form;
