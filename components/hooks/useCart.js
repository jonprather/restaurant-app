import React from "react";
import { useQuery } from "react-query";
import commerce from "@/lib/commerce";

export default function useCart() {
  const getCart = () => {
    const data = commerce.cart.retrieve();
    return data;
  };
  const { data } = useQuery(["cart"], getCart, {
    onSuccess: console.log("data", data),
  });

  return data;
}
