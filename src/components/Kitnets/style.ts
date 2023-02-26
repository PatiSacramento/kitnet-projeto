import styled from "styled-components";


export const KitnetsContainer = styled.div`
    width: 90%;
    height: 35rem;

    background-color: white;

    margin: 3rem 5rem;

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #161F30;
    }

    hr {
        width: 95%;
        margin-bottom: 2rem;
    }

    span {
        display: flex; 
        gap: 2rem; 
        overflow-x: scroll;
        //max-width: 95%;

        a {
            text-decoration: none;
        }
    } 
`