import { HEADER } from '../constants'

import { ArticleTypeType } from '@/services/components/header'

interface IState {
  articleType: ArticleTypeType[]
}

const initHeaderState: IState = {
  articleType: [],
}

const header = (state = initHeaderState, action: { type: HEADER; data: any }) => {
  switch (action.type) {
    case HEADER.GET_ARTICLE_TYPE:
      return Object.assign({}, state, action)
    default:
      return state
  }
}

export default header
