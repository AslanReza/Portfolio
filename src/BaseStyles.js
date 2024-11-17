import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0px;
    padding: 0px;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
body{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}`;
export default GlobalStyle;
