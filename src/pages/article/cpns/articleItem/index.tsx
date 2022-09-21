import React, { memo } from 'react';
import { ArticleListDataType } from '@/services/pages/home';
import { ArticleItemStyled } from './style';
import { CalendarOutlined, FolderOutlined, FireOutlined, PushpinOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import timeTrans from '@/utils/tools/timeTrans';

interface ArticleItemProps {
  curItem?: ArticleListDataType;
  setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setArticleId: React.Dispatch<React.SetStateAction<null>>;
  setScrollTop: React.Dispatch<React.SetStateAction<number>>;
}

const tagDemo = [
  { tag_id: 0, tag_name: 'React', tag_color: '#FF5777' },
  { tag_id: 1, tag_name: 'JavaScript', tag_color: '#972cef' },
  { tag_id: 2, tag_name: 'TypeScript', tag_color: '#5488EA' },
  { tag_id: 3, tag_name: 'CSS', tag_color: '#FFC101' },
];

const ArticleItem: React.FC<ArticleItemProps> = memo((props) => {
  //文章点击跳转详情
  const itemClick = (id: any) => {
    debugger;
    props.setScrollTop(document.documentElement.scrollTop);
    if (id) {
      props.setIsShowDetail(true);
      props.setArticleId(id);
    }
  };
  return (
    <ArticleItemStyled>
      <div className='isTop'>
        <PushpinOutlined className='topIcon' />
        置顶
      </div>
      <div
        className='title'
        onClick={() => {
          itemClick(props.curItem?.article_id);
        }}
      >
        {props.curItem?.article_title}
      </div>
      <div className='article_info'>
        <div>
          <CalendarOutlined style={{ color: '#0099ff' }} />
          &nbsp;
          {timeTrans(props.curItem?.publish_time)}
        </div>
        <div>
          <FolderOutlined />
          &nbsp;
          {props.curItem?.type_name}
        </div>
        <div>
          <FireOutlined style={{ color: 'red' }} />
          &nbsp;
          {props.curItem?.view_count}
        </div>
        <div>
          {tagDemo.map((i) => {
            return (
              // 自己写的 Tag
              // <span className='tag_item' style={{ backgroundColor: i.tag_color }} key={i.tag_id}>
              //   {i.tag_name}
              // </span>
              <Tag key={i.tag_id} className='tag_item' color={i.tag_color}>
                {i.tag_name}
              </Tag>
            );
          })}
        </div>
      </div>
      <div
        className='image_box flex-wrap'
        onClick={() => {
          itemClick(props.curItem?.article_id);
        }}
      >
        <img src='https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605245454618.jpg' alt='' />
      </div>
      <div className='introduce' title={props.curItem?.article_introduce}>
        {props.curItem?.article_introduce}
      </div>
    </ArticleItemStyled>
  );
});

export default ArticleItem;
