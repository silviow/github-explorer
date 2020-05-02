import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #f0f0f5 url(${background}) no-repeat 60% top;
    }

    body, input, button {
        font: 16px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    #root {
        padding: 40px;
        margin: 0 auto;
        max-width: 960px;
    }
`;
