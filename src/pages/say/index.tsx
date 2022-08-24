import React, { useState, useEffect } from 'react'
import { Row, Col, List, Affix, BackTop, message, Spin, Tag, Input, Typography } from 'antd'
import {
  CalendarOutlined,
  TwitterOutlined,
  FireOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  ArrowsAltOutlined,
} from '@ant-design/icons'
import Author from '@/components/author'
import './index.css'
const { Paragraph } = Typography

const renderItem = [
  {
    _id: '6204c913df2b9c12388e4be3',
    articleTitle: '每日题记',
    introducemd: '成功的人是跟别人领悟经验',
    showDate: '2022-02-10',
    selectedType: '生活分享',
    sourceType: '学习笔记',
    fire: 26,
  },
  {
    _id: '61551d8e3dfd8494488174ce',
    articleTitle: 'GitHub超星星✨错题集',
    introducemd: '漫长的惰性，再无少时激情',
    showDate: '2021-09-30',
    selectedType: '生活分享',
    sourceType: '博主原创',
    fire: 32,
  },
  {
    _id: '606c08c7a5238443980e220d',
    articleTitle: 'js常用方法收集',
    introducemd: '不积跬步无以至千里',
    showDate: '2021-04-06',
    selectedType: '生活分享',
    sourceType: '美文转载',
    fire: 99,
  },
  {
    _id: '5ffd0fbba532d139e89ae134',
    articleTitle: 'kiwisec',
    introducemd: 'KiwiSaaS-Client篇',
    showDate: '2021-01-12',
    selectedType: '生活分享',
    sourceType: '当前计划',
    fire: 171,
    isenter: true,
  },
  {
    _id: '5fd1d8cca532d139e89ae130',
    articleTitle: '时隔四月的反思',
    introducemd: '以此督促自己，不可沉沦，一定要好好学习！',
    showDate: '2020-12-10',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 0,
  },
  {
    _id: '5f9a88cb91d8af31f05dddfd',
    articleTitle: '感恩机会，好好把握！',
    introducemd: '10-29 成都，加油！！！',
    showDate: '2020-10-29',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 0,
  },
  {
    _id: '5f9566e291d8af31f05dddfc',
    articleTitle: '抵达成都，寻觅工作中',
    introducemd: '10-25 天府新区，期盼未来！',
    showDate: '2020-10-25',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 1,
  },
  {
    _id: '5f029d714c20e05b1c5d072b',
    articleTitle: '博客缓更~毕业季准备',
    introducemd: '毕业季，准备。。。因此本博客内容更新放缓，望博友们体谅。',
    showDate: '2020-07-20',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 5,
  },
  {
    _id: '5efbf9b1bb2bc7516cd6237d',
    articleTitle: '驾照成功获取，开始重构RN项目',
    introducemd: '下阶段目标：2周内重构React Native视频分享应用并开放体验',
    showDate: '2020-07-01',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 0,
  },
  {
    _id: '5ee858ccedcc9a59acedae94',
    articleTitle: '牛客网专项练习积累',
    introducemd: '很多不会，菜是原罪。博主专项学习累计',
    showDate: '2020-06-20',
    selectedType: '生活分享',
    sourceType: '博主原创',
    fire: 68,
  },
  {
    _id: '5eba14cec7f2bb535075ae7b',
    articleTitle: '博客升级HTTPS协议',
    introducemd: '博客同时启用HTTPS、HTTP(更新优先)双协议访问，由近期驾照学习，本博客暂停更新，如有不便敬请见谅',
    showDate: '2020-05-12',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 1,
  },
  {
    _id: '5ea1303bf783d0418c591dad',
    articleTitle: '重构博客样式',
    introducemd: 'redux重构博客样式，点击或触碰头像实现风格转换，集成互动页邮件通知，重构生活页，持续制作中。。。',
    showDate: '2020-04-23',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 3,
  },
  {
    _id: '5e9ba2b06bde94377448128f',
    articleTitle: '博客集成Redux状态管理',
    introducemd: '博客集成Redux状态管理，制作记录页hot滚动评论。',
    showDate: '2020-04-19',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 1,
  },
  {
    _id: '5e9a9bea6bde94377448128a',
    articleTitle: '博客评论集成动态头像',
    introducemd: '博客评论集成动态头像',
    showDate: '2020-04-18',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 0,
  },
  {
    _id: '5e99a9621b6477371479633c',
    articleTitle: '博客新添互动页面',
    introducemd: '博客前后台新添互动页面，前台含播放器与留言功能，后台增添互动页评论管理。',
    showDate: '2020-04-17',
    selectedType: '生活分享',
    sourceType: '秃头日记',
    fire: 1,
  },
  {
    _id: '5e5d014dc9e9331de0357bef',
    articleTitle: '博主服务器BUG调试',
    introducemd: '持续调试中~~',
    showDate: '2020-03-03',
    selectedType: '生活分享',
    fire: 158,
    sourceType: '未知来源',
  },
  {
    _id: '5e59fcdac9e9331de0357be1',
    articleTitle: '博主的资源网站收藏',
    introducemd: '求知若渴，虚心若愚，学无止尽，再创新高',
    showDate: '2020-02-29',
    selectedType: '生活分享',
    fire: 152,
    sourceType: '学习笔记',
  },
]

