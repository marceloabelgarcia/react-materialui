import { Avatar, Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FixedSizeList } from 'react-window';

const ContactList = (props) => {
  const { contacts, selectedContact, height, itemSize } = props;
  const { onContactsChange } = props;

  const renderRow = ({ index, style }) => (
    <ListItem
      button
      key={index}
      id={contacts[index].id}
      style={{ ...style, marginTop: 5 }}
      onClick={() => onContactsChange(index)}
    >
      <ListItemIcon>
        <Avatar>{contacts[index].avatar}</Avatar>
      </ListItemIcon>
      <ListItemText primary={contacts[index].name} />
      <ListItemIcon>
        <Checkbox
          id={contacts[index].id}
          name={contacts[index].id}
          edge="end"
          checked={index === selectedContact}
          disableRipple
          color="primary"
          onChange={() => onContactsChange(index)}
        />
      </ListItemIcon>
    </ListItem>
  );

  return (
    <FixedSizeList height={height} width="100%" itemSize={itemSize} itemCount={contacts.length}>
      {renderRow}
    </FixedSizeList>
  );
};

ContactList.defaultProps = {
  height: 500,
  itemSize: 46,
};

ContactList.propTypes = {
  selectedContact: PropTypes.number.isRequired,
  itemSize: PropTypes.number,
  height: PropTypes.number,
  contacts: PropTypes.array.isRequired,
  onContactsChange: PropTypes.func.isRequired,
};

export default ContactList;
