import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Breadcrumb, Affix } from "antd";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import marked from "marked";
import hljs from "highlight.js";
import "./index.css";

import Tocify from "./cpns/blogBar";
import Header from "@/components/pages/header";
import Author from "@/components/pages/author";
import Footer from "@/components/pages/footer";
import { getArticleById } from "@/services/pages/detail";

import { ArticleDetailType } from "@/services/pages/detail";
import timeTrans from "@/utils/tools/timeTrans";

type PropsType = {
  articleContent?: ArticleDetailType;
};

const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true, //启动类似Github样式的Markdown,填写true或者false
  pedantic: false, //只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
  sanitize: false, //原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
  tables: true, //支持Github形式的表格，必须打开gfm选项
  breaks: true, //支持Github换行符，必须打开gfm选项，填写true或者false
  smartLists: true, //优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
  smartypants: true,
  highlight: function (code: any) {
    return hljs.highlightAuto(code).value;
  },
});

const Detail: React.FC = (props: PropsType) => {
  const navigate = useNavigate();
  const [articleContent, setArticleContent] = useState<ArticleDetailType>();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    getArticleById(id).then((res) => {
      setArticleContent(res.data[0]);
    });
  }, []);

  //返回主页
  const backToHome = () => {
    navigate("/");
  };

  //blogBar 博客内容导航
  const tocify = new Tocify();
  renderer.heading = function (text: any, level: any, raw: any) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  let html = marked(articleContent ? articleContent.article_content : "");

  return (
    <div>
      <Header />
      <Row className="comm-main" justify="center">
        <Col className="comm-left" xs={23} sm={23} md={18} lg={16} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item onClick={backToHome}>
                <span style={{ cursor: "pointer" }}>首页</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章详情</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">{articleContent?.title}</div>
            <div className="list-icon">
              <span>
                <CalendarOutlined />
                {timeTrans(articleContent?.addTime)}
              </span>
              <span>
                <FolderOutlined />
                {articleContent?.typeName}
              </span>
              <span>
                <FireOutlined />
                {articleContent?.view_count}
              </span>
            </div>
            <div
              className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={50}>
            <div
              className="detailed-nav comm-box cssniceright"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="nav-title">文章目录</div>
              <div className="maintoc">{tocify && tocify.render()}</div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Detail;