const Say = () => {
  const routerData = (para: any) => {}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Row className='comm-main' justify='center' style={{ paddingTop: '3.2rem' }}>
        <Col
          className='comm-left'
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={14}
          style={{ backgroundColor: 'rgba(255,255,255,.4)' }}
        >
          <Spin tip='加载中...' spinning={false}>
            <List
              header={
                <Row>
                  <Col xs={12} sm={14} md={15} lg={17} xl={17}>
                    <div
                      style={{
                        fontWeight: 'bold',
                        paddingLeft: 20,
                        lineHeight: '32px',
                      }}
                    >
                      生活趣事 <span style={{ color: 'red' }}>{520}</span> 篇
                    </div>
                  </Col>
                  <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                </Row>
              }
              itemLayout='vertical' //
              dataSource={renderItem}
              renderItem={(item, index) => {
                // const html = marked(item.introducemd);
                return (
                  <List.Item key={index}>
                    <div className={index % 2 === 0 ? 'cssnice1' : 'cssnice4'}>
                      <div className='borderbac'>
                        <div
                          className='bacimg'
                          style={
                            window.screen.width >= 770
                              ? {
                                  height: '18rem',
                                  backgroundImage:
                                    "url('http://www.jsfan.net/lifeimg/life%20(" +
                                    //@ts-ignore
                                    parseInt(Math.random() * 74) +
                                    ").jpg')",
                                }
                              : {
                                  height: '10rem',
                                  backgroundImage:
                                    "url('http://www.jsfan.net/lifeimg/life%20(" +
                                    //@ts-ignore
                                    parseInt(Math.random() * 74) +
                                    ").jpg')",
                                }
                          }
                        >
                          <div className='bacophover'>
                            <div className='bacimg-title'>
                              <Paragraph ellipsis style={{ color: '#fff' }}>
                                <p className='label' style={{ color: '#fff' }}>
                                  {item.sourceType === undefined ? '生活分享' : item.sourceType}
                                </p>
                                <span style={{ textShadow: '0 0 8px #fff' }}>{item.articleTitle}</span>
                              </Paragraph>
                            </div>
                            <div
                              className='bacimg-content'
                              //@ts-ignore
                              style={window.screen.width >= 770 ? { marginTop: '5rem' } : null}
                              dangerouslySetInnerHTML={{
                                __html: 'tttttttttttttttttttttttttttt',
                              }}
                              // dangerouslySetInnerHTML={{ __html: html }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className='botinfo'>
                        <span style={{ paddingRight: '1rem' }}>
                          <CalendarOutlined />
                          {item.showDate}
                        </span>
                        <span style={{ paddingRight: '1rem' }}>
                          <TwitterOutlined />
                          {item.sourceType === undefined ? '生活分享' : item.sourceType}
                        </span>
                        {item.sourceType === '秃头日记' ? null : (
                          <span style={{ paddingRight: '1rem' }}>
                            <FireOutlined style={{ color: 'red' }} />
                            {item.fire
                              ? // <CountUp
                                //   start={0}
                                //   end={item.fire}
                                //   duration={2}
                                //   style={{ padding: "0px" }}
                                // />
                                '暂无浏览'
                              : '暂无浏览'}
                          </span>
                        )}
                        {window.screen.width >= 770 ? (
                          <span style={{ paddingRight: '1rem' }}>
                            <UserOutlined style={{ color: 'lightseagreen' }} />
                            Youngster_yj
                          </span>
                        ) : null}
                        {item.isenter || item.isenter === undefined ? null : (
                          <span style={{ paddingRight: '1rem' }}>
                            <EyeInvisibleOutlined style={{ color: 'lightseagreen' }} />
                            文章加密
                          </span>
                        )}
                        {item.sourceType !== '秃头日记' ? (
                          <p
                            style={{ float: 'right' }}
                            onClick={() => {
                              routerData(item.articleTitle)
                            }}
                          >
                            <ArrowsAltOutlined style={{ marginRight: 10 }} />
                            <span>查看全文 》</span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </List.Item>
                )
              }}
            />
          </Spin>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
    </div>
  )
}

export default Say
