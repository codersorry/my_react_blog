/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Row, Col, Menu, Tooltip } from 'antd'
import type { MenuProps } from 'antd'
import './index.css'
import {
  HomeOutlined,
  SmileOutlined,
  FormOutlined,
  ShareAltOutlined,
  MessageOutlined,
  RocketOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { get_article_type } from '@/store/actions/header'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderState } from '@/store/reducers/header'
import { rootState } from '@/store'
import { ArticleTypeType } from '@/services/components/header'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const [articleTypeList, setArticleTypeList] = useState([])
  const header = useSelector<rootState, HeaderState>((state) => state.header)
  useEffect(() => {
    dispatch(get_article_type())
  }, [])

  useEffect(() => {
    mapArr(header.articleType)
  }, [header])

  const mapArr = (data: ArticleTypeType[]) => {
    const arr: any = []
    data.forEach((item: ArticleTypeType) => {
      arr.push(getItem(item.type_name, item.type_id))
    })
    setArticleTypeList(arr)
  }

  const items: MenuItem[] = [
    getItem('首页', 'home', <HomeOutlined />),
    getItem('文章', 'article', <FormOutlined />, articleTypeList),
    getItem('记录', 'record', <RocketOutlined />),
    getItem('说说', 'say', <ShareAltOutlined />),
    getItem('图片', 'picture', <SmileOutlined />),
    getItem('留言', '6', <MessageOutlined />),
    getItem('聊天室', '7', <MessageOutlined />),
    getItem('友链', '5', <SmileOutlined />),
    getItem('关于', '8', <UserOutlined />),
  ]

  const navigate = useNavigate()
  //点击菜单跳转路由
  const menuClick = (e: any) => {
    if (e.key === 'home') {
      navigate('/')
    } else if (e.keyPath[1] === 'article') {
      navigate(`/article/${e.key}`)
    } else if (e.key === 'record') {
      navigate('/record')
    } else if (e.key === 'say') {
      navigate('/say')
    } else if (e.key === 'picture') {
      navigate('/picture')
    }
  }
  return (
    <div className='header'>
      <Row justify='center'>
        <Col xs={16} sm={16} md={0} lg={0} xl={0}>
          <span
            onClick={() => {}}
            className='header-logo'
            style={{
              textAlign: 'center',
              display: 'block',
              fontSize: '1.1rem',
              color: '#fff',
              fontWeight: 700,
            }}
          >
            Darry's Blog
          </span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={10} xl={9}>
          <Tooltip placement='bottom' title={<span>背景音乐控制(PS:字体缩放跟随音乐)</span>}>
            <span className='header-logo' id='yj'>
              Darry
            </span>
          </Tooltip>
          <span className='header-txt'>每天GET一个新知识</span>
        </Col>
        <Col className='memu-div' xs={4} sm={4} md={8} lg={8} xl={9}>
          <Menu
            mode='horizontal'
            onClick={menuClick}
            items={items}
            style={{ backgroundColor: 'rgba(40,54,70,0)', color: 'pink' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Header
