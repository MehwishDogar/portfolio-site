import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.HomeandContactsPage || initialState;

const selectContacts = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.contact,
  );

const selectContent = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.content,
  );

export { selectContacts, selectContent };
