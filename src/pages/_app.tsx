
import 'bootstrap/dist/css/bootstrap.css';
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
        return <>
        <Head>
          <title>KITUSP</title>
        </Head>
        <Component {...pageProps} />
      </>
  }
}


