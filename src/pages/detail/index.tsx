import React, { useState, useEffect } from 'react';
import { Breadcrumb, Divider, Popover } from 'antd';
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
  TagsOutlined,
  RedEnvelopeOutlined,
  QqOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js';
import { DetailStyled } from './style';
import DetailComment from './cpns/detailComment';
import Tocify from './cpns/blogBar';
import { getArticleById } from '@/services/pages/detail';
import { ArticleDetailType } from '@/services/pages/detail';
import timeTrans from '@/utils/tools/timeTrans';
import { set_tags_show } from '@/store/actions/main';
import { useDispatch } from 'react-redux';

type PropsType = {
  articleContent?: ArticleDetailType;
  isShowDetail?: boolean;
  articleId?: any;
  setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

const tagDemo = [
  { tag_id: 0, tag_name: 'React', tag_color: '#FF5777' },
  { tag_id: 1, tag_name: 'JavaScript', tag_color: '#972cef' },
  { tag_id: 2, tag_name: 'TypeScript', tag_color: '#5488EA' },
  { tag_id: 3, tag_name: 'CSS', tag_color: '#FFC101' },
];

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

const Detail: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const { articleId } = props;
  const [articleContent, setArticleContent] = useState<ArticleDetailType>();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    // window.scrollTo(0, 0);
    articleId &&
      getArticleById(articleId).then((res) => {
        setArticleContent(res.data[0]);
      });
  }, [articleId]);

  //返回主页
  const backToArticle = () => {
    // navigate('/');
    props.setIsShowDetail(false);
    // 显示tags组件
    dispatch(set_tags_show());
  };

  //blogBar 博客内容导航
  const tocify = new Tocify();
  renderer.heading = function (text: any, level: any, raw: any) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  let html = marked(articleContent ? articleContent.article_content : '');

  return (
    <DetailStyled isShowDetail={props.isShowDetail}>
      <div className='bread-div'>
        <Breadcrumb>
          <Breadcrumb.Item onClick={backToArticle}>
            <span style={{ cursor: 'pointer' }}>返回</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>文章详情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <div className='detailed-title'>{articleContent?.article_title}</div>
        <div className='list-icon'>
          <span>
            <CalendarOutlined />
            {timeTrans(articleContent?.publish_time)}
          </span>
          <span>
            <FolderOutlined />
            {articleContent?.type_name}
          </span>
          <span>
            <FireOutlined />
            {articleContent?.view_count}
          </span>
        </div>
        <div className='detailed-content' dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      <Divider />
      <div className='article_tags'>
        <div className='article_tags_container'>
          <TagsOutlined style={{ fontSize: '23px', color: '#1890FF' }} />
          {tagDemo.map((item) => {
            return (
              <span
                onClick={() => {}}
                key={item.tag_id}
                className='tag_item'
                style={{ backgroundColor: item.tag_color }}
              >
                {item.tag_name}
              </span>
            );
          })}
        </div>
        <div className='modifyTime'>最后修改于:{timeTrans(articleContent?.publish_time)}</div>
      </div>
      <Divider orientation='center' style={{ fontSize: '30px' }}>
        <Popover
          content={
            <div>
              <img alt='' src={''} />
              <img alt='' src={''} />
            </div>
          }
          title='打赏...谢谢老板！'
        >
          <RedEnvelopeOutlined style={{ color: '#ff5777', padding: '0 10px' }} />
        </Popover>
        <Popover content={<img alt='' src={''} />} title='我的QQ'>
          <QqOutlined style={{ color: '#1B92FF', padding: '0 10px' }} />
        </Popover>
        <Popover content={<img alt='' src={''} />} title='我的微信'>
          <WechatOutlined style={{ color: '#1CD66C', padding: '0 10px' }} />
        </Popover>
      </Divider>
      <DetailComment />
      {/* <Author />
      <Affix offsetTop={50}>
        <div className='detailed-nav comm-box cssniceright' style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
          <div className='nav-title'>文章目录</div>
          <div className='maintoc'>{tocify && tocify.render()}</div>
        </div>
      </Affix> */}
    </DetailStyled>
  );
};

export default Detail;
