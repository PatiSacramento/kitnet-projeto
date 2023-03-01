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


import { CarouselContainer } from "@/styles/detailsStyle";

export default function Detalhes() {
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
                </Carousel>

            </CarouselContainer>
        </>

    )
}