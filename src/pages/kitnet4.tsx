import { Header } from "@/components/Header";
import Carousel from 'react-bootstrap/Carousel'
import Image from "next/image";
import img_1 from "../assets/imagens-kitnets/loft_casa/principal_4.jpg";
import img_2 from "../assets/imagens-kitnets/loft_casa/img_2.jpg";
import img_3 from "../assets/imagens-kitnets/loft_casa/img_3.jpg";
import img_4 from "../assets/imagens-kitnets/loft_casa/img_4.jpg";
import img_5 from "../assets/imagens-kitnets/loft_casa/img_5.jpg";
import img_6 from "../assets/imagens-kitnets/loft_casa/img_6.jpg";
import img_7 from "../assets/imagens-kitnets/loft_casa/img_7.jpg";
import img_8 from "../assets/imagens-kitnets/loft_casa/img_8.jpg";
import img_9 from "../assets/imagens-kitnets/loft_casa/img_9.jpg";
import img_10 from "../assets/imagens-kitnets/loft_casa/img_10.jpeg";
import img_11 from "../assets/imagens-kitnets/loft_casa/img_11.jpeg";
import img_12 from "../assets/imagens-kitnets/loft_casa/img_12.jpeg";
import img_13 from "../assets/imagens-kitnets/loft_casa/img_13.jpeg";
import img_14 from "../assets/imagens-kitnets/loft_casa/img_14.jpeg";
import img_15 from "../assets/imagens-kitnets/loft_casa/img_15.jpeg";
import img_16 from "../assets/imagens-kitnets/loft_casa/img_16.jpeg";
import img_17 from "../assets/imagens-kitnets/loft_casa/img_17.jpeg";
import img_18 from "../assets/imagens-kitnets/loft_casa/img_17.jpeg";


import { CarouselContainer, ContactButton } from "@/styles/detailsStyle";
import { ModalContato } from "@/components/Modal";
import { useState } from "react";

export default function Detalhes() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <Header />
            <CarouselContainer>
                <span> 
                    <h1>LOFT</h1>
                    <p>Loft com banheiro privativo. Mobiliado com:</p>
                    <ul>
                        <li>Cama</li>
                        <li>Colchão</li>
                        <li>Guarda Roupa</li>
                        <li>Escrivaninha</li>
                        <li>Geladeira</li>
                    </ul>
                    <p> A partir de R$1.300,00.</p>
                    <p> Rua Corinto, 32 - Vila Indiana</p>

                    {isModalOpen ? 
                        <ModalContato openModal={openModal} isModalOpen={isModalOpen} kitnet={"Rua Corinto"}/>
                            : 
                        <ContactButton onClick={openModal}>ENTRE EM CONTATO</ContactButton>
                    }

                </span>
                
                <Carousel slide={false}>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_1}
                            alt="First slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_2}
                            alt="First slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_3}
                            alt="Second slide"
                            width={500}
                            height={600}
                            quality={90}
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_4}
                            alt="Third slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_5}
                            alt="Fourth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_6}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_7}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_8}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_9}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_10}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_11}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_12}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_13}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_14}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_15}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_16}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_17}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={img_18}
                            alt="Fifth slide"
                            width={500}
                            height={600}
                            quality={90}
                        />
                    </Carousel.Item>
                </Carousel>

            </CarouselContainer>
        </>

    )
}