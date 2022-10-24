import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { BlogMainStyled } from './style';
import { Row, Col } from 'antd';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Author from '@/components/author';
import MyBackTop from '@/components/backTop';
import Tags from '@/components/tags';
import BlogRoutes from '@/router';

const BlogMain = () => {
  return (
    <BrowserRouter>
      <Header />
      <MyBackTop />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogMainStyled>
          <Row className='comm-main' justify='center'>
            <Col className='comm-left' xs={23} sm={22} md={20} lg={14} xl={14}>
              <div className='left-content'>
                <BlogRoutes />
              </div>
            </Col>
            <Col className='right-bar' xs={0} sm={0} md={0} lg={5} xl={4}>
              <Author />
              <Tags />
            </Col>
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
      <Footer />
    </BrowserRouter>
  );
};

export default BlogMain;
