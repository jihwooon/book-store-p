import './App.css'
import Layout from './layout/layout'
import { BookStoreThemeProvider } from './context/themeContext'
import Home from './page/home'

function App() {

  return (
    <>
      <BookStoreThemeProvider >
        <Layout>
          <Home/>
        </Layout>
      </BookStoreThemeProvider>
    </>
  )
}

export default App
