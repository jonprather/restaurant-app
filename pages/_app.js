import { CartProvider } from "../context/cart";
import React from "react";
// import { StoreProvider } from "../components/Store";
//need to change the path here
//instead of the cart prodiver he uses the store it has more types
import "../styles/global.scss";
import Layout from "../components/Layout";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yannal</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='Kebab Restaurant' />
        <meta name='keywords' content='HTML, CSS, JavaScript, food' />
        <meta name='author' content='Jon' />
        <link
          href='https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@800&family=Poppins:wght@300;400;500;600;700&family=DM+Sans:wght@700&display=swap'
          rel='stylesheet'
        />
        <script src='https://use.fontawesome.com/30aff2d8c8.js'></script>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Layout title='Yannal'>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </Layout>
    </>
  );
}
