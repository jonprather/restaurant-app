import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

import PopularProducts from "../components/PopularProducts";
import Newsletter from "../components/Newsletter";

//
import commerce from "../lib/commerce";

export default function restuarant({ merchant, categories, products }) {
  return (
    <>
      <Header />

      {/* POpular products */}
      <PopularProducts products={products} />
      {/* ABOUT */}
      <About />
      <Newsletter />
      {/* Newsletter */}
      {/* {{-- \\\\\\\\\\\\\\\\\ FOOTER ////////////// --}} */}
      {/* <x-footer /> */}
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
