import { all } from 'redux-saga/effects';

import { headerSaga } from './header';
import { mainSaga } from './main';

export function* defSaga() {
  yield all([headerSaga(), mainSaga()]);
}
