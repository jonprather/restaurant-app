import React from "react";
import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";

export default function useAddToCart() {
  async function addItem(id) {
    const response = await commerce.cart.add(id, 1);
    // commerce.cart.add(id, 1).then((response) => {
    //   commerce.cart.contents().then((items) => response);
    //so can return the response here perhpas
    // maybe can pass that in onSuccess to set queryClientCache
    console.log("Response in addItem mutations", response);
    return response;
  }
  //   Could use this data to set the cache
  //or just use invalidate queries here - i think i will have to invalidate as well right?
  //also dont forget to toast onSuccess
  // hmm idk how to get access to product below bc async

  const { mutate } = useMutation(addItem, {
    onSuccess: async (product) => {
      console.log("product in onSUc", product);
      toast.success(`Added ${product.product_name}!`, {
        toastId: "added" + product.product_id,
      });
    },
  });

  return mutate;
}

//TODO ok this works but do i need to invalidate queries or anything it seems to work as it is
// also would be cool if there were stale data to show in cart before refresh .. or atlest loader....
//Then next tackle the other card crud methods
//have C,R just need the U fro INC or decr  then Delete