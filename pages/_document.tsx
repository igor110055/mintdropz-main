import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
          <link rel="shortcut icon" href="/Assets/logo.png" />
          <title>Mintdropz - Launch Your Own Web 3.0 Platform</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </body>
      </Html>
    );
  }
}
