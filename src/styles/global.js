import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: 0;
        }

    :root {
        --white: #EEEEEE;
        --red: #FF4C29;
        --dark: #082032;
        --dark-blue: #0F044C;
        --gray: #787A91;
        --font-title: 'Archivo Black', sans-serif;
        --font-text: 'Gothic A1', sans-serif;
    }

    body {
        background-color: var(--dark);
    }


`