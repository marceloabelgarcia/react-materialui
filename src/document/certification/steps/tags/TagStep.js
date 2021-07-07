import { Button, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
import LabelIcon from '@material-ui/icons/Label';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Table } from 'app/common';
import { fromClipboard } from 'utils/clipboard';
import { StringToColour } from 'utils/colors';

import useStyles from './TagStep.styles';

const TagStep = (props) => {
  // Properties
  const {
    data: {
      tags,
      encryptedStorage,
      publicKey,
      privateKey,
      selectedTags,
      properties,
    },
    classes: rootClasses,
  } = props;

  // Get styles from hook
  const classes = { ...rootClasses, ...useStyles() };

  // Get translations
  const { t } = useTranslation();

  // Functions
  const {
    UpdateDocumentEncryptedStorage,
    UpdateDocumentPrivateKey,
    UpdateDocumentPublicKey,
    UpdateDocumentSelectedTags,
  } = props;

  const keys = [
    {
      id: 'privateKey', label: t('private_key'), value: privateKey, onChange: (pk) => UpdateDocumentPrivateKey(pk),
    },
    {
      id: 'publicKey', label: t('public_key'), value: publicKey, onChange: (pk) => UpdateDocumentPublicKey(pk),
    },
  ];

  const renderKeyInputs = (ks) => ks.map((key) => (
    <Grid key={key.id} item xs={12} sm>
      <FormControl fullWidth variant="outlined" className={classes.formControl} required>
        <InputLabel htmlFor={key.id}>{key.label}</InputLabel>
        <OutlinedInput
          id={key.id}
          rows={4}
          rowsMax={6}
          rowsMin={2}
          multiline
          value={key.value}
          onChange={(e) => key.onChange(e.target.value)}
          labelWidth={110}
          startAdornment={(
            <InputAdornment>
              <IconButton
                aria-label="Pegar desde portapepeles"
                onClick={() => fromClipboard((pk) => key.onChange(pk))}
              >
                <CopyIcon />
              </IconButton>
            </InputAdornment>
                )}
        />
      </FormControl>
    </Grid>
  ));

  /**
   * Encrypted Storage section component
   */
  const EncryptedStorage = () => (
    <Grid item xs style={{ marginTop: 20 }}>
      <FormControlLabel
        label={t('encrypted_storage')}
        control={(
          <Checkbox
            checked={encryptedStorage}
            onChange={(e) => UpdateDocumentEncryptedStorage(e.target.checked)}
            color="primary"
          />
        )}
      />

      <FormHelperText className={classes.storageHelper}>
        {t('certification:encrypted_storage_helper')}
      </FormHelperText>

      {encryptedStorage ? (
        <Button variant="outlined" className={classes.generateButton}>
          {t('generate_keys')}
        </Button>
      ) : null}

      <Grid container spacing={2}>
        {encryptedStorage ? renderKeyInputs(keys) : null}
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="row" spacing={4} className={classes.grid}>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('data')}</Typography>
          <Divider />
        </Grid>
        <Table
          data={properties}
          className={classes.propsTable}
          actions={[
            {
              icon: 'cloud_upload',
              tooltip: t('certification:upload_from_document'),
              isFreeAction: true,
              onClick: () => console.log('file picker not implemented'),
            },
          ]}
          options={{
            pageSizeOptions: [5],
            showTitle: false,
            searchFieldAlignment: 'left',
          }}
          editable={{
            onRowUpdate: () => {},
            onRowAdd: () => {},
            onRowDelete: () => {},
          }}
          columns={[
            { title: t('certification:key'), field: 'key' },
            { title: t('certification:value'), field: 'value' },
          ]}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.stepSectionTitle}>{t('tags')}</Typography>
          <Divider />
        </Grid>
        <Autocomplete
          multiple
          id="tags"
          size="medium"
          className={classes.section}
          options={tags || []}
          getOptionLabel={(option) => option}
          value={selectedTags || []}
          onChange={(e, val) => UpdateDocumentSelectedTags(val)}
          renderTags={(value, getTagProps) => value.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))}
          renderOption={(option) => (
            <>
              <LabelIcon style={{ color: StringToColour(option) }} />
              {option}
            </>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder={t('tags')}
              InputLabelProps={{ styles: { width: 0 } }}
              fullWidth
            />
          )}
        />
        <EncryptedStorage classes={classes} />
      </Grid>
    </Grid>
  );
};

TagStep.defaultProps = { data: {} };

TagStep.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    selectedTags: PropTypes.array.isRequired,
    properties: PropTypes.array.isRequired,
    encryptedStorage: PropTypes.bool,
    publicKey: PropTypes.string,
    privateKey: PropTypes.string,
  }),
  classes: PropTypes.shape({}).isRequired,
  UpdateDocumentSelectedTags: PropTypes.func.isRequired,
  UpdateDocumentProperties: PropTypes.func.isRequired,
  UpdateDocumentEncryptedStorage: PropTypes.func.isRequired,
  UpdateDocumentPrivateKey: PropTypes.func.isRequired,
  UpdateDocumentPublicKey: PropTypes.func.isRequired,
};

export default TagStep;
