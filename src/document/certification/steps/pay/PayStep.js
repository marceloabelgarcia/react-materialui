import { Box, Chip, Grid, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './PayStep.styles';

const PayStep = (props) => {
  // Get translations
  const { t } = useTranslation();

  // Properties
  const { data, classes: rootClasses } = props;

  const {
    name,
    description,
    certifiers,
    content,
    selectedTags,
    properties,
    encryptedStorage,
    totalPrice,
  } = data;

  // Get styles from hook
  const classes = { ...rootClasses, ...useStyles() };

  /**
   * Styled Component
   * @param  {} {children}
   */
  const PayBox = ({ children }) => (
    <Box className={classes.payBox}>
      {children}
    </Box>
  );

  return (
    <Grid container direction="row" spacing={4} className={classes.grid}>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('briefing')}</Typography>
          <Divider />
        </Grid>

        {/* Basic Info Section */}
        <PayBox>
          <Typography variant="body2" color="primary" className={classes.title}>{t('name')}</Typography>
          <Typography variant="subtitle2" className={classes.desc}>{name}</Typography>
          <Typography variant="body2" color="primary" className={classes.title}>{t('description')}</Typography>
          <Typography variant="subtitle2" className={classes.desc}>{description}</Typography>
        </PayBox>

        {/* Content Section */}
        <PayBox>
          <Typography variant="body2" color="primary" className={classes.title}>{t('content')}</Typography>
          <Typography variant="subtitle2" className={classes.desc}>{content}</Typography>
          <Typography variant="body2" color="primary" className={classes.title}>{t('encrypted_content')}</Typography>
          <Typography variant="subtitle2" className={classes.desc}>{encryptedStorage ? t('yes') : t('no')}</Typography>
        </PayBox>

        {/* Tags Section */}
        <PayBox>
          <Typography variant="body2" color="primary" className={classes.title}>{t('tags')}</Typography>
          {selectedTags.map((c) => (
            <Chip color="default" key={c} label={c} className={classes.chip} />
          ))}
          <Typography variant="body2" color="primary" className={classes.title}>{t('properties')}</Typography>
          <List className={classes.list}>
            {properties.map((p) => (
              <ListItem key={p.key} className={classes.propListItem}>
                <ListItemText primaryTypographyProps={{ variant: 'subtitle2' }} primary={`${p.key}: ${p.value}`} />
              </ListItem>
            ))}
          </List>
        </PayBox>
      </Grid>

      {/* Payment */}
      <Grid item xs={12} sm={6}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('payment')}</Typography>
          <Divider />
        </Grid>
        <PayBox>
          <Typography variant="body2" color="primary">{t('certifiers')}</Typography>
          <List style={{ height: certifiers.length > 0 ? 130 : 20, overflow: 'auto', marginBottom: 10 }}>
            {certifiers.filter((c) => c.checked).map((p) => (
              <ListItem key={p.name} className={classes.listItem}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'subtitle2' }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary={p.name}
                  secondary={`${p.price}€`}
                />
              </ListItem>
            ))}
          </List>
        </PayBox>
        <PayBox>
          <Grid container className={classes.totalContainer}>
            <Grid item xs>
              <Typography variant="h5" color="primary" className={classes.total}>{t('total')}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h5" className={classes.totalPrice}>{`${totalPrice}€`}</Typography>
            </Grid>
          </Grid>
        </PayBox>
      </Grid>
    </Grid>
  );
};

PayStep.defaultProps = { data: { description: '' } };

PayStep.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    content: PropTypes.string.isRequired,
    selectedTags: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
    encryptedStorage: PropTypes.bool.isRequired,
    certifiers: PropTypes.array.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }),
};

export default PayStep;
