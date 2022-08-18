import { ArticleListDataType } from '@/services/pages/home'
import { ArticleItemStyled } from './style'
import { RocketOutlined, CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import timeTrans from '@/utils/tools/timeTrans'

interface ArticleItemProps {
  curItem?: ArticleListDataType
}

const ArticleItem: React.FC<ArticleItemProps> = (props: ArticleItemProps) => {
  return (
    <div>
      <ArticleItemStyled>
        <div className='title'>{props.curItem?.article_title}</div>
        <div>
          <CalendarOutlined />
          {timeTrans(props.curItem?.publish_time)}
          <FolderOutlined />
          {props.curItem?.type_name}
          <FireOutlined />
          {props.curItem?.view_count}
        </div>
        <div className='image_box flex-wrap'>
          <img src='https://blog-1303885568.cos.ap-chengdu.myqcloud.com/img/DSY-1605245454618.jpg' alt='' />
        </div>
        <div className='introduce' title={props.curItem?.article_introduce}>
          {props.curItem?.article_introduce}
        </div>
      </ArticleItemStyled>
    </div>
  )
}

export default ArticleItem
