import { Button, Divider, FormControl, Grid, MenuItem, Select, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Table } from '../../app/common';
import useStyles from './CertifierForm.styles';

const CertifierForm = (props) => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const categories = {
    arts: { name: 'Artes' },
    right: { name: 'Derecho' },
    legal: { name: 'Legal' },
  };

  const subcategories = {
    story: { name: 'Cuento', parentId: 'arts' },
    novel: { name: 'Novela', parentId: 'arts' },
    theater: { name: 'Obra', parentId: 'arts' },
  };

  const formats = {
    audio: { name: 'Audio' },
    doc: { name: 'Documento' },
  };

  const [state, setState] = React.useState({
    rows: [
      {
        id: 'r1', category: 'arts', subcategory: 'story', format: 'audio', cost: 20, pvp: 0.5,
      },
      {
        id: 'r2', category: 'arts', subcategory: 'story', format: 'doc', cost: 40, pvp: 0.5,
      },
    ],
  });

  const CustomSelect = ({ id, value, onChange, items }) => (
    <FormControl fullWidth>
      <Select
        id={id}
        fullWidth
        value={value}
        onChange={onChange}
      >
        {Object.keys(items).map((k) => <MenuItem key={k} value={k}>{items[k].name}</MenuItem>)}
      </Select>
    </FormControl>
  );

  const onRowAdd = (newData) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  );

  const onRowUpdate = (newData) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  );

  const onRowDelete = (newData) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
  );

  return (
    <Grid container item direction="column" xs={12} lg>

      {/* FORM TITLE */}
      <Grid container item xs direction="column">
        <Grid container item xs>
          <Grid item xs>
            <Typography variant="h6" style={{ padding: 20 }}>
              {t('certifiers:modify')}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Divider />
        </Grid>
      </Grid>

      {/* FORM CONTENT */}
      <Grid
        container
        direction="column"
        style={{ padding: 15 }}
        spacing={2}
      >

        <Grid item xs>
          <Table
            data={state.rows}
            options={{
              showTitle: false,
              search: false,
            }}
            editable={{
              onRowUpdate,
              onRowAdd,
              onRowDelete,
            }}
            columns={[
              {
                title: t('category'),
                field: 'category',
                render: ({ category }) => categories[category].name,
                editComponent: ({ field, value, onChange }) => (
                  <CustomSelect
                    id={field}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    items={categories}
                  />
                ),
              },
              {
                title: t('subcategory'),
                field: 'subcategory',
                render: ({ subcategory }) => subcategories[subcategory].name,
                editComponent: ({ field, value, onChange }) => (
                  <CustomSelect
                    id={field}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    items={subcategories}
                  />
                ),
              },
              {
                title: t('format'),
                field: 'format',
                render: ({ format }) => formats[format].name,
                editComponent: ({ field, value, onChange }) => (
                  <CustomSelect
                    id={field}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    items={subcategories}
                  />
                ),
              },
              { title: t('cost'), field: 'cost' },
              { title: t('pvp'), field: 'pvp' },
            ]}
          />
        </Grid>

        <Grid container item xs alignContent="center" alignItems="center" justify="center">
          <Grid item xs style={{ marginRight: 20 }}>
            <Button fullWidth variant="contained" color="primary">
              {t('save')}
            </Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth variant="contained">
              {t('cancel')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CertifierForm.defaultProps = { };

CertifierForm.propTypes = {};

export default CertifierForm;
