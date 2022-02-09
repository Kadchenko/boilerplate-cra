import loadable from '@loadable/component';
import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

const Home = loadable(() => import(/* webpackChunkName: "Home" */ '@pages/Home'));
const MainLayout = loadable(() => import(/* webpackChunkName: "MainLayout" */ '@layouts/mainLayout'));
const NotFound = loadable(() => import(/* webpackChunkName: "NotFound" */ '@pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const Routing = () => {
  return useRoutes(routes);
};

export { Routing as default, routes };
