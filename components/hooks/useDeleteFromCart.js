import React from "react";
import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
export default function useDeleteFromCart() {
  const queryClient = useQueryClient();
  async function deleteItem(id) {
    const removeItem = await commerce.cart.remove(id);
    console.log("removeItem in removeItem mutations", removeItem);
    return removeItem;
  }

  const { mutate } = useMutation(deleteItem, {
    onSuccess: async (product) => {
      console.log("deleteItem in onSUc", product);
      toast.success(`Removed ${product.product_name}!`, {
        toastId: "Removed" + product.product_id,
      });
      queryClient.invalidateQueries(["cart"], {
        refetchActive: true,
      });
    },
  });

  return mutate;
}

//TODO ok this works but do i need to invalidate queries or anything it seems to work as it is
// also would be cool if there were stale data to show in cart before refresh .. or atlest loader....
//Then next tackle the other card crud methods
//have C,R just need the U fro INC or decr  then Delete
