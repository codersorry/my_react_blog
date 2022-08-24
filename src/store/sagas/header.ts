import { HEADER } from '../constants'
import { takeEvery, call, put } from 'redux-saga/effects'
import { getArticleTypeList } from '@/services/components/header'
import { ArticleResType } from '@/services/components/header'

export function* headerSaga() {
  yield takeEvery(HEADER.GET_ARTICLE_TYPE, function* (): any {
    const res: ArticleResType = yield call(getArticleTypeList)
    if (res.result) {
      yield put({
        type: HEADER.SET_ARTICLE_TYPE,
        data: res.data,
      })
    }
  })
}
