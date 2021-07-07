import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TreeView from '@material-ui/lab/TreeView';
import PropTypes from 'prop-types';
import React from 'react';

import CertifiersTreeItem from './CertifiersTreeItem';
import useStyles from './CertifiersTreeView.styles';

const CertifiersTreeView = (props) => {
  // Use styles hook
  const classes = useStyles();

  // Get props
  const { certifiers, onItemClick } = props;

  const renderItems = (items) => items.map((i) => {
    const { content } = i;
    const sCertifiers = content.certifiers || [];
    const sDocuments = content.documents || [];

    const totalCertifiers = sCertifiers.length;
    const totalDocs = sDocuments.length;
    const total = totalCertifiers + totalDocs;

    return (
      <CertifiersTreeItem
        key={i.id}
        nodeId={i.id}
        labelText={i.name}
        labelIcon={i.icon}
        onClick={() => onItemClick(i)}
        labelInfo={total}
        tags={sDocuments}
        color="#1a73e8"
        bgColor="#e8f0fe"
      >
        {certifiers ? renderItems(sCertifiers) : null}
      </CertifiersTreeItem>
    );
  });

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {renderItems(certifiers)}
    </TreeView>
  );
};

CertifiersTreeView.defaultProps = { certifiers: [] };

CertifiersTreeView.propTypes = { certifiers: PropTypes.array };

export default CertifiersTreeView;
