import React from "react";
import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
//note not using error mesgs from Chec
export default function useUpdateQuantity() {
  const queryClient = useQueryClient();

  async function handleQuantityUpdate({ id, quantity }) {
    const item = await commerce.cart.update(id, { quantity });
    return item;
  }

  const { mutate } = useMutation(handleQuantityUpdate, {
    onSuccess: async (product) => {
      // const text = isIncrement ? "Increased" : "decresed";
      // toast.success(`${text} qauntity for ${product.product_name}!`, {
      //   toastId: text + product.product_id,
      // });
      // Could make more specific to jus tthis cart item right via
      //query key which includes ids?
      queryClient.invalidateQueries(["cart"], {
        refetchActive: true,
      });
    },
  });

  return mutate;
}
//COULD make this optimistic updates or atlest setQuery CACHE
// this works but is pretty slow so maybe optimistic updates would be better

//TODO ok this works but do i need to invalidate queries or anything it seems to work as it is
