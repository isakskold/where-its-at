import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'SansitaOne';
        src: url('../src/assets/SansitaOne.woff2') format('woff2');
    }

    @font-face {
      font-family: 'FiraSans';
      src: url('../src/assets/FiraSans-Regular.ttf');
    }

  /* Reset default styles */
  body {
    margin: 0;
    padding: 0;
    font-family: 'FiraSans', sans-serif; /* Specify your preferred font-family */
    background-color: var(--dark-blue); /* Set background color */
    color: var(--text-white); /* Set text color */
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: 'SansitaOne', sans-serif;
    font-weight: 100;
    color: var(--pink);
    font-size: 2rem;
  }

  h2 {
    margin: 0;
  }

    p {
        margin: 0;
        padding: 0;
    }

    button {
        appearance: none; /* Remove default browser styles */
        border: none;
        margin: 0;
        padding: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        outline: none;
        height: 100%;
        width: 100%;
        color: var(--text-white);
        font-size: 20px;
        
    }

  /* Define root styles */
  :root {
    --dark-blue: #231F42;
    --light-blue: #37AEAB;
    --pink: #f56b9a;
    --text-white: #FFFFFF;
    --text-white-secondary: #D0D0D0;

    
    
    --box-shadow-WB: 1px 1px 0px 0px #000000;
    --box-shadow-PB: 1px 1px 0px 0px #000000;
    --box-shadow-WP: 1px 1px 0px 0px #F56B9A;

    padding-left: 30px;
    padding-right: 30px;

  }
`;

export default GlobalStyles;
