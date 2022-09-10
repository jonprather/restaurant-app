import { useCartDispatch, useCartState } from "../context/cart";
// TODO style cart
//TODO add functionality...
import commerce from "../lib/commerce";
import CartContainer from "../components/CartContainer";
//TODO add min heights for loading states for content shifting
function CartItem({ id, name, quantity, line_total, price, image }) {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => setCart(cart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
      : removeItem();
  };

  const incrementQuantity = () =>
    commerce.cart.update(id, { quantity: quantity + 1 }).then(handleUpdateCart);

  return (
    <CartContainer
      name={name}
      price={price.formatted_with_symbol}
      image={image?.url}
      quantity={quantity}
      line_total={line_total.formatted_with_symbol}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
      removeItem={removeItem}
    />
  );
}

export default function CartPage() {
  const { line_items, subtotal } = useCartState();

  const isEmpty = line_items.length === 0;

  if (isEmpty)
    return (
      <h1 className='p-40 font-medium capitalize text-4xl text-center min-h-screen'>
        Your cart is empty
      </h1>
    );
  return (
    <main className='max-w-6xl sm:w-10/12 mx-auto mt-40 mb-40 pb-16 pt-16 shadow-lg rounded-lg'>
      <h1 className='text-4xl uppercase font-medium pl-10 pb-8'>Cart</h1>
      <hr className='hr-light mr-6 ml-6' />

      {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <h2 className='flex justify-end text-3xl pt-10 pr-10'>
        <span className='capitalize font-normal mr-8'>
          {subtotal?.formatted_with_symbol && "Sub total:"}
        </span>
        <span className='font-medium '>{subtotal?.formatted_with_symbol} </span>
      </h2>
    </main>
  );
}
