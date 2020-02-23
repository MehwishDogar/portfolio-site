import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.skillsPage || initialState;

const makeSelectSkills = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.skills,
  );

export { makeSelectSkills };
