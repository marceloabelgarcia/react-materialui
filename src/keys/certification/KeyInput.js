import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';

const KeyInput = ({
  id,
  label,
  className,
  margin,
  required,
  width,
  onPaste,
  ...props
}) => (
  <FormControl
    fullWidth
    margin={margin}
    variant="outlined"
    className={className}
    required={required}
  >
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <OutlinedInput
      rows={4}
      rowsMax={6}
      rowsMin={2}
      multiline
      endAdornment={(
        <InputAdornment position="end">
          <IconButton
            aria-label="Pegar desde portapepeles"
            onClick={() => onPaste(id)}
          >
            <CopyIcon />
          </IconButton>
        </InputAdornment>
      )}
      {...props}
    />
  </FormControl>
);

KeyInput.propTypes = {};

export default KeyInput;
