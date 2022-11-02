import React, { memo } from 'react';
import { ArticleListDataType } from '@/services/pages/home';
import { ArticleItemStyled } from './style';
import { CalendarOutlined, FolderOutlined, FireOutlined, PushpinOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import timeTrans from '@/utils/tools/timeTrans';
import { errorImg } from '@/images/images';
import { useDispatch } from 'react-redux';
import { set_tags_hide } from '@/store/actions/main';

interface ArticleItemProps {
  curItem?: ArticleListDataType;
  setIsShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setArticleId: React.Dispatch<React.SetStateAction<null>>;
  setScrollTop: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  isShow: boolean;
}

const tagDemo = [
  { tag_id: 0, tag_name: 'React', tag_color: '#FF5777' },
  { tag_id: 1, tag_name: 'JavaScript', tag_color: '#972cef' },
  { tag_id: 2, tag_name: 'TypeScript', tag_color: '#5488EA' },
  { tag_id: 3, tag_name: 'CSS', tag_color: '#FFC101' },
];

const ArticleItem: React.FC<ArticleItemProps> = memo((props) => {
  const dispatch = useDispatch();
  const { curItem, setIsShowDetail, setArticleId, setScrollTop, index, isShow } = props;
  //文章点击跳转详情
  const itemClick = (id: any) => {
    //跳转前保存当前scrollTop
    setScrollTop(document.documentElement.scrollTop);
    //隐藏tags组件
    dispatch(set_tags_hide());
    //点击文章详情后，设置scrollTop为0，文章详情页回到顶部
    window.scrollTo(0, 0);

    if (id) {
      setIsShowDetail(true);
      setArticleId(id);
    }
  };
  return (
    <ArticleItemStyled className={`articeItem articeItemIndex-${index}`} isShow={isShow}>
      <div className='isTop'>
        <PushpinOutlined className='topIcon' />
        置顶
      </div>
      <div
        className='title'
        onClick={() => {
          itemClick(curItem?.article_id);
        }}
      >
        {curItem?.article_title}
      </div>
      <div className='article_info'>
        <div>
          <CalendarOutlined style={{ color: '#0099ff' }} />
          &nbsp;
          {timeTrans(curItem?.publish_time)}
        </div>
        <div>
          <FolderOutlined style={{ color: '#ecc859' }} />
          &nbsp;
          {curItem?.type_name}
        </div>
        <div>
          <FireOutlined style={{ color: 'red' }} />
          &nbsp;
          {curItem?.view_count}
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
          itemClick(curItem?.article_id);
        }}
      >
        <img
          src={isShow ? 'https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605245454618.jpg' : errorImg}
          alt=''
        />
      </div>
      <div className='introduce' title={curItem?.article_introduce}>
        {curItem?.article_introduce}
      </div>
    </ArticleItemStyled>
  );
});

export default ArticleItem;
