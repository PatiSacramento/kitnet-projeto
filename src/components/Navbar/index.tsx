import { LinksContainer, LinksMenu } from "./style"
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
        
        <LinksMenu href="https://api.whatsapp.com/send?phone=5531999769422&text=Olá!%20Tenho%20interesse%20nas%20kitnets." target="_blank" rel="noreferrer">CONTATO</LinksMenu>
        
      </LinksContainer>

   

  )
}