import { Header } from "@/components/Header";
import Carousel from 'react-bootstrap/Carousel'
import Image from "next/image";
import img_1 from "../assets/imagens-kitnets/loft_casa/principal_4.jpg";
import img_10 from "../assets/imagens-kitnets/loft_casa/img_10.jpeg";
import img_11 from "../assets/imagens-kitnets/loft_casa/img_11.jpeg";
import img_12 from "../assets/imagens-kitnets/loft_casa/img_12.jpeg";
import img_13 from "../assets/imagens-kitnets/loft_casa/img_13.jpeg";
import img_14 from "../assets/imagens-kitnets/loft_casa/img_14.jpeg";
import img_15 from "../assets/imagens-kitnets/loft_casa/img_15.jpeg";
import img_16 from "../assets/imagens-kitnets/loft_casa/img_16.jpeg";
import img_17 from "../assets/imagens-kitnets/loft_casa/img_17.jpeg";
import img_18 from "../assets/imagens-kitnets/loft_casa/img_17.jpeg";


import { CarouselContainer, ContactButton, DetailsContainer } from "@/styles/detailsStyle";
import { ModalContato } from "@/components/Modal";
import { useState } from "react";
import Head from 'next/head'

export default function Detalhes() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <Head>
                <title>KITUSP - Kitnets no Butantã</title>
                <meta name="description" content="Kitnets mobiliadas e moradias estudantis na região do Butantã, próxima à USP." />
                <meta name='keywords' content='kitnet, kitnets, kitnets mobiliadas, kitnet mobiliada, moradia estudantil, moraridas estudantis, USP, Butantã, kitnet Butantã, kitnets butantã, kitnet usp, kitnets usp, moradia usp, moradia butantã' />
            </Head>
            
            <Header />
            <DetailsContainer>
                <article>
                    <h1>LOFT</h1>
                    <p>Loft com banheiro privativo próximo à USP. Mobiliado com:</p>
                    <ul>
                        <li>Cama</li>
                        <li>Colchão</li>
                        <li>Guarda Roupa</li>
                        <li>Escrivaninha</li>
                        <li>Geladeira</li>
                    </ul>
                    <p> A partir de R$1.700,00.</p>
                    <p> Rua Corinto, 32 - Vila Indiana</p>

                    {isModalOpen ?
                        <ModalContato openModal={openModal} isModalOpen={isModalOpen} kitnet={"Rua Corinto"} />
                        :
                        <ContactButton onClick={openModal}>ENTRE EM CONTATO</ContactButton>
                    }

                </article>

                <CarouselContainer slide={false}>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_1}
                            alt="First slide"
                            quality={90}
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_10}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_11}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_12}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_13}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_14}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_15}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_16}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_17}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_18}
                            alt="Fifth slide"
                            quality={90}
                        />
                    </Carousel.Item>
                </CarouselContainer>

            </DetailsContainer>
        </>

    )
}