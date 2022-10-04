import React from "react";
import { useQuery } from "react-query";
import commerce from "@/lib/commerce";
import { useRouter } from "next/router";
import { useCategoryStore } from "@/store/index.js";

export default function useProducts(initialSSGProps) {
  const router = useRouter();
  const activeCategory = useCategoryStore((state) => state.activeCategory);

  const getProducts = async () => {
    const data = await commerce.products.list();
    return data;
  };

  const filterMenuItems = React.useCallback(
    (products) => {
      const vals = products?.data || products;
      const filteredProducts = vals.filter((ele) => {
        return ele.categories.some(
          (category) =>
            category.slug.toLowerCase() === activeCategory.toLowerCase()
        );
      });

      return filteredProducts;
    },
    [router?.query?.slug, activeCategory]
    //TODO check the ssg functionality with RQ
    //change RQ defualt settings esp for cart to update more often ie on refresh refocus
  );
  const { data: products = [] } = useQuery(["products"], getProducts, {
    initialData: initialSSGProps, //im not sure about this
    select: filterMenuItems,
  });

  return products?.data || products;
}
