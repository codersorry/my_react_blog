import myRequest from "@/utils/request";
import { MyResponseType } from "../type";

interface ArticleListType extends MyResponseType {
  data: ArticleListDataType[];
}
export interface ArticleListDataType {
  id: number;
  typeName: string;
  title: string;
  introduce: string;
  addTime: string;
  view_count: number;
}

// 获取文章列表
export async function getArticleList() {
  return myRequest.get<ArticleListType>({
    url: "/default/getArticleList",
  });
}
