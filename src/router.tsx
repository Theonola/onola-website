import { createBrowserRouter } from 'react-router-dom'
import {
  About,
  Home,
  CareersPage,
  Blogs,
  Contact,
  NotFound,
} from './pages/Index'
import App from './App'
import Blog from './pages/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'insights', element: <Blogs /> },
      { path: 'insights/:id', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  // { path: '/login', element: <Login /> },
  // { path: '/register', element: <Register /> },
  { path: '*', element: <NotFound /> },
])

export default router
