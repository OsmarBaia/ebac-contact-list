import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle/*css*/`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
    }
`;

export default EstiloGlobal;