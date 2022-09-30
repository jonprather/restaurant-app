import React from "react";

import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
}
// TODO fix categories to be mor ehelpful and reflective of categories
// based on styles or types like entree vs dessert vs appetizer
export default function CategoriesPage({ categories }) {
  return (
    <>
      <h3 className='text-4xl uppercase'>Categories</h3>
      <CategoryList categories={categories} />
    </>
  );
}
