import Image from "next/image";
// import img_1 from "/images/imagens-kitnets/3/principal_3.jpg";
// import img_2 from "/images/imagens-kitnets/3/img_2.jpg";
// import img_3 from "/images/imagens-kitnets/3/img_3.jpg";
// import img_4 from "/images/imagens-kitnets/3/img_4.jpg";
// import img_ac_2 from "/images/imagens-kitnets/area_comum/img_2.jpg";
// import img_ac_3 from "/images/imagens-kitnets/area_comum/img_3.jpg";
// import img_ac_4 from "/images/imagens-kitnets/area_comum/img_4.jpg";
// import img_ac_5 from "/images/imagens-kitnets/area_comum/img_5.jpg";
// import img_ac_6 from "/images/imagens-kitnets/area_comum/img_6.jpg";
// import img_ac_7 from "/images/imagens-kitnets/area_comum/img_7.jpg";
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
                    <h1>KITNET VILA INDIANA</h1>
                    <p>Kitnet ensolarada e ventilada próxima à USP. Mobiliada com:</p>
                    <ul>
                        <li>Cama</li>
                        <li>Colchão</li>
                        <li>Guarda Roupa</li>
                        <li>Escrivaninha</li>
                        <li>Geladeira</li>
                        <li>Microondas</li>
                    </ul>
                    <p> A partir de R$1.800,00.</p>
                    <p> Rua Abadia dos Dourados, 440 - Vila Indiana</p>

                    {isModalOpen ?
                        <ModalContato openModal={openModal} isModalOpen={isModalOpen} kitnet={"Abadia dos Dourados"} />
                        :
                        <ContactButton onClick={openModal}>ENTRE EM CONTATO</ContactButton>
                    }
                </article>

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
                            alt="First slide"
                            quality={90}
                        />
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Second slide"
                            quality={90}
                        />

                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item> */}
                        <Image
                            className="d-block w-100"
                            src={"/images/imagens-kitnets/3/principal_3.jpg"}
                            alt="Third slide"
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
                        {/* <Carousel.Caption> */}
                            <h3>ÁREA COMUM</h3>
                        {/* </Carousel.Caption> */}
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

            </DetailsContainer>
        </>

    )
}