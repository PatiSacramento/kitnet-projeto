
import 'bootstrap/dist/css/bootstrap.css';
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
        return <>
        <Head>
          <title>KITUSP - Kitnets no Butantã</title>

          <meta name="description" content="Kitnets mobiliadas e moradias estudantis na região do Butantã, próxima à USP." />
          <meta name='keywords' content='kitnet, kitnets, kitnets mobiliadas, kitnet mobiliada, moradia estudantil, moraridas estudantis, USP, Butantã, kitnet Butantã, kitnets butantã, kitnet usp, kitnets usp, moradia usp, moradia butantã' />
          <meta name="robots" content='index, follow' />
          <link rel="canonical" href="https://kitusp.com.br" />

        </Head>
        <Component {...pageProps} />
      </>
  }
}


