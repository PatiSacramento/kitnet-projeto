import { KitnetContainer } from "./style"
import Image from "next/image";
import Link from "next/link";

export const KitnetCard = (props: { imgPrincipal: any, id: string, name: string } ) => {
    return (
        <Link href={`/kitnet${props.id}`} as={`kitnet/butanta/${props.id}`} >
            <KitnetContainer className="grow">
                <Image src={props.imgPrincipal} alt="" quality={100}/>
                <p>{props.name.toUpperCase()}</p>
            </KitnetContainer>
        </Link>
    )
}