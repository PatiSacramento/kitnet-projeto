import Link from "next/link"
import { HeaderContainer, LinksMenu } from "./style"
import { List } from "phosphor-react"
import { Navbar } from "../Navbar"
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export const Header = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const [screenSize, setScreenSize] = useState("")

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 769px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    useEffect(() => {
        if (isDesktopOrLaptop) {
            setScreenSize("bg")
        } else if (isTabletOrMobile) {
            setScreenSize("sm")
        }

    }, [isDesktopOrLaptop, isTabletOrMobile])


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
                {screenSize === "sm" && <List size={30} onClick={openMenu} />}
                {screenSize === "sm" && openSideMenu && <Navbar isOpen={openSideMenu} openMenu={openMenu} />}
                {screenSize === "bg" && <>
                    <LinksMenu href="/#kitnets">NOSSAS KITNETS</LinksMenu>
                    <LinksMenu href="/#regiao">A REGIÃO</LinksMenu>
                    <LinksMenu href="/#sobre">SOBRE NÓS</LinksMenu>
                    <LinksMenu href="https://api.whatsapp.com/send?phone=5511944531303&text=Olá!%20Tenho%20interesse%20nas%20kitnets." target="_blank" rel="noreferrer">CONTATO</LinksMenu>
                </>}
            </span>
        </HeaderContainer >


    )
}