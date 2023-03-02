import Link from "next/link"
import { HeaderContainer, LinksMenu } from "./style"
import { List } from "phosphor-react"
import { Navbar } from "../Navbar"
import { useEffect, useState } from 'react'


export const Header = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        window.addEventListener("resize", (event) => {
           setWindowWidth(window.screen.width) 
        })
        window.removeEventListener("resize", (event) => {
            setWindowWidth(window.screen.width)
        })
        
    }, [])
   
    
   function windowSize(windowWidth: number) {
        if(windowWidth <= 768){
            return  <List size={30} onClick={openMenu}/> 
        } else {
            if (openSideMenu) {
                return <Navbar isOpen={openSideMenu} openMenu={setOpenSideMenu}/> 
            } else {
                return (
                    <>
                        <LinksMenu href="/#kitnets">NOSSAS KITNETS</LinksMenu>
                        <LinksMenu href="/#regiao">A REGIÃO</LinksMenu>
                        <LinksMenu href="/#sobre">SOBRE NÓS</LinksMenu>
                                
                        <LinksMenu href="https://api.whatsapp.com/send?phone=5531999769422&text=Olá!%20Tenho%20interesse%20nas%20kitnets." target="_blank" rel="noreferrer">CONTATO</LinksMenu>
                    </>  
                )
            }
        }
   }

  
    function openMenu() {
        setOpenSideMenu(!openSideMenu)
    }



    return (
        <HeaderContainer> 
            <h1>
                <Link href="/">
                    KITUSP BUTANTÃ
                </Link>
            </h1>
            <span>
                {windowSize(windowWidth)}                  
            </span>

        </HeaderContainer >
    )
}