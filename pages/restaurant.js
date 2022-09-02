import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import PopularProducts from "../components/PopularProducts";
import Newsletter from "../components/Newsletter";
import Layout from "../components/Layout";

import commerce from "../lib/commerce";

export default function restuarant({ merchant, categories, products }) {
  return (
    <>
      {/* <div>HI</div> */}
      <Layout title='Yannal'>
        <Header />
        <PopularProducts products={products} />
        <About />
        <Newsletter />
      </Layout>
    </>
  );
}

//so if followed same pattern as index i could getStatic props to get the commrce data via some api calls
//then pass that down to product list component, but in this case it will be popularProducst, and then pass that down
// to the card level which will be menu item..

export async function getStaticProps() {
  try {
    const merchant = await commerce.merchants.about();
    const { data: categories } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();

    return {
      props: {
        merchant,
        categories,
        products,
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
//most still need changes to make HTML right
//and js right and use subcomponet for propducts so will need one more compone