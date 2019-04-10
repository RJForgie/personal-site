import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    /* fonts */
    --primaryFont: roboto;
}

html {
    box-sizing: border-box;
    line-height: 1.6;

    /* make fonts more smooth in all browsers */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

*, *:before, *:after {
    box-sizing: inherit;
    overflow-y: scroll;
  }

body {
    font-family: var(--primaryFont);
    background-color: #3b5887;
    margin: 0px;
}

a {
    color: #E76C67
}

h1,
h2,
h3,
h4,
h5 {
  line-height: 1.2;
}

.material-icons {
    font-family: 'material icons';
    font-size: 40px;
    color: white;
  }
`

export default GlobalStyles
