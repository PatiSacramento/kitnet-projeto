import styled from 'styled-components';

export const RegiaoCardContainer = styled.div`
    min-width: 18rem;
    min-height: 100%;

    border-radius: 0.5rem;
    
    //margin: 2rem;
    cursor: pointer;

    img {
        width: 100%;
        height: 70%;

        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }



`

export const InfosContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #84B026;

    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    

    p {
        font-family: 'Roboto', sans-serif;
        color: #173540;
        margin-top: 1rem;
        font-weight: bold;
        text-align: center;
       
    }

    a {
        text-decoration: none;
        margin-bottom: 0.5rem;
        color: #239191;
        font-weight: bold;
    }

    a:hover {
        color: #217373;
    }
`


