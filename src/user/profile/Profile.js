import { Avatar, Checkbox, Divider, FormControl, FormLabel, Grid, InputLabel, ListItem, ListItemIcon, ListItemText, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import avatarImg from 'app/assets/avatar.jpg';

import { Dropzone } from '../../app/common';
import useStyles from './Profile.styles';

const Profile = (props) => {
  const classes = useStyles();

  const { t } = useTranslation();

  const [country, setCountry] = React.useState('spain');

  const countries = [
    {
      id: 'spain',
      name: t('countries:spain'),
    },
  ];

  const channels = [
    { id: 1, name: 'email', label: t('email') },
    { id: 2, name: 'telefono', label: t('phone') },
  ];

  const notifications = [
    { id: 1, name: t('profile:shared_with_me_notification') },
    { id: 2, name: t('profile:pending_confirm_documents') },
    { id: 3, name: t('profile:removed_access_shared_document') },
    { id: 4, name: t('profile:opening_shared_docs') },
    { id: 5, name: t('profile:downloading_shared_docs') },
    { id: 6, name: t('profile:streaming_shared_docs') },
  ];

  return (
    <Paper style={{ padding: 20 }}>

      <Grid container direction="row" spacing={2}>

        <Grid item xs>

          <Grid item xs style={{ paddingBottom: 10 }}>
            <Typography variant="h6" style={{ padding: 10 }}>
              {t('information')}
            </Typography>
            <Divider />
          </Grid>

          <Grid container direction="row" spacing={2}>
            <Grid item xs={2}>
              <Avatar
                className={classes.media}
                src={avatarImg}
                title="account"
                variant="rounded"
              />
            </Grid>
            <Grid item xs>
              <Dropzone
                placeholder={t('drop_file_or_click')}
                className={classes.dropzone}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.inputsContainer}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label={t('name')}
                value="Ramón"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label={t('surnames')}
                fullWidth
                required
                value="Cano"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label={t('email')}
                fullWidth
                required
                variant="outlined"
                value="ramon.cano@byevolution.com"
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label={t('birthdate')}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="country"
                select
                value={country}
                label={t('country')}
                variant="outlined"
              >
                {countries.map((row) => (
                  <MenuItem key={row.id} value={row.id}>
                    {row.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs>

          <Grid item xs style={{ paddingBottom: 10 }}>
            <Typography variant="h6" style={{ padding: 10 }}>
              {t('profile:notifications')}
            </Typography>
            <Divider />
          </Grid>

          <ListItem button style={{ marginTop: 2, padding: 0 }}>
            <ListItemText primary="" />
            {channels.map((ch) => (
              <ListItemIcon key={ch.id}>
                <FormLabel>{ch.label}</FormLabel>
              </ListItemIcon>
            ))}
          </ListItem>

          {notifications.map((row) => (
            <ListItem
              button
              key={row.id}
              id={row.id.toString()}
              style={{ marginTop: 2, paddingLeft: 10 }}
            >

              <ListItemText primary={row.name} primaryTypographyProps={{ variant: 'subtitle2' }} />

              {channels.map((ch) => (
                <ListItemIcon key={ch.id}>
                  <Checkbox
                    edge="end"
                    color="primary"
                    disableRipple
                  />
                </ListItemIcon>
              ))}
            </ListItem>
          ))}
        </Grid>
      </Grid>

    </Paper>
  );
};

Profile.defaultProps = {
  data: {
    tags: [],
    selectedTags: [],
  },
};

Profile.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    selectedTags: PropTypes.array.isRequired,
  }),
};

export default Profile;
