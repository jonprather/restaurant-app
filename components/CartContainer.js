import React from "react";

export default function CartContainer({
  name,
  quantity,
  line_total,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  image,
  price,
}) {
  return (
    <div className='cartContainer__item pt-12 pb-12 pr-10 pl-10 shadow-sm'>
      <div className='cartContainer__item__image-container mr-10 max-w-xs w-60 h-auto'>
        <img src={image} alt='Menu Item' />
      </div>
      <div className='cartContainer__item__text-container'>
        <div className='cartContainer__item__text-container__name-price'>
          <div className=''>
            <span>{name}</span>
            <div>{price}</div>
          </div>
          <div>{line_total}</div>
        </div>
        <div className='cartContainer__item__text-container__quatity-stock'>
          {/* <div>availablity idk how to access this</div> */}
        </div>
        <div className='cartContainer__item__text-container__change-quantity-save'>
          <div className='cartContainer__item__text-container__change-quantity-save__quantity-button font-light'>
            <button onClick={() => decrementQuantity()} data-action='decrement'>
              <span class='m-auto text-2xl font-thin'>−</span>
            </button>
            <span className='pr-4 pl-4 font-normal'>{quantity}</span>
            <button onClick={() => incrementQuantity()} data-action='increment'>
              <span className=' text-gray-400'>+</span>
            </button>
          </div>
          <div className='cartContainer__item__text-container__change-quantity-save__save-button'>
            <button onClick={() => removeItem()}>Delete</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
