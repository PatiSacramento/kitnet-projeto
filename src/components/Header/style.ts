import styled from 'styled-components';

export const HeaderContainer = styled.header` 
    width: 100%;
    height: 11rem;
    background-color: #3D3D3D;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    a {
        text-decoration: none;
        color: #84B026;
    }

    a:hover {
        color: #6b8c24;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #84B026;
    }

    span {
        color: #84B026;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        padding: 2rem;
        display: flex;
        gap: 2rem;
        
    }
`

export const LinksMenu = styled.a` 
    text-decoration: none;
    color: #84B026;

    :hover {
        color: #6b8c24;
    }

    a {
        text-decoration: none;
        color: #84B026;

        :hover {
            color: #6b8c24;
        }
    }
 
`