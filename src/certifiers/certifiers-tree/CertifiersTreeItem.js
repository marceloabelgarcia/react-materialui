import { Chip, makeStyles, Typography } from '@material-ui/core';
import TreeItem from '@material-ui/lab/TreeItem';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './CertifiersTreeView.styles';

const CertifiersTreeItem = (props) => {
  const classes = useStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    tags,
    color,
    bgColor,
    onClick,
    ...other
  } = props;

  return (
    <TreeItem
      onClick={onClick}
      label={(
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          {tags.map((row, i) => <Chip className={classes.tags} key={i} label={row.name} />)}
        </div>
      )}
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
};

CertifiersTreeItem.propTypes = {
  labelIcon: PropTypes.elementType.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default CertifiersTreeItem;
