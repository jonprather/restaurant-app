import { useCartDispatch, useCartState } from "../context/cart";
// TODO style cart
//TODO add functionality...
import commerce from "../lib/commerce";
import CartContainer from "../components/CartContainer";

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

  // if (isEmpty) return <p>Your cart is empty</p>;
  // TODO get image and pass it down
  return (
    <div className='mx-auto w-10/12 shadow-lg mt-40 pb-40 rounded-lg max-w-6xl'>
      <h1 className='text-center text-4xl uppercase font-medium p-8'> Cart</h1>
      <hr />
      {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <hr />

      <div className='flex justify-between text-3xl p-8 '>
        <strong className='uppercase font-normal'>Sub total:</strong>
        <span className='font-medium'>{subtotal?.formatted_with_symbol} </span>
      </div>
    </div>
  );
}
