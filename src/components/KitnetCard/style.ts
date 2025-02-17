import styled from 'styled-components';

interface Props extends React.AnchorHTMLAttributes<HTMLDivElement> {}

export const KitnetContainer = styled.div<Props>`
    width: 18rem;
    height: 25rem;

    border-radius: 0.5rem;

    background-color: #217373;
    
    //margin-bottom: 1rem;
    cursor: pointer;

    .grow { 
        transition: all .2s ease-in-out; 
    }

    .grow:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 80%;

        object-fit: cover;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        text-align: center;
        color: #161F30;
        margin: 1rem;
       
    }

`


