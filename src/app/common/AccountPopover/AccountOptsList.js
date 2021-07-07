import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './AccountList.styles';

function AccountOptsList({ opts, className, ...rest }) {
  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
      disablePadding
    >
      {opts.map((menu, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < opts.length - 1}
          key={menu.id}
          to={menu.to}
          onClick={menu.onClick}
        >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText
            primary={menu.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={menu.subtitle}
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
}

AccountOptsList.defaultProps = { className: '' };

AccountOptsList.propTypes = {
  className: PropTypes.string,
  opts: PropTypes.array.isRequired,
};

export default AccountOptsList;
