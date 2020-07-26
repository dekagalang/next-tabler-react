import Document, { Html, Head, Main, NextScript } from 'next/document'

// import { ServerStyleSheet } from 'styled-components';

// async function middleware({req, res}) {
async function middleware() {
    // do something with `req` / `res`
    // console.log('tes')
}

class MyDocument extends Document {
//     static getInitialProps({ renderPage }) {
//         // Step 1: Create an instance of ServerStyleSheet
//         const sheet = new ServerStyleSheet();

//         // Step 2: Retrieve styles from components in the page
//         const page = renderPage((App) => (props) =>
//         sheet.collectStyles(<App {...props} />),
//     );

//     // Step 3: Extract the styles as <style> tags
//     const styleTags = sheet.getStyleElement();

//     // Step 4: Pass styleTags as a prop
//     return { ...page, styleTags };
// }
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    await middleware(ctx)
    // console.log(initialProps)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument