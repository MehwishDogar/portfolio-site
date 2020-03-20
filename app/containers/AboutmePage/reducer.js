/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  LOAD_TIMELINE,
  LOAD_TIMELINE_SUCCESS,
  LOAD_TIMELINE_ERROR,
  LOAD_PARAGRAPH,
} from './constant';

export const initialState = {
  loading: false,
  error: false,
  timeline: [],
  paragraph: '',
};

const timelineReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_TIMELINE:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_TIMELINE_SUCCESS:
        draft.timeline = action.timeline;
        draft.loading = false;
        break;

      case LOAD_TIMELINE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_PARAGRAPH:
        draft.paragraph = action.timeline.paragraph;
        break;
    }
  });

export default timelineReducer;
