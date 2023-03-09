import { GlobalStyle } from '@/styles/global'
import HomePage from './homepage'
import styled from 'styled-components'
import Head from 'next/head' 

const PageContainer = styled.div`
  width: 100vw;

`

export default function Home() {

  return (
    <div>
      <Head>
        <title>KITUSP - Kitnets no Butantã</title>
        <meta name="description" content="Kitnets mobiliadas e moradias estudantis na região do Butantã, próxima à USP." />
        <meta name='keywords' content='kitnet, kitnets, kitnets mobiliadas, kitnet mobiliada, moradia estudantil, moraridas estudantis, USP, Butantã, kitnet Butantã, kitnets butantã, kitnet usp, kitnets usp, moradia usp, moradia butantã' />
      </Head>

      <PageContainer>

        <GlobalStyle />
        <HomePage />
      </PageContainer>
    </div>
  )
}
