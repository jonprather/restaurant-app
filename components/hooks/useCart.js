import React from "react";
import { useQuery } from "react-query";
import commerce from "@/lib/commerce";

export default function useCart() {
  const getCart = async () => {
    const data = await commerce.cart.retrieve();
    return data;
  };
  //   SHOULD this be more granular ie cart/quantity or just get the full obj?
  // ie bc increment and decrement just change quantity
  //delete changes the whole cart in a sense bc removes an item
  //well regardless can still have one for fetching the whole cart
  const { data, isLoading } = useQuery(["cart"], getCart);

  return { data, isLoading };
}
