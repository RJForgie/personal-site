import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
    /* fonts */
    --primaryFont: Arial, monospace;
    --sansFont: 'Arial', sans-serif;
}

html {
    box-sizing: border-box;
}

body {
    background-color: #3b5887;
    margin: 0px;
}
`

export default GlobalStyles