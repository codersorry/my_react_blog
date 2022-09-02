import React from 'react'
import { TagsStyled } from './style'
import { Tag } from 'antd'

const tagDemo = [
  { tag_id: 0, tag_name: 'React', tag_color: '#FF5777' },
  { tag_id: 1, tag_name: 'JavaScript', tag_color: '#972cef' },
  { tag_id: 2, tag_name: 'TypeScript', tag_color: '#5488EA' },
  { tag_id: 3, tag_name: 'CSS', tag_color: '#FFC101' },
  { tag_id: 4, tag_name: 'Node', tag_color: '#9900CC' },
  { tag_id: 5, tag_name: 'Vue', tag_color: '#66CC99' },
  { tag_id: 6, tag_name: 'Html', tag_color: '#003333' },
  { tag_id: 7, tag_name: 'Antd', tag_color: '#33CCFF' },
  { tag_id: 8, tag_name: 'Redux', tag_color: '#0099FF' },
  { tag_id: 9, tag_name: 'Webpack', tag_color: '#99CCFF' },
]

const Tags = () => {
  const tagCloseClick = (tag_id: number) => {
    alert('tagId:' + tag_id)
  }
  return (
    <TagsStyled className='comm-box'>
      <h3>本页所含标签</h3>
      <div className='tags'>
        {tagDemo.map((i) => {
          return (
            <Tag
              key={i.tag_id}
              color={i.tag_color}
              className='tags_item'
              closable={true}
              onClose={() => tagCloseClick(i.tag_id)}
            >
              {i.tag_name}
            </Tag>
          )
        })}
      </div>
    </TagsStyled>
  )
}

export default Tags
