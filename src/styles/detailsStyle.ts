import styled from "styled-components";

export const CarouselContainer = styled.div` 
    width: 80rem;

    display: flex;
    justify-content: space-evenly;

    padding: 0.75rem 0.5rem;
    
    span {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        font-family: 'Roboto', sans-serif;
        color: #173540;

        h1 {
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    };
`