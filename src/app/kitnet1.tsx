// import { Header } from "@/components/Header"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"
// import img_1 from "/images/imagens-kitnets/1/principal_1.jpg"
// import img_2 from "/images/imagens-kitnets/1/img_2.jpg"
// import img_3 from "/images/imagens-kitnets/1/img_3.jpg"
// import img_4 from "/images/imagens-kitnets/1/img_4.jpg"
// import img_5 from "/images/imagens-kitnets/1/img_5.jpg"
// import img_6 from "/images/imagens-kitnets/1/img_6.jpg"
// import img_ac_2 from "/images/imagens-kitnets/area_comum/img_2.jpg"
// import img_ac_3 from "/images/imagens-kitnets/area_comum/img_3.jpg"
// import img_ac_4 from "/images/imagens-kitnets/area_comum/img_4.jpg"
// import img_ac_5 from "/images/imagens-kitnets/area_comum/img_5.jpg"
// import img_ac_6 from "/images/imagens-kitnets/area_comum/img_6.jpg"
// import img_ac_7 from "/images/imagens-kitnets/area_comum/img_7.jpg"

import {
  DetailsContainer,
  ContactButton,
  CarouselContainer,
} from "@/styles/detailsStyle"
import { useState } from "react"
import { ModalContato } from "@/components/Modal"

export default function Detalhes() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(!isModalOpen)
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
          <p> A partir de R$1.350,00. </p>
          <p> Rua Abadia dos Dourados, 440 - Vila Indiana</p>

          {isModalOpen ? (
            <ModalContato
              openModal={openModal}
              isModalOpen={isModalOpen}
              kitnet={"Abadia dos Dourados"}
            />
          ) : (
            <ContactButton onClick={openModal}>ENTRE EM CONTATO</ContactButton>
          )}
        </article>

        <CarouselContainer slide={false}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="First slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="First slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Second slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Third slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fourth slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
            <Carousel.Caption>
              <h3>ÁREA COMUM</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={"/images/imagens-kitnets/1/principal_1.jpg"}
              alt="Fifth slide"
              quality={90}
            />
          </Carousel.Item>
        </CarouselContainer>
      </DetailsContainer>
    </>
  )
}
