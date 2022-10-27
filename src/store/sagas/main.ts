import { MAIN } from '../constants';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getArticleTypeList } from '@/services/components/header';
import { ArticleResType } from '@/services/components/header';

export function* mainSaga() {
  yield takeEvery(MAIN.GET_ARTICLE_TYPE, function* (): any {
    const res: ArticleResType = yield call(getArticleTypeList);
    if (res.result) {
      // 保存获取的文章类型
      yield put({
        type: MAIN.SET_ARTICLE_TYPE,
        payload: {
          list: res.data,
        },
      });
    }
  });
}
