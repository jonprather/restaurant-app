import React, { useEffect } from "react";
import commerce from "../../lib/commerce";
import MenuPageTemplate from "../../components/MenuPageTemplate";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Loading from "@/components/atoms/Loading";
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

export default function IndexPage({ categories }) {
  const router = useRouter();
  useEffect(() => {
    if (router) {
      router.push("menu/all");
    }
  }, [router]);

  return (
    <Layout
      title='Yannal'
      description={"Yannal menu items. Middle eastern delicacies."}
    >
      <MenuPageTemplate
        categories={categories}
        loader={() => <Loading isLoading />}
      ></MenuPageTemplate>
    </Layout>
  );
}
