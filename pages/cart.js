import CartItem from "@/components/molecules/CartItem";
import Footer from "@/components/organisms/Footer";
import useCart from "@/components/hooks/useCart";
import { useIsFetching } from "react-query";
import useDeleteFromCart from "@/components/hooks/useDeleteFromCart";
import useUpdateQuantity from "@/components/hooks/useUpdateQuantity";
import Loading from "@/components/atoms/Loading";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

function Cart({ id, name, quantity, line_total, price, image }) {
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
    <CartItem
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
  const router = useRouter();
  const { data: cartData, isLoading } = useCart();
  const isEmpty = cartData?.line_items?.length === 0;
  const isFetching = useIsFetching();

  return (
    <Layout
      title='Cart Yannal'
      description={"Cart page for Yannal Middle eastern restaurant."}
    >
      <div className='md:flex mt-40 mb-80 pb-16 pt-16 md:flex-row  justify-between md:pl-36 md:pr-36'>
        <main
          className={`max-w-6xl mx-auto md:mx-0 sm:w-3/4 rounded-lg relative ${
            isLoading && " pb-64"
          }`}
        >
          <h1 className='text-4xl capitalize md:text-5xl   font-light pl-10'>
            Cart
          </h1>

          <hr className='hr-light mr-6 ml-6 mt-6' />

          <div
            className={`absolute  left-2/4 -translate-x-2/4  ${
              isLoading && "pt-4"
            }`}
          >
            <Loading />
          </div>

          <div className='mx-auto  pt-20 left-2/4 -translate-x-2/4 absolute'></div>
          <div className=''>
            {cartData?.line_items?.map((item) => (
              <Cart key={item.id} {...item} />
            ))}
          </div>
        </main>
        {/* child two */}
        <div className='pr-10 rounded-lg pl-10 max-w-6xl mx-auto md:mx-0 max-h-96 md:w-1/4'>
          <h2 className='text-5xl md:text-5xl capitalize font-light  text-left md:block hidden'>
            Your Order:
          </h2>
          <hr className='hr-light mt-6 hidden md:block' />

          <p className='flex justify-between flex-row text-5xl md:text-4xl  mt-10'>
            <span className=' capitalize font-normal md:mr-28'>
              {cartData?.subtotal?.formatted_with_symbol && "Subtotal:"}
            </span>
            <span className='font-medium'>
              {cartData?.subtotal?.formatted_with_symbol || ""}{" "}
            </span>
          </p>

          {cartData?.total_items ? (
            <div className='btn-wrapper--1 mt-24'>
              <button
                onClick={() => router.push(cartData.hosted_checkout_url)}
                className='btn capitalize'
              >
                Checkout
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
