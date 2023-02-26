import Link from "next/link"
import { HeaderContainer, LinksMenu } from "./style"




export const Header = () => {
    return(
        <HeaderContainer> 
            <h1>
                <Link href="/">
                    KITNETS DO ELIO
                </Link>
            </h1>

            <span>
                <LinksMenu href="#kitnets">NOSSOS KITNETS</LinksMenu>
                <LinksMenu href="#regiao">A REGIÃO</LinksMenu>
                <LinksMenu href="#sobre">SOBRE NÓS</LinksMenu>
                {/* <LinksMenu> */}
                    <Link href="/formularioDeContato" as="contato">
                        CONTATO    
                    </Link>
                {/* </LinksMenu> */}
                
            </span>
        </HeaderContainer>
    )
}