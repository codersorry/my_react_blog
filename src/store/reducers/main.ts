import { MAIN } from '../constants';

import { ArticleTypeType } from '@/services/components/header';

export interface RightBarShowType {
  showAuthor: boolean;
  showTags: boolean;
}

export interface MainState {
  //文章类型列表
  articleType: ArticleTypeType[];
  //滚动的距离
  scrollTop: number;
  //右侧显示组件控制
  showRightBar: RightBarShowType;
  //显示隐藏登录面板
  showLoginPanel: boolean;
}

const initMainState: MainState = {
  articleType: [],
  scrollTop: 0,
  showRightBar: {
    showAuthor: false,
    showTags: false,
  },
  showLoginPanel: false,
};

interface CurPayLoadType {
  list: [];
  scrollTop: number;
  showRightBar: RightBarShowType;
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
    case MAIN.SET_RIGHT_BAR:
      return { ...state, showRightBar: { ...action.payload.showRightBar } };
    case MAIN.SET_TGAS_SHOW:
      return { ...state, showRightBar: { ...state.showRightBar, showTags: true } };
    case MAIN.SET_TGAS_HIDE:
      return { ...state, showRightBar: { ...state.showRightBar, showTags: false } };
    case MAIN.SET_LOGIN_PANEL_SHOW:
      return { ...state, showLoginPanel: true };
    case MAIN.SET_LOGIN_PANEL_HIDE:
      return { ...state, showLoginPanel: false };
    default:
      return state;
  }
};

export default main;
