import { Avatar, Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FixedSizeList } from 'react-window';

const PayCertifierList = (props) => {
  const { certifiers, height, itemSize } = props;
  const { onCertifiersChange } = props;

  const renderRow = ({ index, style }) => (
    <ListItem
      button
      key={index}
      id={certifiers[index].id}
      style={{ ...style, marginTop: 5 }}
      onClick={(e) => onCertifiersChange(index, !certifiers[index].checked)}
    >
      <ListItemIcon>
        <Avatar>{certifiers[index].avatar}</Avatar>
      </ListItemIcon>
      <ListItemText primary={certifiers[index].name} secondary={`${certifiers[index].cost}€`} />
      <ListItemIcon>
        <Checkbox
          id={certifiers[index].id}
          name={certifiers[index].id}
          edge="end"
          color="primary"
          checked={certifiers[index].checked}
          disableRipple
          onChange={(e) => onCertifiersChange(index, e.target.checked)}
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

PayCertifierList.defaultProps = {
  height: 500,
  itemSize: 55,
};

PayCertifierList.propTypes = {
  itemSize: PropTypes.number,
  height: PropTypes.number,
  certifiers: PropTypes.array.isRequired,
  onCertifiersChange: PropTypes.func.isRequired,
};

export default PayCertifierList;
