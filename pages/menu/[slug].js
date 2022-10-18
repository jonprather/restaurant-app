import React from "react";
import commerce from "../../lib/commerce";
import MenuPageTemplate from "../../components/MenuPageTemplate";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "@/components/Layout";

export async function getStaticProps() {
  try {
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
  return (
    <Layout
      title='Menu Yannal'
      description={"Yannal menu items. Middle eastern delicacies."}
    >
      <MenuPageTemplate categories={categories} />
    </Layout>
  );
}
