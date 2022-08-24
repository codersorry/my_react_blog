import { all } from 'redux-saga/effects'

import { headerSaga } from './header'

export function* defSaga() {
  yield all([headerSaga()])
}
