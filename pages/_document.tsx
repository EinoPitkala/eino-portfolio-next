import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
