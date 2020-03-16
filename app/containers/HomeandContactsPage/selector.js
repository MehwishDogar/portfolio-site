import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.HomeandContactsPage || initialState;

const selectContacts = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contact,
  );

const selectUrl = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.url,
  );

export { selectContacts, selectUrl };
