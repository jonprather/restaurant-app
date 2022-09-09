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
  // TODO get image and pass it down
  return (
    <div className='mx-auto sm:w-10/12 shadow-lg mt-40 pb-40 rounded-lg max-w-6xl'>
      {/* TODO fixing BEM naming this needs a name like CartContainer the other like CartItem */}
      {/* Have CartItem-> cartItem COntainer then the bem clas of CartItem COntainer in that seems jank */}
      {/* But its also just the cart page... so maybe call this cart page? */}
      <h1 className=' text-4xl uppercase font-medium pl-10 pb-8'>Cart</h1>
      <hr className='hr-light mr-6 ml-6' />

      {line_items.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className='flex justify-end text-3xl p-8 '>
        <strong className='capitalize font-normal mr-8'>
          {subtotal?.formatted_with_symbol && "Sub total:"}
        </strong>
        <span className='font-medium '>{subtotal?.formatted_with_symbol} </span>
      </div>
    </div>
  );
}
