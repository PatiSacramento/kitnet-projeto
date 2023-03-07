import { Banner } from '@/components/Banner'
import { Regiao } from '@/components/Regiao'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Kitnets } from '@/components/Kitnets'
import { Sobre } from '@/components/Sobre'
import { useMediaQuery } from 'react-responsive'



export default function HomePage() {
  

  return (
    <>
      <Header />
      <Banner />
      <Kitnets />
      <Regiao />
      <Sobre />
      <Footer />
    </>
  )
}
