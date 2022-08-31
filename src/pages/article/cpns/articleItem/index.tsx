import React, { memo } from 'react'
import { ArticleListDataType } from '@/services/pages/home'
import { ArticleItemStyled } from './style'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import timeTrans from '@/utils/tools/timeTrans'
import { useNavigate } from 'react-router-dom'

interface ArticleItemProps {
  curItem?: ArticleListDataType
}

const tagDemo = [
  { tag_id: 0, tag_name: 'React', tag_color: '#FF5777' },
  { tag_id: 1, tag_name: 'JavaScript', tag_color: '#972cef' },
  { tag_id: 2, tag_name: 'TypeScript', tag_color: '#5488EA' },
  { tag_id: 3, tag_name: 'CSS', tag_color: '#FFC101' },
]

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
    <ArticleItemStyled>
      <div
        className='title'
        onClick={() => {
          itemClick(props.curItem?.article_id)
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
              <span className='tag_item' style={{ backgroundColor: i.tag_color }} key={i.tag_id}>
                {i.tag_name}
              </span>
            )
          })}
        </div>
      </div>
      <div
        className='image_box flex-wrap'
        onClick={() => {
          itemClick(props.curItem?.article_id)
        }}
      >
        <img src='https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605245454618.jpg' alt='' />
      </div>
      <div className='introduce' title={props.curItem?.article_introduce}>
        {props.curItem?.article_introduce}
      </div>
    </ArticleItemStyled>
  )
})

export default ArticleItem
