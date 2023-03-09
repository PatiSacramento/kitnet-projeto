import { Banner } from '@/components/Banner'
import { Regiao } from '@/components/Regiao'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Kitnets } from '@/components/Kitnets'
import { Sobre } from '@/components/Sobre'
import Head from 'next/head'


export default function HomePage() {
 

  return (
    <>
      <Head>
          <title>KITUSP - Kitnets no Butantã</title>
          <meta name="description" content="Kitnets mobiliadas e moradias estudantis na região do Butantã, próxima à USP." />
          <meta name='keywords' content='kitnet, kitnets, kitnets mobiliadas, kitnet mobiliada, moradia estudantil, moraridas estudantis, USP, Butantã, kitnet Butantã, kitnets butantã, kitnet usp, kitnets usp, moradia usp, moradia butantã' />
      </Head>
      <Header />
      <Banner />
      <Kitnets />
      <Regiao />
      <Sobre />
      <Footer />
    </>
  )
}
