import { KitnetContainer } from "./style"
import Image from "next/image";
import Link from "next/link";

export const KitnetCard = (props: { imgPrincipal: any, id: string, name: string } ) => {
    return (
        <Link href={`/kitnet${props.id}`} as={props.id} >
            <KitnetContainer className="grow">
                <Image src={props.imgPrincipal} width={250} height={300} alt="" quality={100}/>
                <p>{props.name.toUpperCase()}</p>
            </KitnetContainer>
        </Link>
    )
}