import { ThemeProvider } from 'styled-components'
import './App.css'
import GlobalStyle from './style/global'
import { light } from './style/theme'
import Layout from './layout/layout'

function App() {

  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle themeName="light"/>
        <Layout>
          <div>Hello World</div>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
