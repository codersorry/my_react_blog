import { HEADER } from '../constants';

import { ArticleTypeType } from '@/services/components/header';

export interface HeaderState {
  articleType: ArticleTypeType[];
  isShowHeader: boolean;
}

const initHeaderState: HeaderState = {
  articleType: [],
  isShowHeader: true,
};

const header = (state = initHeaderState, action: { type: any; data: any }) => {
  switch (action.type) {
    case HEADER.GET_ARTICLE_TYPE:
      debugger;
      return Object.assign({}, state);
    // return Object.assign({}, state, action);
    case HEADER.SET_ARTICLE_TYPE:
      return { ...state, articleType: [...action.data] };
    default:
      return state;
  }
};

export default header;
