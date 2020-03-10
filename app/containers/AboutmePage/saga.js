import { call, put, takeLatest } from 'redux-saga/effects';
import { requestAPI } from 'utils/request';
import { LOAD_TIMELINE } from './constant';
import { timelineLoaded, timelineLoadingError } from './action';

export function* loadTimeline() {
  const requestURL = `timeline`;

  try {
    const timeline = yield call(requestAPI, requestURL);
    yield put(timelineLoaded(timeline));
  } catch (error) {
    yield put(timelineLoadingError(error));
  }
}

export default function* getTimeline() {
  yield takeLatest(LOAD_TIMELINE, loadTimeline);
}
