import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CertifierForm from './certifier-form';
import TreeView from './certifiers-tree';
import useStyles from './Certifiers.styles';

const Certifiers = (props) => {
  const classes = useStyles();

  const { t } = useTranslation();

  const [certifiers, setCertifiers] = React.useState([
    {
      id: 'sony',
      name: 'SONY',
      icon: FolderIcon,
      content: {
        documents: [
          {
            id: 'tag1',
            name: 'musica single',
          },
          {
            id: 'tag2',
            name: 'musica album',
          },
        ],
        certifiers: [
          {
            id: 'sonymadrid',
            name: 'SONY MADRID',
            icon: FolderIcon,
            content: {
              documents: [
                {
                  id: 'tag1',
                  name: 'musica single',
                },
                {
                  id: 'tag2',
                  name: 'musica album',
                },
              ],
            },
          },
        ],
      },
    },

    {
      id: 'correos',
      name: 'CORREOS',
      icon: FolderIcon,
      content: {
        documents: [
          {
            id: 'carta',
            name: 'carta',
          },
          {
            id: 'fax',
            name: 'fax',
          },
        ],
        certifiers: [
          {
            id: 'correocentral',
            name: 'CORREO CENTRAL',
            icon: FolderIcon,
            content: {
              documents: [
                {
                  id: 'carta',
                  name: 'carta',
                },
              ],
            },
          },
        ],
      },
    },
  ]);

  const onFolderClick = (folder) => {
  };

  return (
    <Paper className={classes.tab}>

      <Grid container direction="row" spacing={2}>

        {/* CERTIFIERS */}
        <Grid container item direction="column" xs={12} lg={4}>

          {/* FORM TITLE */}
          <Grid container item xs direction="column" style={{ maxHeight: 85 }}>

            <Grid item xs>
              <Typography variant="h6" style={{ padding: 20 }}>
                {t('certifiers')}
              </Typography>
            </Grid>

            <Grid item xs>
              <Divider />
            </Grid>
          </Grid>

          <Grid item xs style={{ paddingLeft: 15 }}>
            <TreeView
              certifiers={certifiers}
              onItemClick={(folder) => onFolderClick(folder)}
            />
          </Grid>

        </Grid>

        <CertifierForm />
      </Grid>
    </Paper>
  );
};

Certifiers.defaultProps = {
  data: {
    tags: [],
    selectedTags: [],
  },
};

Certifiers.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.array.isRequired,
    selectedTags: PropTypes.array.isRequired,
  }),
};

export default Certifiers;
