import React, { Suspense, useEffect, useState, memo } from 'react';
import { useLocation } from 'react-router-dom';
import { BlogMainStyled } from './style';
import { Row, Col } from 'antd';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MyBackTop from '@/components/backTop';
import LoginPanel from '@/components/loginPanel';
import BlogRoutes from '@/router';
import RightBar from '@/pages/main/cpns/rightBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { MainState } from '@/store/reducers/main';
import { set_right_bar } from '@/store/actions/main';
import Loading from '@/components/loading';

const BlogMain = memo(() => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { showRightBar, showLoginPanel } = useSelector<RootState, MainState>((state) => state.main);
  const [showRightBarAll, setShowRightBarAll] = useState<boolean>(false); // 是否显示整个右侧
  const [isNotFound, setIsNotFound] = useState<boolean>(false); // 是否为404页面

  useEffect(() => {
    setIsNotFound(false); // 默认非404页面
    const curPathname = pathname.split('/')[1];
    // 根据路由决定显示右边的哪些组件
    let showRightBar = {
      showAuthor: false,
      showTags: false,
    };
    if (pathname === '/') {
      showRightBar.showAuthor = true;
    } else if (curPathname === 'article') {
      showRightBar.showAuthor = true;
      showRightBar.showTags = true;
    } else if (curPathname === 'detail') {
      showRightBar.showAuthor = true;
      showRightBar.showTags = true;
    } else if (curPathname === 'record') {
      showRightBar.showAuthor = true;
    } else if (curPathname === 'say') {
      showRightBar.showAuthor = true;
    } else if (curPathname === 'friend') {
      showRightBar.showAuthor = true;
    } else if (curPathname === 'about') {
    } else {
      setIsNotFound(true); // 都没匹配到则为404页面
    }
    // 如果右边一个组件也不显示，则隐藏整个右侧
    if (Object.values(showRightBar).find((item) => item === true)) {
      setShowRightBarAll(true);
    } else {
      setShowRightBarAll(false);
    }
    dispatch(set_right_bar(showRightBar));
  }, [dispatch, pathname]);
  return (
    <>
      <div className='blog-back-ground-color' />
      <Header />
      <MyBackTop />
      <Suspense fallback={<Loading />}>
        <BlogMainStyled>
          <Row className='comm-main' justify='center'>
            <Col className={isNotFound ? '' : 'comm-left'} xs={23} sm={22} md={20} lg={14} xl={14}>
              <div className='left-content'>
                <BlogRoutes />
              </div>
            </Col>
            {showRightBarAll ? (
              <Col xs={0} sm={0} md={0} lg={5} xl={4}>
                <RightBar showRightBar={showRightBar} />
              </Col>
            ) : (
              ''
            )}
          </Row>
          {/* <div className='left-content'>
            <BlogRoutes />
          </div>
          <div className='right-content'>
            <Author />
            <Tags />
          </div> */}
        </BlogMainStyled>
      </Suspense>
      {showLoginPanel ? <LoginPanel /> : ''}
      <Footer />
    </>
  );
});

export default BlogMain;
