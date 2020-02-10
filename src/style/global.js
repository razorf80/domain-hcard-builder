/* eslint-disable */
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
  }

  @font-face {
    font-family: "Leckerli One";
    src: url(${require('./assets/fonts/LeckerliOne-Regular.ttf')}) format("truetype");
    font-weight: 400;
    font-style: regular;
  }

  @font-face {
    font-family: "Larsseit";
    src: url(${require('./assets/fonts/Larsseit-Regular.otf')}) format("opentype");
    font-weight: 400;
    font-style: regular;
  }

  @font-face {
    font-family: "Larsseit";
    src: url(${require('./assets/fonts/Larsseit-Bold.otf')}) format("opentype");
    font-weight: 700;
    font-style: bold;
  }

  body,
  html {
    font-family: ${props => props.theme.primaryFontFamily};
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.colorPrimary};
    height: 100%;
  }

  body {
    background-color: #ffffff;
    margin: 0px;
  }

  #root{
    height: 100%;
  }

  h1 {
    font-size: ${props => props.theme.fontSizeXXXLarge};
    letter-spacing: 0.553846px;
  }

  h2 {
    font-size: ${props => props.theme.fontSizeXLarge};
    letter-spacing: 0.553846px;
  }

  h3 {
    font-size: ${props => props.theme.fontSizeLarge};
  }
`;

export default GlobalStyle;
