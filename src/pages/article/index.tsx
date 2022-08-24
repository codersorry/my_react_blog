import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackTop, Row, Col, Breadcrumb, Pagination, Menu } from 'antd'
import type { PaginationProps } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import Author from '@/components/author'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import './index.css'
import { getArticleListByTypeId } from '@/services/pages/article'
import { ArticleListDataType } from '@/services/pages/home'
import ArticleItem from './cpns/articleItem'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>
            General
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>
            Layout
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
            Navigation
          </a>
        ),
      },
    ]}
  />
)

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

const Article: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [list, setList] = useState<ArticleListDataType[]>([])
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    window.scrollTo(0, 0)
    setPage(1)
    setPageSize(10)
    getArticleListByTypeId(id, { page: 1, pageSize: 10 }).then((res) => {
      setList(res.data.articles)
      setTotal(res.data.total)
    })
  }, [id])

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (page, pageSize) => {
    setPage(page)
    setPageSize(pageSize)
    getArticleListByTypeId(id, { page: 1, pageSize }).then((res) => {
      setList(res.data.articles)
      setTotal(res.data.total)
      window.scrollTo(0, 0)
    })
  }

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    return originalElement
  }

  const onChange: PaginationProps['onChange'] = (page, pageSize) => {
    setPage(page)
    setPageSize(pageSize)
    getArticleListByTypeId(id, { page: page, pageSize }).then((res) => {
      setList(res.data.articles)
      setTotal(res.data.total)
      window.scrollTo(0, 0)
    })
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
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>文章</Breadcrumb.Item>
              <Breadcrumb.Item overlay={menu}>
                <a href=''>General</a>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {list.map((item) => {
            return <ArticleItem key={item.article_id} curItem={item} />
          })}
          <Pagination
            total={total}
            current={page}
            pageSize={pageSize}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            itemRender={itemRender}
            onChange={onChange}
            defaultCurrent={1}
            pageSizeOptions={[10, 15, 20]}
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

export default Article
