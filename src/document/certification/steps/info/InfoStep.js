import { Checkbox, Divider, FormControlLabel, Grid, InputAdornment, MenuItem, TextField, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Dropzone from '../../../../app/common/Dropzone';
import CertifierList from './InfoCertifierList';
import useStyles from './InfoStep.styles';

const InfoStep = (props) => {
  // Properties
  const {
    data: {
      name,
      description,
      category,
      subCategory,
      format,
      certifiers,
      totalPrice,
    },
    classes: rootClasses,
  } = props;

  // Get styles from hook
  const classes = { ...rootClasses, ...useStyles() };

  // Get translations
  const { t } = useTranslation();

  // Functions
  const {
    UpdateDocumentName,
    UpdateDocumentDescription,
    UpdateDocumentCategory,
    UpdateDocumentSubcategory,
    UpdateDocumentFormat,
    UpdateDocumentCertifiers,
    UpdateDocumentTotalPrice,
    GetCertifiersByType,
  } = props;

  React.useEffect(() => {
    GetCertifiersByType('audio/*');
  }, [GetCertifiersByType]);

  /**
   *  Handles certifiers select changes
   * @param {[{ name, price, }]} c
   */
  const onCertifierSelected = (crts) => {
    UpdateDocumentTotalPrice(crts);
    UpdateDocumentCertifiers(crts);
  };

  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={12} lg={5}>
        <TextField
          fullWidth
          select
          id="folder"
          value="1"
          variant="outlined"
          className={classes.formControl}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FolderIcon />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="1">{t('choose_folder')}</MenuItem>
          <MenuItem value="videos">Mis Videos</MenuItem>
          <MenuItem value="music">Mi Música</MenuItem>
          <MenuItem value="certifiers">Certificados</MenuItem>
        </TextField>

        <Dropzone
          className={classes.dropzone}
        />

        <TextField
          fullWidth
          variant="outlined"
          className={classes.formControl}
          required
          id="name"
          value={name}
          onChange={(e) => UpdateDocumentName(e.target.value)}
          label={t('name')}
        />

        <TextField
          fullWidth
          multiline
          rows={4}
          rowsMax={6}
          variant="outlined"
          className={classes.formControl}
          required
          id="description"
          value={description}
          onChange={(e) => UpdateDocumentDescription(e.target.value)}
          label={t('description')}
        />
      </Grid>

      <Grid container item xs spacing={2} alignContent="flex-start">
        <Grid item xs style={{ maxHeight: 75 }}>
          <TextField
            select
            fullWidth
            variant="outlined"
            label={t('category')}
            id="category"
            value={category || ''}
            onChange={(e) => UpdateDocumentCategory(e.target.value)}
          >
            <MenuItem value="audio/*">Audio</MenuItem>
            <MenuItem value="video/*">Video</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs>
          <TextField
            select
            fullWidth
            variant="outlined"
            label={t('subcategory')}
            id="subcategory"
            value={subCategory || ''}
            onChange={(e) => UpdateDocumentSubcategory(e.target.value)}
          >
            <MenuItem value="audio/*">Canción</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.stepSectionTitle}>{t('format')}</Typography>
            <Divider />
          </Grid>

          <Grid container item xs>

            <Grid item xs>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={format === 'image'}
                    color="primary"
                    value="image"
                    onChange={(e) => UpdateDocumentFormat(e.target.value)}
                  />
                )}
                label={t('image')}
              />
            </Grid>

            <Grid item xs>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={format === 'doc'}
                    color="primary"
                    value="doc"
                    onChange={(e) => UpdateDocumentFormat(e.target.value)}
                  />
                )}
                label={t('document')}
              />
            </Grid>

            <Grid item xs>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={format === 'audio'}
                    color="primary"
                    value="audio"
                    onChange={(e) => UpdateDocumentFormat(e.target.value)}
                  />
                )}
                label={t('audio')}
              />
            </Grid>

            <Grid item xs>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={format === 'video'}
                    color="primary"
                    value="video"
                    onChange={(e) => UpdateDocumentFormat(e.target.value)}
                  />
                )}
                label={t('video')}
              />
            </Grid>

          </Grid>

        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.stepSectionTitle}>{t('certifiers')}</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <CertifierList
              certifiers={certifiers}
              onCertifiersChange={onCertifierSelected}
              height={200}
            />
          </Grid>
          <Grid container item xs={12} style={{ paddingTop: 15 }}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h6" className={classes.stepSectionTitle}>{t('total')}</Typography>
              <Divider />
              <TextField
                id="totalCost"
                disabled
                fullWidth
                value={totalPrice}
                variant="outlined"
                margin="normal"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

InfoStep.defaultProps = { data: { description: '' } };

InfoStep.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    certifiers: PropTypes.array.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }),
  classes: PropTypes.shape({}).isRequired,
  UpdateDocumentName: PropTypes.func.isRequired,
  UpdateDocumentDescription: PropTypes.func.isRequired,
  UpdateDocumentCategory: PropTypes.func.isRequired,
  UpdateDocumentSubcategory: PropTypes.func.isRequired,
  UpdateDocumentFormat: PropTypes.func.isRequired,
  UpdateDocumentCertifiers: PropTypes.func.isRequired,
  UpdateDocumentTotalPrice: PropTypes.func.isRequired,
  GetCertifiersByType: PropTypes.func.isRequired,
};

export default InfoStep;
