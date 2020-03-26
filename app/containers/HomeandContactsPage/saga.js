import { call, put, takeLatest } from 'redux-saga/effects';
import { requestAPI } from 'utils/request';
import { LOAD_CONTACTS } from './constant';
import { contactsLoaded, contactsLoadingError } from './actions';
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
