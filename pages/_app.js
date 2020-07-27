// import App from 'next/app'
import "tabler-react/dist/Tabler.css";
import "../src/css/index.css";
import "../src/css/c3jscustom.css";

// import App, { Container } from 'next/app';
import MasterProvider from '../providers/master'
import SessionProvider from '../providers/session'
import App from 'next/app';
// import React from 'react';
import Router from 'next/router'
// import withReactRouter from '../next/with-react-router';

// Router.events.on("routeChangeStart", url => {
Router.events.on("routeChangeStart", () => {
  // setiap kali pindah halaman fungsi ini berjalan
  // buat cookie
  // console.log(url)
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    // console.log(process.env.ASSET_PREFIX)
    return (
      <MasterProvider>
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </MasterProvider>
    );
  }
}

export default MyApp;
