import myRequest from '@/utils/request'
import { MyResponseType } from '../type'

export interface ArticleTypeType extends MyResponseType {
  data: ArticleTypeType[]
}
export interface ArticleTypeType {
  type_id: number
  type_name: string
  type_describe: string
}

// 获取文章类型
export async function getArticleTypeList() {
  return myRequest.get<ArticleTypeType>({
    url: '/default/getArticleTypeList',
  })
}
