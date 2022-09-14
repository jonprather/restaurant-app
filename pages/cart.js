import { useCartDispatch, useCartState } from "../context/cart";
// TODO style cart
//TODO add functionality...
import commerce from "../lib/commerce";
import CartContainer from "../components/CartContainer";
import useCart from "@/components/hooks/useCart";
import { useIsFetching } from "react-query";
import Loading from "@/components/atoms/Loading";
import useDeleteFromCart from "@/components/hooks/useDeleteFromCart";
import useUpdateQuantity from "@/components/hooks/useUpdateQuantity";

//TODO add min heights for loading states for content shifting
function CartItem({ id, name, quantity, line_total, price, image }) {
  const { setCart } = useCartDispatch();
  // const handleUpdateCart = ({ cart }) => setCart(cart);
  const handleQuantityUpdate = useUpdateQuantity();

  const removeItem = useDeleteFromCart();
  const deleteItem = () => {
    let confirmDelete = confirm(`Are you sure you want to remove ${name}?`);
    if (!confirmDelete) return;
    removeItem(id);
  };

  const decrementQuantity = () => {
    quantity > 1
      ? handleQuantityUpdate({ id, quantity: quantity - 1 })
      : deleteItem(id);
    // TODO fixme- it says 'removed undefined' when this is called here
  };
  const incrementQuantity = () => {
    handleQuantityUpdate({ id, quantity: quantity + 1 });
  };

  return (
    <CartContainer
      name={name}
      price={price.formatted_with_symbol}
      image={image?.url}
      quantity={quantity}
      line_total={line_total.formatted_with_symbol}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
      removeItem={deleteItem}
    />
  );
}

export default function CartPage() {
  const cartData = useCart();
  const isEmpty = cartData?.line_items?.length === 0;
  const isFetching = useIsFetching();
  //why is the stale data not showing
  // hmm when switching pages that cache key is not stored its gone...
  //s,aybe the SSG?

  //TODO fix the loadign spinner hanging off bottom of empty cart UI when cart loading
  //so also the empty cart look is bad pu tthis back in or something better would be good
  // if had the stale data but idk yet
  // if (isEmpty) {
  //   // TODO this triggers after is fetching anyway
  //   return (
  //     <h3 className='p-40 font-medium capitalize text-4xl text-center min-h-screen'>
  //       Your cart is empty
  //     </h3>
  //   );
  // }

  return (
    <main className='max-w-6xl sm:w-10/12 mx-auto mt-40 mb-40 pb-16 pt-16 shadow-lg rounded-lg relative'>
      <h1 className='text-4xl uppercase font-medium pl-10 pb-8'>Cart</h1>

      <hr className='hr-light mr-6 ml-6' />
      <div className='mx-auto w-60 pt-20 left-2/4 -translate-x-2/4 absolute'>
        <Loading color='black' />
      </div>
      <div className=''>
        {cartData?.line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <h2 className='flex justify-end text-3xl pt-10 pr-10'>
        <span className='capitalize font-normal mr-8'>
          {cartData?.subtotal?.formatted_with_symbol && "Sub total:"}
        </span>
        <span className='font-medium'>
          {cartData?.subtotal?.formatted_with_symbol}{" "}
        </span>
      </h2>
      {/* TODO add nice looking button here like on home page */}
      <div class='btn-wrapper--1 w-0 mx-auto mt-20'>
        <button class='btn '>Checkout</button>
        {/* TODO add kebabs to BE then add the add to cart button functionality here for it */}
      </div>
    </main>
  );
}
