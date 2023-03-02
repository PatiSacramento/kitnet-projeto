import styled from "styled-components";

export const LinksMenu = styled.a` 
    text-decoration: none;
    font-size: 1rem;
    padding-left: 0.5rem;
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

export const LinksContainer = styled.span`
    flex-flow: column nowrap;
    margin: 0 auto;
    background-color: #3D3D3D;
    height: 100vh;
    width: 8rem;

    position: fixed;
    top: 0;
    right: 0;


    z-index: 1;

    span {
        align-self: center;
    }
`

