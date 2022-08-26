import React, { memo } from 'react'
import { ArticleListDataType } from '@/services/pages/home'
import { ArticleItemStyled } from './style'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import timeTrans from '@/utils/tools/timeTrans'
import { useNavigate } from 'react-router-dom'

interface ArticleItemProps {
  curItem?: ArticleListDataType
}

const ArticleItem: React.FC<ArticleItemProps> = memo((props: ArticleItemProps) => {
  const navigate = useNavigate()
  //文章点击跳转详情
  const itemClick = (id: any) => {
    id &&
      navigate(`/detail/${id}`, {
        replace: true,
      })
  }
  return (
    <div>
      <ArticleItemStyled>
        <div
          className='title'
          onClick={() => {
            itemClick(props.curItem?.article_id)
          }}
        >
          {props.curItem?.article_title}
        </div>
        <div className='margin5px'>
          <span>
            <CalendarOutlined style={{ color: '#0099ff' }} />
            &nbsp;
            {timeTrans(props.curItem?.publish_time)}
          </span>
          <span className='tag'>
            <FolderOutlined />
            &nbsp;
            {props.curItem?.type_name}
          </span>
          <span className='tag'>
            <FireOutlined style={{ color: 'red' }} />
            &nbsp;
            {props.curItem?.view_count}
          </span>
        </div>
        <div
          className='image_box flex-wrap'
          onClick={() => {
            itemClick(props.curItem?.article_id)
          }}
        >
          <img src='https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605245454618.jpg' alt='' />
        </div>
        <div className='introduce margin5px' title={props.curItem?.article_introduce}>
          {props.curItem?.article_introduce}
        </div>
      </ArticleItemStyled>
    </div>
  )
})

export default ArticleItem
