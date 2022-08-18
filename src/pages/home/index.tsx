import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackTop, Row, Col, List } from 'antd'
import { RocketOutlined, CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '@/components/pages/header'
import Author from '@/components/pages/author'
import Footer from '@/components/pages/footer'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import './index.css'
import timeTrans from '@/utils/tools/timeTrans'
import { getArticleList } from '@/services/pages/home'
import { ArticleListDataType } from '@/services/pages/home'

const renderer = new marked.Renderer()
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
    return hljs.highlightAuto(code).value
  },
})

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [list, setList] = useState<ArticleListDataType[]>([])
  useEffect(() => {
    window.scrollTo(0, 0)
    getArticleList().then((res) => {
      setList(res.data.articles)
    })
  }, [])
  //标题点击
  const titleClick = (id: number) => {
    navigate(`/detail/${id}`)
  }
  return (
    <div>
      <BackTop>
        <div className='ant-back-top-inner'>
          <RocketOutlined />
        </div>
      </BackTop>
      <Row className='comm-main' justify='center'>
        <Col className='comm-left' xs={23} sm={18} md={14} lg={14} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout='vertical'
            dataSource={list}
            renderItem={(item) => (
              <List.Item>
                <div
                  className='list-title'
                  onClick={() => {
                    titleClick(item.article_id)
                  }}
                >
                  {item.article_title}
                </div>
                <div className='list-icon'>
                  <span>
                    <CalendarOutlined />
                    {timeTrans(item.publish_time, 2)}
                  </span>
                  <span>
                    <FolderOutlined />
                    {item.type_name}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}
                  </span>
                </div>
                <div className='comm-right' dangerouslySetInnerHTML={{ __html: marked(item.article_introduce) }}></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className='commRight' xs={0} sm={0} md={4} lg={4} xl={4}>
          <Author />
          {/* <Advert />  */}
        </Col>
      </Row>
    </div>
  )
}

export default Home
