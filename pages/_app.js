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
// The inital data appraoch seems fine
//jus tneed to pass the initail data when calling such data
// with dehydration approach there is a enw queryclient for each page
//so thus cant hold data between pages right?
//or will that other client have it...
//TODO settle on one pattern here im mixing inital data and dehydrated patterns
//TODO handle the nested errors when comes back from BE liek when was a bad req
// it had nested errors and i showed obj obj
export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
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
      })
  );
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
          <Layout title='Yannal'>
            <Component {...pageProps} />
            <ToastContainer position='bottom-left' />
          </Layout>
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
