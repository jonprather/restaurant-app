import React from "react";
import commerce from "../../lib/commerce";
import MenuPageTemplate from "../../components/MenuPageTemplate";
import { dehydrate, QueryClient, useQuery } from "react-query";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const queryClient = new QueryClient();
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

export default function MenuCategoryPage({ categories }) {
  return <MenuPageTemplate categories={categories} />;
}
