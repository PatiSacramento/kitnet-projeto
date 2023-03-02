import Link from "next/link"
import { HeaderContainer, LinksMenu } from "./style"
import { List } from "phosphor-react"
import { Navbar } from "../Navbar"
import { useEffect, useState } from 'react'
import MediaQuery from "react-responsive"


export const Header = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)

  
    function openMenu() {
        setOpenSideMenu(!openSideMenu)
    }

    function navbarOrMenu() {
        if (openSideMenu){
            return <Navbar isOpen={openSideMenu} openMenu={openMenu}/>
        } else {
            return (  
                <MediaQuery minWidth={769}>
                    <LinksMenu href="/#kitnets">NOSSAS KITNETS</LinksMenu>
                    <LinksMenu href="/#regiao">A REGIÃO</LinksMenu>
                    <LinksMenu href="/#sobre">SOBRE NÓS</LinksMenu>
                    <LinksMenu href="https://api.whatsapp.com/send?phone=5531999769422&text=Olá!%20Tenho%20interesse%20nas%20kitnets." target="_blank" rel="noreferrer">CONTATO</LinksMenu>
                </MediaQuery>
            )
        }
    }





    return (
        <HeaderContainer> 
            <h1>
                <Link href="/">
                    KITUSP BUTANTÃ
                </Link>
            </h1>
            <span>
                <MediaQuery maxWidth={768}>
                  <List size={30} onClick={openMenu}/>  
                </MediaQuery>

                {navbarOrMenu()}
            </span>                


        </HeaderContainer >
    )
}