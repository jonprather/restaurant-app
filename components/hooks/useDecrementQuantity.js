import React from "react";
import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
//note not using error mesgs from Chec
export default function useIncrementQuantity() {
  const queryClient = useQueryClient();

  async function incrementQuantity({ id, quantity }) {
    const item = await commerce.cart.update(id, { quantity: quantity + 1 });

    return item;
  }

  const { mutate } = useMutation(incrementQuantity, {
    onSuccess: async (product) => {
      toast.success(`incrementQuantity ${product.product_name}!`, {
        toastId: "incrementQuantity" + product.product_id,
      });
      // Could make more specific to jus tthis cart item right via
      //query key which includes ids?
      queryClient.invalidateQueries(["cart"], {
        refetchActive: true,
      });
    },
  });

  return mutate;
}
