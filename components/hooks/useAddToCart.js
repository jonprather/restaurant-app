import React from "react";
import { useMutation } from "react-query";
import commerce from "@/lib/commerce";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

const GoToCartLink = (product) => {
  `Added ${product.product_name}!`;
  return (
    <div className='text-2xl p-2 '>
      <span className='text-2xl'>{`Added ${product.product_name}!`}</span>
      <a href='/cart' className='p-4 font-medium text-green-800 '>
        {" "}
        (Go To Cart?)
      </a>
    </div>
  );
};
export default function useAddToCart() {
  const queryClient = useQueryClient();
  async function addItem(id) {
    const response = await commerce.cart.add(id, 1);

    return response;
  }

  //   Could use this data to set the cache
  //or just use invalidate queries here - i think i will have to invalidate as well right?
  //also dont forget to toast onSuccess
  // hmm idk how to get access to product below bc async

  const { mutate } = useMutation(addItem, {
    onSuccess: async (product) => {
      toast.success(() => GoToCartLink(product));
      //   `Added ${product.product_name}! ${(<a href='/cart'>Go TO cart </a>)}`,
      //   {
      //     toastId: "added" + product.product_id,
      //   }
      // );
      queryClient.invalidateQueries(["cart"]);
    },
    onMutate: async (cartItem) => {
      console.log("CART ITEM ADDED", cartItem);
      // see if can auto increment the value shownn for total items
      //prob is all i get back is an id so how do i use that id
      //well all i need to do is access teh cart ccache and add one right????
      //yup so go into toggle or something with Ou and copy the ccache obj

      await queryClient.cancelQueries(["cart"]);
      const previous = queryClient.getQueryData(["cart"]);
      const updatedCartData = Object.assign({}, previous);

      updatedCartData.total_items = updatedCartData.total_items + 1;

      queryClient.setQueryData(["cart"], updatedCartData);
      return { previous, updatedCartData };
    },
  });

  return mutate;
}

//TODO ok this works but do i need to invalidate queries or anything it seems to work as it is
// also would be cool if there were stale data to show in cart before refresh .. or atlest loader....
