import React, { memo, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackTop, Row, Col, Breadcrumb, Pagination, Menu } from 'antd'
import type { PaginationProps, MenuProps } from 'antd'
import { RocketOutlined } from '@ant-design/icons'
import Author from '@/components/author'
import Tags from '@/components/Tags'
import 'highlight.js/styles/monokai-sublime.css'
import { ArticleStyled } from './style'
import { getArticleListByTypeId } from '@/services/pages/article'
import { ArticleListDataType } from '@/services/pages/home'
import ArticleItem from './cpns/articleItem'
import { useSelector } from 'react-redux'
import { rootState } from '@/store'
import { HeaderState } from '@/store/reducers/header'

interface CurDropMenuItemType {
  key: any
  label: any
}

const Article: React.FC = memo(() => {
  const navigate = useNavigate()
  const header = useSelector<rootState, HeaderState>((state) => state.header)
  const { id } = useParams()
  const [articleTypeList, setArticleTypeList] = useState<CurDropMenuItemType[]>([])
  const [curArticleType, setCurArticleType] = useState<string>() // 面包屑当前的文章类型
  const [list, setList] = useState<ArticleListDataType[]>([])
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [total, setTotal] = useState<number>(0)

  //监听url上id参数的变化，重新请求数据
  useEffect(() => {
    window.scrollTo(0, 0)
    setPage(1)
    setPageSize(10)
    getArticleListByTypeId(id, { page: 1, pageSize: 10 }).then((res) => {
      setList(res.data.articles)
      setTotal(res.data.total)
    })
  }, [id])

  //面包屑下拉文章类型列表
  useEffect(() => {
    let curArr: CurDropMenuItemType[] = []
    header.articleType.forEach((i) => {
      curArr.push({ key: i.type_id, label: i.type_name })
    })
    setArticleTypeList(curArr)
  }, [header])

  useEffect(() => {
    // 更新面包屑当前页的文章类型
    id && articleTypeList.length > 0 && setCurArticleType(idMapArticleType(id, articleTypeList))
  }, [id, articleTypeList])

  // 下拉文章类型点击跳转
  const dropMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(`/article/${key}`)
  }
  const menu = <Menu items={articleTypeList} onClick={dropMenuClick} />

  // 根据id匹配当前页文章类型名称
  const idMapArticleType = (id: any, list: CurDropMenuItemType[]) => {
    let typeName = ''
    list.some((i) => {
      if (id * 1 === i.key * 1) {
        typeName = i.label
        return true
      } else {
        return false
      }
    })
    return typeName
  }

  //条数变化函数
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (page, pageSize) => {
    setPage(page)
    setPageSize(pageSize)
    getArticleListByTypeId(id, { page: 1, pageSize }).then((res) => {
      setList(res.data.articles)
      setTotal(res.data.total)
      window.scrollTo(0, 0)
    })
  }

  //修改分页栏展现方式
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    return originalElement
  }

  //page 和 pageSize 变化函数
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
    <ArticleStyled>
      <BackTop>
        <div className='ant-back-top-inner'>
          <RocketOutlined />
        </div>
      </BackTop>
      <Row className='comm-main' justify='center'>
        <Col className='comm-left' xs={23} sm={22} md={20} lg={14} xl={14}>
          <div className='breadcrumb'>
            <Breadcrumb>
              <Breadcrumb.Item>文章</Breadcrumb.Item>
              <Breadcrumb.Item overlay={menu} className='breadcrumbItem'>
                {curArticleType}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          {list.map((item) => {
            return <ArticleItem key={item.article_id} curItem={item} />
          })}
          <Pagination
            className='paginationStyle'
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
        <Col className='commRight' xs={0} sm={0} md={0} lg={5} xl={4}>
          <Author />
          <Tags />
        </Col>
      </Row>
    </ArticleStyled>
  )
})

export default Article
