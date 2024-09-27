import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '~/layout/Layout'
import About from '~/pages/About'
import Home from '~/pages/Home'
import { Page404 } from '~/pages/Page404'

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> }
      ]
    },
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to='/404' replace /> }
  ])
}
