import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        color: white;
    }

    *::-webkit-scrollbar {
	width: 5px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        /* background-color: rgba(155, 155, 155, 0.5); */
        border-radius: 20px;
        border: transparent;
    }

.active-button{
    border-style: none !important;
	background-color: #f54b00 !important;
}

.active-box{
    background-color: #0F1B41;
}
`;

export default GlobalStyles;
