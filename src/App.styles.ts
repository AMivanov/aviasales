import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import OpenSansBold from './fonts/OpenSans-Bold.woff'
// @ts-ignore
import OpenSansLight from './fonts/OpenSans-Light.woff'
// @ts-ignore
import OpenSansRegular from './fonts/OpenSans-Regular.woff'
// @ts-ignore
import OpenSansSemiBold from './fonts/OpenSans-SemiBold.woff'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OpenSansBold';
    src: url(${OpenSansBold}) format("woff");
  }
  @font-face {
    font-family: 'OpenSansLight';
    src: url(${OpenSansLight}) format("woff");
  }
  @font-face {
    font-family: 'OpenSansRegular';
    src: url(${OpenSansRegular}) format("woff");
  }
  @font-face {
    font-family: 'OpenSansSemiBold';
    src: url(${OpenSansSemiBold}) format("woff");
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'OpenSansRegular', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`