import { Checkbox, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

import useStyles from './Notification.styles';

const Notifications = ({ showDelete, onAllChecked, allChecked }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <IconButton>
          <Checkbox
            indeterminate={showDelete}
            checked={allChecked}
            onChange={(e, c) => onAllChecked(c)}
          />
        </IconButton>
        <Grid item xs>
          <Typography variant="h6" className={classes.title}>
          Notificaciones
          </Typography>
        </Grid>
        <Grid item xs className={classes.delete}>
          <IconButton disabled={!showDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Divider />
    </div>
  );
};

Notifications.propTypes = {};

export default Notifications;
