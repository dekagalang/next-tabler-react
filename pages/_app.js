// import App from 'next/app'
import "tabler-react/dist/Tabler.css";
import "../src/css/c3jscustom.css";
import "../src/css/index.css";

// import App, { Container } from 'next/app';
import MasterProvider from '../providers/master'
import SessionProvider from '../providers/session'
import App from 'next/app';
import Cookies from 'universal-cookie'
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
  static async getInitialProps({ ctx }) {
    let pageProps = {};
    if (ctx.res) {
        const cookies = new Cookies(ctx.req.headers.cookie);
        // console.log(cookies)
        if (
            ctx.req.url == "/" &&
            cookies.get("dock_authorization") &&
            cookies.get("dock_authorization").length > 0
        ) {
            ctx.res.writeHead(302, {
                Location: process.env.ASSET_PREFIX+"home-page",
            });
            ctx.res.end();
        }
        else if (
            ctx.req.url != "/" &&
            !cookies.get("dock_authorization")
        ) {
            ctx.res.writeHead(302, {
                Location: "/",
            });
            ctx.res.end();
        } 
        // else if (
        //     ctx.req.url != "/user" &&
        //     cookies.get("zupper_username") == "admin" &&
        //     cookies.get("dock_authorization") &&
        //     cookies.get("dock_authorization").length > 0
        // ) {
        //     ctx.res.writeHead(302, {
        //         Location: process.env.ASSET_PREFIX+"user",
        //     });
        //     ctx.res.end();
        // }
    }
    // if (Component.getInitialProps) {
    //     pageProps = await Component.getInitialProps(ctx);
    // }
    return { pageProps };
  }
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
