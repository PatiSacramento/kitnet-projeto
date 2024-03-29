import styled from "styled-components";


export const SobreContainer = styled.section` 
    width: 90%;
    height: 10rem;

    background-color: white;

    margin: 10rem 5rem;

    @media (max-width: 768px) {
        margin-left: 1.5rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        margin-left: 2rem;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #161F30;
    }

    hr {
        width: 95%;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.1rem;
        color: #173540;
    }


`