import React from "react";
import Link from "next/link";

import commerce from "../../lib/commerce";

import MenuPageTemplate from "../../components/MenuPageTemplate";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  let { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ categories = [], products }) {
  return <MenuPageTemplate categories={categories} products={products} />;
}
