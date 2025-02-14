import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/common/header'
import GlobalStyle from './style/global'
import { dark, light } from './style/theme'

function App() {

  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle themeName="light"/>
        <Header/>
        <div>Hello World</div>
      </ThemeProvider>
    </>
  )
}

export default App
