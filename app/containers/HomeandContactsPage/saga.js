import { call, put, takeLatest } from 'redux-saga/effects';
import { requestAPI } from 'utils/request';
import { LOAD_CONTACTS } from './constant';
import { contactsLoaded, contactsLoadingError } from './actions';

export function* getContacts() {
  const requestURL = 'contact';

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
