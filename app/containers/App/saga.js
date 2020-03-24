import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { LOAD_MESSAGES, UPDATE_MESSAGE } from 'containers/App/constants';
import { selectMessages, selectMessageIndex } from 'containers/App/selectors';
import {
  messagesLoaded,
  messageLoadingError,
  addMessage,
  updateMessage,
} from 'containers/App/actions';

import { requestAPI } from 'utils/request';
import getUsername from '../../utils/globalHelper';

// eslint-disable-next-line no-redeclare
export function* addMessages() {
  const messages = yield select(selectMessages());
  const messageIndex = yield select(selectMessageIndex());
  yield put(addMessage(messages[messageIndex].message));
  yield delay(6000);
  yield put(updateMessage());
}

export function* getMessages() {
  const username = getUsername();
  const requestURL = `messages/?username=${username}`;

  try {
    const messages = yield call(requestAPI, requestURL);
    yield put(messagesLoaded(messages));
    yield put(updateMessage());
  } catch (err) {
    yield put(messageLoadingError(err));
  }
}

export default function* messageData() {
  yield takeLatest(LOAD_MESSAGES, getMessages);
  yield takeLatest(UPDATE_MESSAGE, addMessages);
}
