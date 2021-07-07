import { Avatar, Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FixedSizeList } from 'react-window';

const CertifierList = (props) => {
  const { certifiers, height, itemSize } = props;
  const { onCertifiersChange } = props;

  const onCertifierChecked = (certifier, isChecked) => {
    const newCertifier = { ...certifier, checked: isChecked };
    const newCertifiers = certifiers.map((c) => (c.id === newCertifier.id ? ({ ...c, ...newCertifier }) : c));
    return onCertifiersChange(newCertifiers);
  };

  const renderRow = ({ index, style }) => (
    <ListItem
      button
      key={index}
      id={certifiers[index].id}
      style={{ ...style, marginTop: 5 }}
      onClick={(e) => onCertifierChecked(certifiers[index], !certifiers[index].checked)}
    >
      <ListItemIcon>
        <Avatar>{certifiers[index].avatar}</Avatar>
      </ListItemIcon>
      <ListItemText primary={certifiers[index].name} secondary={`${certifiers[index].price} €`} />
      <ListItemIcon>
        <Checkbox
          disableRipple
          id={certifiers[index].id}
          name={certifiers[index].id}
          edge="end"
          color="primary"
          // checked={certifiers[index].checked}
          // onChange={(e) => onCertifierChecked(certifiers[index], e.target.checked)}
        />
      </ListItemIcon>
    </ListItem>
  );

  return (
    <FixedSizeList height={height} width="100%" itemSize={itemSize} itemCount={certifiers.length}>
      {renderRow}
    </FixedSizeList>
  );
};

CertifierList.defaultProps = {
  height: 500,
  itemSize: 55,
  onCertifiersChange: () => {},
};

CertifierList.propTypes = {
  itemSize: PropTypes.number,
  height: PropTypes.number,
  certifiers: PropTypes.array.isRequired,
  onCertifiersChange: PropTypes.func,
};

export default CertifierList;
