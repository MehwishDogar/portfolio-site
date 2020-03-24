import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_SKILLS } from 'containers/SkillsPage/constants';
import { skillsLoaded, skillLoadingError } from 'containers/SkillsPage/actions';

import { requestAPI } from 'utils/request';
import getUsername from '../../utils/globalHelper';
// return api url: baseurl/skills/?username=mehwishumar
export function* getSkills() {
  const username = getUsername();
  const requestURL = `skills/?username=${username}`;

  try {
    // Call our request helper (see 'utils/request')
    const skills = yield call(requestAPI, requestURL);
    yield put(skillsLoaded(skills));
  } catch (err) {
    yield put(skillLoadingError(err));
  }
}

export default function* skillData() {
  // Watches for LOAD_SKILLS actions and calls getSkills when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SKILLS, getSkills);
}
