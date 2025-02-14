import './App.css'
import Layout from './layout/layout'
import { BookStoreThemeProvider } from './context/themeContext'
import ThemeSwitcher from './components/common/header/ThemeSwitcher'
import Home from './page/home'

function App() {

  return (
    <>
      <BookStoreThemeProvider >
        <Layout>
          <ThemeSwitcher />
          <Home/>
        </Layout>
      </BookStoreThemeProvider>
    </>
  )
}

export default App
