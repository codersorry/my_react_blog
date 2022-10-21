import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '@/pages/home';
import Detail from '@/pages/detail';
import Article from '@/pages/article';
import Record from '@/pages/record';
import Say from '@/pages/say';
import Picture from '@/pages/picture';

const BlogRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/article/:id',
      element: <Article />,
    },
    {
      path: '/detail/:id',
      element: <Detail setIsShowDetail={() => {}} />,
    },
    {
      path: '/record',
      element: <Record />,
    },
    {
      path: '/say',
      element: <Say />,
    },
    {
      path: '/picture',
      element: <Picture />,
    },
  ]);
  return routes;
};

export default BlogRoutes;
