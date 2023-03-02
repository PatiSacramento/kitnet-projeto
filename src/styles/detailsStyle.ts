import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";

export const DetailsContainer = styled.div` 
    width: 80rem;

    display: flex;
    justify-content: space-evenly;

    padding: 0.75rem 0.5rem;
    
    span {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        margin-left: 2rem;;
        font-family: 'Roboto', sans-serif;
        color: #173540;

        h1 {
            font-weight: bold;
        }

    }


    @media (max-width: 768px) {
        flex-direction: column;

        margin: 0.5rem;

        width: auto;

        div {
            max-width: 35rem;
            margin: 0 auto;
        }
    }



    @media (max-width: 1440px) {
        width: auto;

        margin: 0.5rem;

        div {
            max-width: 40rem;
            margin: 0 auto;
        }
    }

    @media (min-width: 1440px) {
        width: auto;

        margin: 2rem;

        div {
            max-width: 60rem;
            margin: 0 auto;
        }
    }
`

export const CarouselContainer = styled(Carousel)`
    max-width: 40rem;

    .carousel-item {

       img {
            width: auto;
            max-height: 70vh;
            object-fit: cover;
        } 

        @media (max-width: 768px) {
            margin: 0 auto;

            max-width: auto;

        }

        @media (max-width: 1440px) {
            margin: 0 auto;

            max-width: auto;

        }
        @media (min-width: 1440px) {
            margin: 0 auto;

            max-width: auto;

        }

    }
    
`

export const ContactButton = styled.button` 
    background-color: #84B026;
    border: none;

    border-radius: 0.5rem;

    margin-top:1rem;

    height: 2rem;

    color:  #173540;
    font-weight: bold;

    a {
        text-decoration: none;
        color:  #173540;
        font-weight: bold;

        padding: 0.5rem;

        :hover {
            color: #205264;
        }
    }

`