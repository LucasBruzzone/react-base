import {
  take,
  put,
} from 'redux-saga/effects';

import * as constants from '../actions/constants';
import * as appActions from '../actions/appActions';

function* exampleSaga() {
  while (true) {
    yield take(constants.EXAMPLE_ACTION);

    try {
      yield put(appActions.setExampleData('Changed!'));
    } catch (error) {
      // ignore
    }
  }
}

export default [
  exampleSaga,
];
