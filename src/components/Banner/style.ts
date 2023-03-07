import styled from "styled-components";


export const BannerContainer = styled.div`
    width: 100%;
    height: 28rem;

    img {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        object-fit: cover;

    }

    @media (max-width: 768px) {

        height: 17rem;

        img {
            height: 100%;
        }
        
    }



    @media (min-width: 769px) and (max-width: 1024px) {

        height: 22rem;

        img {
            height: 100%;
        }
           
        
    }


`