import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: { fontSize: 13 },
      body2: { fontSize: 13 },
      h5: { fontSize: 22 },
      h6: { fontSize: 14 },
    },
    MuiInputLabel: { root: { fontSize: 13 } },
    // Style sheet name ⚛️
    MuiInputBase: { root: { fontSize: 13 }, input: { fontSize: 13 } },
    MuiInput: {
      // Name of the rule
      root: {
        // Some CSS
        fontSize: 12,
      },
    },
  },
});
