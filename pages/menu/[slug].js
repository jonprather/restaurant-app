import React from "react";
import commerce from "../../lib/commerce";
import MenuPageTemplate from "../../components/MenuPageTemplate";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data: categories } = await commerce.categories.list();
  //here is the main difference between index and slug
  //this gets data based on filtering by slug
  let { data: products } = await commerce.products.list({
    category_slug: slug,
  });
  if (!products) products = null;
  return {
    props: {
      categories,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function MenuCategoryPage({ categories, products = [] }) {
  return <MenuPageTemplate categories={categories} products={products} />;
}
