import React from "react";
import Header from "@/components/Header";
import About from "@/components/organisms/About";
import PopularProducts from "@/components/organisms/PopularProducts";
import Testomonials from "@/components/organisms/Testomonials";

import Newsletter from "@/components/organisms//Newsletter";
import commerce from "@/lib/commerce";

// shit lags wtf how do i fix it lagging on dom updates...
export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
    // time: 1000,////????
  };
}

export default function IndexPage({ products }) {
  // { merchant, categories, products }
  return (
    <>
      <Header />
      <PopularProducts products={products} />
      <About />
      <Testomonials />
      <Newsletter />
    </>
  );
}
