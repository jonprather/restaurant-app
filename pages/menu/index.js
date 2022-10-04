import React from "react";

import commerce from "../../lib/commerce";

import MenuPageTemplate from "../../components/MenuPageTemplate";

export async function getStaticProps() {
  let { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories = [], products }) {
  return <MenuPageTemplate categories={categories} products={products} />;
}
