import Image from "next/image"
import { BannerContainer } from "./style"

export const Banner = () => {
  return (
    <BannerContainer>
      <Image src={"/images/imagens-kitnets/2/img_2.jpg"} alt="" width={600}
      height={800}/>
    </BannerContainer>
  )
}
