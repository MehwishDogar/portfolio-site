/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';
import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  LOAD_URL,
} from './constant';

export const initialState = {
  loading: false,
  error: false,
  contact: [],
  url: '',
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

      case LOAD_URL:
        draft.url = action.contact.url;
        break;
    }
  });

export default contactsReducer;
