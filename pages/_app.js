import { CartProvider } from "../context/cart";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Hydrate } from "react-query/hydration";
// import { StoreProvider } from "../components/Store";
//need to change the path here
//instead of the cart prodiver he uses the store it has more types
import "../styles/global.scss";
import Layout from "../components/Layout";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
      onError: (error) =>
        toast.error(`Something Went Wrong: ${error}`, {
          toastId: "1-" + error.message,
        }),
    },
    //TODO instead of printing status codes print something more user friendly
    mutations: {
      onError: (error) =>
        toast.error(`Something Went Wrong: ${error}`, {
          toastId: "2-" + error.message,
        }),
    },
  },
});
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
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CartProvider>
            <Layout title='Yannal'>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </CartProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
