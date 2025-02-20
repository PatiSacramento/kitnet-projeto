import Image from "next/image";
// import img_1 from "/images/imagens-kitnets/loft_casa/principal_4.jpg";
// import img_10 from "/images/imagens-kitnets/loft_casa/img_10.jpeg";
// import img_11 from "/images/imagens-kitnets/loft_casa/img_11.jpeg";
// import img_12 from "/images/imagens-kitnets/loft_casa/img_12.jpeg";
// import img_13 from "/images/imagens-kitnets/loft_casa/img_13.jpeg";
// import img_14 from "/images/imagens-kitnets/loft_casa/img_14.jpeg";
// import img_15 from "/images/imagens-kitnets/loft_casa/img_15.jpeg";
// import img_16 from "/images/imagens-kitnets/loft_casa/img_16.jpeg";
// import img_17 from "/images/imagens-kitnets/loft_casa/img_17.jpeg";
// import img_18 from "/images/imagens-kitnets/loft_casa/img_17.jpeg";


import { ContactButton, DetailsContainer } from "@/styles/detailsStyle";
import { ModalContato } from "@/components/Modal";
import { useState } from "react";

export default function Detalhes() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>            
            <DetailsContainer>
                <article>
                    <h1>LOFT VILA INDIANA</h1>
                    <p>Loft com banheiro privativo próximo à USP. Mobiliado com:</p>
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
                        <ModalContato openModal={openModal} isModalOpen={isModalOpen} kitnet={"Rua Corinto"} />
                        :
                        <ContactButton onClick={openModal}>ENTRE EM CONTATO</ContactButton>
                    }

                </article>

                {/* <CarouselContainer slide={false}> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="First slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}

                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Fifth slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                {/* </CarouselContainer> */}

            </DetailsContainer>
        </>

    )
}