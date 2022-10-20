import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { createFormattedPriceObj } from "@/util/cartMutationHelpers";

export default function useDeleteFromCart() {
  const queryClient = useQueryClient();
  async function deleteItem(id) {
    const removeItem = await commerce.cart.remove(id);
    return removeItem;
  }

  const { mutate } = useMutation(deleteItem, {
    onMutate: async (lineItemId) => {
      //Optimistic Updating of subtotal and line_items on main cart object
      await queryClient.cancelQueries(["cart"]);
      const previous = queryClient.getQueryData(["cart"]);

      let updatedCartData = Object.assign({}, previous);

      const [itemToDelete] = updatedCartData.line_items.filter(
        (item) => item.id === lineItemId
      );
      updatedCartData.line_items = updatedCartData.line_items.filter((item) => {
        return item.id !== lineItemId;
      });

      updatedCartData.total_items =
        updatedCartData.total_items - itemToDelete.quantity;
      updatedCartData.total_unique_items =
        updatedCartData.total_unique_items - 1;

      const sum =
        updatedCartData?.line_items
          ?.reduce((acc, item) => {
            return acc + +item.line_total.raw;
          }, 0)
          .toFixed(2) ?? 0;

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
      console.log("PRODUCT", product);
      toast.success(`Removed Item!`, {
        toastId: "Removed" + product.product_id,
      });
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return mutate;
}
