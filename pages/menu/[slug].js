import React from "react";
import MenuItem from "../../components/MenuItem";
import Link from "next/link";
import CategoryList from "../../components/CategoryList";
import MenuCategories from "../../components/menuCategories";
import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";
import MenuHeader from "../../components/MenuHeader";
import MenuPageTemplate from "../../components/MenuPageTemplate";

export async function getStaticProps({ params }) {
  const { slug } = params;

  // const category = await commerce.categories.retrieve(slug, {
  //   type: "slug",
  // });
  const { data: categories } = await commerce.categories.list();
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
