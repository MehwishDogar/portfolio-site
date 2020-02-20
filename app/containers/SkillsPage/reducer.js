import produce from 'immer';
import {
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS,
  LOAD_SKILLS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  skills: [],
};

/* eslint-disable default-case, no-param-reassign */
const skillReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_SKILLS:
        draft.loading = true;
        break;

      case LOAD_SKILLS_SUCCESS:
        draft.skills = action.skills;
        draft.loading = false;
        break;

      case LOAD_SKILLS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default skillReducer;
