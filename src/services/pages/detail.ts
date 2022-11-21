import myRequest from "@/utils/request";
import { ArticleListDataType } from "./home";
import { MyResponseType } from "../type";

interface ArticleByIdType extends MyResponseType {
  data: ArticleDetailType[];
}

export interface ArticleDetailType extends ArticleListDataType {
  article_content: any;
  type_id: number;
}

// 通过id获取文章详情内容
export async function getArticleById(id: any) {
  return myRequest.get<ArticleByIdType>({
    url: `/blog/getArticleById/${id}`,
  });
}
