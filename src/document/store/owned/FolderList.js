import { Box, Collapse, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import PropTypes from 'prop-types';
import React from 'react';
import { FixedSizeList } from 'react-window';

const FolderList = (props) => {
  const { collection, height, itemSize } = props;
  const { onItemClick } = props;

  const [open, setOpen] = React.useState();

  const onItemClicked = (id) => {
    if (open) return setOpen(0);

    return setOpen(id);
  };

  const renderRow = ({ index, style }) => {
    const folder = collection[index];
    const { id, name, content } = folder;

    const expandIcon = open === id ? <ExpandLess /> : <ExpandMore />;

    return (
      <Box>
        <ListItem
          button
          key={index}
          id={id}
          style={{ ...style, marginTop: 5 }}
          onClick={() => onItemClicked(id)}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
          {content ? expandIcon : null}
        </ListItem>
        <Collapse in={open === id} timeout="auto" unmountOnExit />
      </Box>
    );
  };

  return (
    <FixedSizeList height={200} width="100%" itemSize={itemSize} itemCount={collection.length}>
      {renderRow}
    </FixedSizeList>
  );
};

FolderList.defaultProps = {
  height: 500,
  itemSize: 46,
  onItemClick: () => {},
};

FolderList.propTypes = {
  itemSize: PropTypes.number,
  height: PropTypes.number,
  collection: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
};

export default FolderList;
