import myRequest from "@/utils/request";
import { ArticleListType } from "./home";

// 根据类别id获取文章列表
export async function getArticleListByTypeId(id: any) {
  return myRequest.get<ArticleListType>({
    url: `/default/getArticleListByTypeId/${id}`,
  });
}
