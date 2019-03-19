import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    /* fonts */
    --primaryFont: roboto;
}

html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

body {
    font-family: var(--primaryFont);
    background-color: #3b5887;
    margin: 0px;
}

.material-icons {
    font-family: 'material icons';
    font-size: 40px;
    color: white;
  }
`

export default GlobalStyles
