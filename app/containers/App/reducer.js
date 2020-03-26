/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  ADD_MESSAGE,
  ADD_CONFIG,
  LOAD_CONFIG_SUCCESS,
  LOAD_CONFIG_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  messages: [],
  message: '',
  message_index: 0,
  config: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_MESSAGES:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_MESSAGES_SUCCESS:
        draft.messages = action.messages;
        draft.loading = false;
        break;

      case LOAD_MESSAGES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_MESSAGE:
        draft.message = action.message;
        // eslint-disable-next-line no-case-declarations, prefer-const
        let messageIndex = state.messages.findIndex(
          message => message.message === action.message,
        );
        draft.message_index =
          state.messages.length === messageIndex + 1 ? 0 : messageIndex + 1;
        break;

      case ADD_CONFIG:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_CONFIG_SUCCESS:
        draft.config = action.config;
        draft.loading = false;
        break;

      case LOAD_CONFIG_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
