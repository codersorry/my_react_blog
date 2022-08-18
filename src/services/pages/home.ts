import myRequest from '@/utils/request'
import { MyResponseType } from '../type'

export interface ArticleListType extends MyResponseType {
  data: {
    articles: ArticleListDataType[]
    total: number
  }
}
export interface ArticleListDataType {
  article_id: number
  type_name: string
  article_title: string
  article_introduce: string
  publish_time: string
  view_count: number
}

// 获取文章列表
export async function getArticleList() {
  return myRequest.get<ArticleListType>({
    url: '/default/getArticleList?page=1&pageSize=6',
  })
}
