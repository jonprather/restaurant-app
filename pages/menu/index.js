import React from "react";
import commerce from "../../lib/commerce";
import MenuPageTemplate from "../../components/MenuPageTemplate";
import { dehydrate, QueryClient, useQuery } from "react-query";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const queryClient = new QueryClient();
  // TODO figure out why this doesnt load data or delete as not needed
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

export default function IndexPage({ categories }) {
  return <MenuPageTemplate categories={categories} />;
}
