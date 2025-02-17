import './App.css'
import Layout from './layout/layout'
import { BookStoreThemeProvider } from './context/themeContext'
import Home from './page/home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Error from './components/common/error'
import Signup from './page/signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/books',
    element: <Layout><div>도서목록</div></Layout>,
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>,
  },
]);

function App() {

  return (
    <BookStoreThemeProvider >
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  )
}

export default App
