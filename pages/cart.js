import CartContainer from "../components/CartContainer";
import useCart from "@/components/hooks/useCart";
import { useIsFetching } from "react-query";
import useDeleteFromCart from "@/components/hooks/useDeleteFromCart";
import useUpdateQuantity from "@/components/hooks/useUpdateQuantity";
import Loading from "@/components/atoms/Loading";

//TODO add min heights for loading states for content shifting
function CartItem({ id, name, quantity, line_total, price, image }) {
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
    // TODO fixme- it says 'removed item' when this is called here would be better with name ( it was undefined how to fix)
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
  const { data: cartData, isLoading } = useCart();
  const isEmpty = cartData?.line_items?.length === 0;
  const isFetching = useIsFetching();
  //why is the stale data not showing
  // hmm when switching pages that cache key is not stored its gone...
  //s,aybe the SSG?

  //TODO
  //so also the empty cart look is bad pu tthis back in or something better would be good
  // if had the stale data but idk yet
  // if (isEmpty) {

  return (
    <main
      className={`max-w-6xl sm:w-10/12 mx-auto mt-40 mb-40 pb-16 pt-16 shadow-lg rounded-lg relative ${
        isLoading && " pb-64"
      }`}
    >
      <h1 className='text-4xl uppercase font-medium pl-10 pb-8'>Cart</h1>

      <hr className='hr-light mr-6 ml-6' />

      {/* TODO fix this it janks out when this way for fetching bc takes up space
but fi set to absolute it doesnt fit */}

      <div
        className={`absolute  left-2/4 -translate-x-2/4  ${
          isLoading && "pt-4"
        }`}
      >
        <Loading />
      </div>

      <div className='mx-auto w-60 pt-20 left-2/4 -translate-x-2/4 absolute'></div>
      <div className=''>
        {cartData?.line_items?.map((item) => (
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
        {cartData && <button class='btn capitalize'>Checkout</button>}
      </div>
    </main>
  );
}
