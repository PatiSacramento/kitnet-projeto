import { Banner } from '@/components/Banner'
import { Regiao } from '@/components/Regiao'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Kitnets } from '@/components/Kitnets'
import { Sobre } from '@/components/Sobre'
import OffcanvasExample from '@/components/Navbar'


export default function HomePage() {
  return (
    <>
      <Header />
     {/*  <OffcanvasExample /> */}
      <Banner />
      <Kitnets />
      <Regiao />
      <Sobre />
      <Footer />
    </>
  )
}
