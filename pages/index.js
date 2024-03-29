import React from "react";
import Header from "@/components/Header";
import About from "@/components/organisms/About";
import PopularProducts from "@/components/organisms/PopularProducts";
import Testomonials from "@/components/organisms/Testomonials";
import Footer from "@/components/organisms/Footer";
import Newsletter from "@/components/organisms//Newsletter";
import commerce from "@/lib/commerce";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  try {
    const { data: categories } = await commerce.categories.list();

    const queryClient = new QueryClient();
    // throw new Error();
    const getProducts = async () => {
      const data = await commerce.products.list();
      return data;
    };
    await queryClient.prefetchQuery(["products"], getProducts);

    return {
      props: {
        categories,
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 60,
    };
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: "/",
        statusCode: 307,
      },
    };
  }
}
// TODO go through and check for sematic html usage
export default function IndexPage() {
  return (
    <Layout
      title='Yannal Home Page'
      description={"Landing page for Yannal Middle eastern restaurant."}
    >
      <Header />
      <PopularProducts />
      <About />
      <Testomonials />
      <Newsletter />
      <Footer classNames='pt-52' />
    </Layout>
  );
}
