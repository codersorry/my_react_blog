import { HEADER } from '../constants'

import { ArticleTypeType } from '@/services/components/header'

export interface HeaderState {
  articleType: ArticleTypeType[]
}

const initHeaderState: HeaderState = {
  articleType: [],
}

const header = (state = initHeaderState, action: { type: any; data: any }) => {
  debugger
  switch (action.type) {
    case HEADER.GET_ARTICLE_TYPE:
      return Object.assign({}, state, action)
    case HEADER.SET_ARTICLE_TYPE:
      return { ...state, articleType: [...action.data] }
    default:
      return state
  }
}

export default header
