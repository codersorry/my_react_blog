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
// const Header = React.lazy(() => import('@/components/header'));
// const MyBackTop = React.lazy(() => import('@/components/backTop'));
// const Footer = React.lazy(() => import('@/components/footer'));

const BlogMain = memo(() => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { showRightBar, showLoginPanel } = useSelector<RootState, MainState>((state) => state.main);
  const [showRightBarAll, setShowRightBarAll] = useState<boolean>(false); // 是否显示整个右侧

  useEffect(() => {
    // 根据路由决定显示右边的哪些组件
    let showRightBar = {
      showAuthor: false,
      showTags: false,
    };
    if (pathname === '/') {
      showRightBar.showAuthor = true;
    } else if (pathname.indexOf('/article') !== -1) {
      showRightBar.showAuthor = true;
      showRightBar.showTags = true;
    } else if (pathname.indexOf('/detail') !== -1) {
      showRightBar.showAuthor = true;
      showRightBar.showTags = true;
    } else if (pathname.indexOf('/record') !== -1) {
      showRightBar.showAuthor = true;
    } else if (pathname.indexOf('/say') !== -1) {
      showRightBar.showAuthor = true;
    } else if (pathname.indexOf('/picture') !== -1) {
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
            <Col className='comm-left' xs={23} sm={22} md={20} lg={14} xl={14}>
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
