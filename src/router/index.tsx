import React from 'react';
import { useRoutes } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));
const Article = React.lazy(() => import('@/pages/article'));
const Detail = React.lazy(() => import('@/pages/detail'));
const Record = React.lazy(() => import('@/pages/record'));
const Say = React.lazy(() => import('@/pages/say'));
const Friend = React.lazy(() => import('@/pages/friend'));
const About = React.lazy(() => import('@/pages/about'));
const NotFound = React.lazy(() => import('@/pages/notFound'));

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
      path: '/friend',
      element: <Friend />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return routes;
};

export default BlogRoutes;
