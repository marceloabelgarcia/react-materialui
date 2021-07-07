import { ClickAwayListener, Grow, Paper, Popper } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const PopperWrap = ({ open, handleClose, maxHeight, children }) => (
  <>
    <Popper
      open={Boolean(open)}
      anchorEl={open}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id="menu-list-grow"
          style={{
            transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper style={{ maxHeight, overflow: 'auto' }}>
            <ClickAwayListener onClickAway={handleClose}>
              <div>
                {children}
              </div>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  </>
);

PopperWrap.defaultProps = { open: null, maxHeight: 370 };

PopperWrap.propTypes = {
  handleClose: PropTypes.func.isRequired,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.any,
  children: PropTypes.any.isRequired,
};

export default PopperWrap;
