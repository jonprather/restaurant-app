import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
//note not using error mesgs from Chec
//Could move this to utility script file but its only used here
import { createFormattedPriceObj } from "@/util/cartMutationHelpers";

export default function useUpdateQuantity() {
  const queryClient = useQueryClient();

  async function handleQuantityUpdate({ id, quantity }) {
    const item = await commerce.cart.update(id, { quantity });
    return item;
  }

  const { mutate } = useMutation(handleQuantityUpdate, {
    onMutate: async (lineItem) => {
      //Optimistic Updating of quantity, line_total and subtotal
      await queryClient.cancelQueries(["cart"]);
      const previous = queryClient.getQueryData(["cart"]);
      const updatedCartData = Object.assign({}, previous);
      const [itemToUpdate] = updatedCartData.line_items.filter(
        (item) => item.id === lineItem.id
      );
      //so its mutating the reference but since its a top level property and I copied the obj its cool
      itemToUpdate.quantity = lineItem.quantity;

      const rawPrice = (itemToUpdate.price.raw * itemToUpdate.quantity).toFixed(
        2
      );

      const lineTotalPriceFormat = createFormattedPriceObj(rawPrice);
      itemToUpdate.line_total = lineTotalPriceFormat;

      let sum = updatedCartData.line_items
        .reduce((acc, item) => {
          return acc + +item.line_total.raw;
        }, 0)
        .toFixed(2);

      const subTotalPriceFormat = createFormattedPriceObj(sum);
      updatedCartData.subtotal = subTotalPriceFormat;

      queryClient.setQueryData(["cart"], updatedCartData);
      return { previous, updatedCartData };
    },
    onError: (err, updatedCartData, context) => {
      toast.error(err.message, { toastId: err.message });
      queryClient.setQueryData(["cart"], context.previous);
    },
    onSuccess: async (product) => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return mutate;
}
