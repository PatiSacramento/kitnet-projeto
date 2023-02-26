import Image from "next/image"
import { InfosContainer, RegiaoCardContainer } from "./style"



export const RegiaoCard = (props: { name: string, linkMapa: string, imagem: any }) => {
    return (
        <RegiaoCardContainer>
            <Image src={props.imagem} alt="" width={200} height={200} />
            <InfosContainer>
                <p>{props.name.toUpperCase()}</p>
                <a href={props.linkMapa} target="_blank"> Veja no mapa</a>
            </InfosContainer>
        </RegiaoCardContainer>
    )
}