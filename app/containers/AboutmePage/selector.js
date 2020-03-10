import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.AboutmePage || initialState;

const loadtimeline = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.timeline,
  );

const loadparagraph = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.paragraph,
  );

export { loadtimeline, loadparagraph };
