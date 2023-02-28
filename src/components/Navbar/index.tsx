import { LinksContainer, LinksMenu } from "./style"
import Link from "next/link"
import { X } from 'phosphor-react'

export const Navbar = (props : { isOpen : boolean, openMenu : any}) => {

  return (
    
      <LinksContainer>
        <span>
          <X size={32} weight="fill" onClick={() => props.openMenu(!props.isOpen)}/>
        </span>
        
        <LinksMenu href="/#kitnets">NOSSAS KITNETS</LinksMenu>
        <LinksMenu href="/#regiao">A REGIÃO</LinksMenu>
        <LinksMenu href="/#sobre">SOBRE NÓS</LinksMenu>
        
        <Link href="/formularioDeContato" as="contato">
          CONTATO
        </Link>
        
      </LinksContainer>

   

  )
}