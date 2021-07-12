import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  :root{
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body, button, a, input {
    font: 14px 'Roboto', sans-serif;
  }

  html {
    @media(max-width:1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
