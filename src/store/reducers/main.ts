import { MAIN } from '../constants';

import { ArticleTypeType } from '@/services/components/header';

export interface MainState {
  //文章类型列表
  articleType: ArticleTypeType[];
  //滚动的距离
  scrollTop: number;
}

const initMainState: MainState = {
  articleType: [],
  scrollTop: 0,
};

interface CurPayLoadType {
  list: [];
  scrollTop: number;
}

const main = (state = initMainState, action: { type: MAIN; payload: CurPayLoadType }) => {
  switch (action.type) {
    case MAIN.GET_ARTICLE_TYPE:
      return Object.assign({}, state);
    // return Object.assign({}, state, action);
    case MAIN.SET_ARTICLE_TYPE:
      return { ...state, articleType: [...action.payload.list] };
    case MAIN.SET_SCROLL_TOP:
      return { ...state, scrollTop: action.payload.scrollTop };
    default:
      return state;
  }
};

export default main;
