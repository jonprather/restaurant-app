import React from "react";
import { useQuery } from "react-query";
import commerce from "@/lib/commerce";
import { useRouter } from "next/router";

export default function useProducts(initialSSGProps) {
  const router = useRouter();

  console.log("INIT", initialSSGProps);
  //   queryClient.setQueryData(['todos'], todos) could also use this...
  //   hmm ok so data is there but not stale so it doesn trefresh yet this initalDat ais not used when fresh?
  const getProducts = async () => {
    const data = await commerce.products.list();
    return data;
  };

  const filterMenuItems = React.useCallback(
    (products) => {
      if (!router?.query?.slug) return products;
      const vals = products?.data || products;
      const filteredProducts = products.filter((ele) => {
        return ele.categories.some(
          (category) => category.slug === router?.query?.slug
        );
      });
      //   SO HOW DO I GET TO THE NESTED CATEGORY DATA IN THIS FILTER????
      //FLATMAP IT OR SOEMTHING IDK
      return filteredProducts;
    },
    [router?.query?.slug]
    //TODO refactor- is this slow to wait on the router should i find a way to  use state?
  );
  const { data: products = [] } = useQuery(["products"], getProducts, {
    initialData: initialSSGProps,
    select: filterMenuItems,
  });

  return products?.data || products;
}
//handles mismismatch between the data structures one is nested one isnt
