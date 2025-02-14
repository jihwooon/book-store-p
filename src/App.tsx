import './App.css'
import Layout from './layout/layout'
import { BookStoreThemeProvider } from './context/themeContext'
import ThemeSwitcher from './components/common/header/ThemeSwitcher'

function App() {

  return (
    <>
      <BookStoreThemeProvider >
        <Layout>
          <ThemeSwitcher />
          <div>Hello World</div>
        </Layout>
      </BookStoreThemeProvider>
    </>
  )
}

export default App
