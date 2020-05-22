import { createGlobalStyle } from 'styled-components'
import { COLORS } from './variables';

const GlobalStyle = createGlobalStyle`
    html {

    }

    body {
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, sans-serif;
        font-size: 16px;
        background: ${COLORS.GRAY}
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .App {
        margin: 0 auto;
        padding: 1rem;
        max-width: 1200px;
        min-height: 100vh;
    }
`;

export default GlobalStyle;