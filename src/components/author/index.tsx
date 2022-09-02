import React, { useState } from 'react'
import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined, EnvironmentOutlined, MailOutlined } from '@ant-design/icons'
import 'animate.css'
import { AuthorStyled } from './style'

const Author: React.FC = () => {
  const [avatRotate, setAvatRotate] = useState<number>(0)
  const handleMouseOver = () => {
    avatRotate === 0 ? setAvatRotate(360) : setAvatRotate(0)
  }
  return (
    <AuthorStyled className='comm-box' avatRotate={avatRotate}>
      {/* <Avatar size={100} src='https://avatars.githubusercontent.com/u/67702479?v=4'></Avatar> */}
      <div>
        <img
          className='my_avat'
          src='https://avatars.githubusercontent.com/u/67702479?v=4'
          alt='Avatar'
          onMouseOver={() => handleMouseOver()}
        />
      </div>

      <div className='author-introduction'>
        <h2>Darry</h2>
        <div>
          <EnvironmentOutlined style={{ color: '#1890FF' }} /> 江苏 - 无锡
          <br />
          <MailOutlined style={{ color: '#FFC101' }} /> 792478594@qq.com &nbsp;
        </div>
        <div>
          前端 : React + Antd
          <br />
          后台 : Vue + Element
          <br />
          后端 : Egg + Mysql
        </div>
        <h3 style={{ color: 'pink' }} className='animate__animated animate__swing animate__infinite'>
          爱Jay西元前
        </h3>
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className='account'></Avatar>
        <Avatar size={28} icon={<QqOutlined />} className='account'></Avatar>
        <Avatar size={28} icon={<WechatOutlined />} className='account'></Avatar>
      </div>
    </AuthorStyled>
  )
}

export default Author
