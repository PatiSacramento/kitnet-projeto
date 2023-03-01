import Image from "next/image"
import { BannerContainer } from "./style"
import img_fundo from "../../assets/imagens-kitnets/2/img_2.jpg";



export const Banner = () => {
    return(
        <BannerContainer>
            <Image src={img_fundo} alt="" />
        </BannerContainer>
    )
}