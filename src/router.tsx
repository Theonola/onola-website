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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'insight', element: <Blogs /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  // { path: '/user/:id', element: <Profile /> },
  // { path: '/login', element: <Login /> },
  // { path: '/register', element: <Register /> },
  { path: '*', element: <NotFound /> },
])

export default router
