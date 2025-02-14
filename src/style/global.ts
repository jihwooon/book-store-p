import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeName } from './theme';

interface Props {
  themeName: ThemeName;
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }

  h1 {
    margin: 0;
  }

  * {
    color: ${({ themeName }) => themeName === 'light' ? 'black' : 'white'};
  }
`

export default GlobalStyle;
