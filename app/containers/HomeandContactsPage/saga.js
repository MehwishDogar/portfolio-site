import { call, put, takeLatest } from 'redux-saga/effects';
import { requestAPI } from 'utils/request';
import { LOAD_CONTACTS, ADD_CONTENT } from './constant';
import {
  contactsLoaded,
  contactsLoadingError,
  contentLoaded,
  contentLoadingError,
} from './actions';
import getUsername from '../../utils/globalHelper';

export function* getContacts() {
  const username = getUsername();
  const requestURL = `contacts/?username=${username}`;

  try {
    const contact = yield call(requestAPI, requestURL);
    yield put(contactsLoaded(contact));
  } catch (err) {
    yield put(contactsLoadingError(err));
  }
}

export default function* contactsData() {
  yield takeLatest(LOAD_CONTACTS, getContacts);
}

export function* getContent() {
  const username = getUsername();
  const requestURL = `config/?username=${username}`;

  try {
    const content = yield call(requestAPI, requestURL);
    yield put(contentLoaded(content));
  } catch (err) {
    yield put(contentLoadingError(err));
  }
}

export function* contentData() {
  yield takeLatest(ADD_CONTENT, getContent);
}
