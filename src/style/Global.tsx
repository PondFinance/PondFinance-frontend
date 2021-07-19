import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IntroRustG';
    src: url('font.ttf') format('truetype');
  }

  * {
    font-family: 'IntroRustG';
  }
  body {
    background-color: #4aa58e;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: auto;
    

    img {
      height: auto;
      max-width: 100%;
    }
  }
  nav > div:first-child {
    align-items: center;
  }
  nav a > svg:last-child {
    width: 400px !important;
  }
`

export default GlobalStyle
