/**
 * Combine reducers and export
 */

import { combineReducers } from 'redux';
import { CertificationReducer } from '../document';

export default combineReducers({
  // auth: combineReducers({
  //   login: null,
  //   register: null,
  // }),
  document: combineReducers({
    certification: CertificationReducer,
    // details: null,
    // share: null,
    // store: null,
  }),
  // email: combineReducers({
  //   send: null,
  // }),
  // user: combineReducers({
  //   contacts: null,
  //   register: null,
  // }),
});
