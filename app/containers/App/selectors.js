/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
/*
const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
*/

const selectGlobal = state => state.global || initialState;

const selectMessages = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.messages,
  );

const selectMessageIndex = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.message_index,
  );

const selectMessage = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.message,
  );

export { selectMessages, selectMessageIndex, selectMessage };
