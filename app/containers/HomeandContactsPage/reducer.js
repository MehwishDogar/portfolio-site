/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';
import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  ADD_CONTENT,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_ERROR,
} from './constant';

export const initialState = {
  loading: false,
  error: false,
  contact: [],
  content: {},
};

const contactsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CONTACTS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_CONTACTS_SUCCESS:
        draft.contact = action.contact;
        draft.loading = false;
        break;

      case LOAD_CONTACTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_CONTENT:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_CONTENT_SUCCESS:
        draft.content = action.content;
        draft.loading = false;
        break;

      case LOAD_CONTENT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default contactsReducer;
