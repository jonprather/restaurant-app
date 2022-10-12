import React from "react";

import commerce from "../lib/commerce";
import CategoryList from "../components/molecules/CategoryList";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}

export default function CategoriesPage({ categories }) {
  return (
    <>
      <h3 className='text-4xl uppercase'>Categories</h3>
      <CategoryList categories={categories} />
    </>
  );
}
