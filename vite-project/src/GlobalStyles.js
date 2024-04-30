import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset default styles */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif; /* Specify your preferred font-family */
    background-color: var(--dark-blue); /* Set background color */
    color: var(--text-white); /* Set text color */
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
    
    --box-shadow-WB: 1px 1px 0px 0px #000000;
    --box-shadow-PB: 1px 1px 0px 0px #000000;
    --box-shadow-WP: 1px 1px 0px 0px #F56B9A;



  }
`;

export default GlobalStyles;
