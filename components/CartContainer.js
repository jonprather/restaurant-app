import React from "react";
import { FaTrash } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import ButtonWithIcon from "@/components/molecules/ButtonWithIcon";
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
    <>
      <div className='cartContainer__item pt-12 pb-12 pr-10 pl-10'>
        <div className='cartContainer__item__image-container mr-10 max-w-xs w-60 h-auto'>
          <img src={image} alt='Menu Item' />
        </div>
        <div className='cartContainer__item__text-container'>
          <div className='cartContainer__item__text-container__name-price'>
            <div className=''>
              <span>{name}</span>
              <div className='text-2xl font-normal text-gray-500'>{price}</div>
            </div>
            <div className='text-3xl '>{line_total}</div>
          </div>
          <div className='cartContainer__item__text-container__quatity-stock'>
            {/* <div>availablity idk how to access this</div> */}
          </div>
          <div className='cartContainer__item__text-container__change-quantity-save'>
            <div className='cartContainer__item__text-container__change-quantity-save__quantity-button font-light'>
              <button
                onClick={() => decrementQuantity()}
                data-action='decrement'
              >
                <span class='text-gray-500 font-normal'>−</span>
              </button>
              <span className='pr-6 pl-6 font-normal text-gray-600'>
                {quantity}
              </span>
              <button
                onClick={() => incrementQuantity()}
                data-action='increment'
              >
                <span className='text-gray-500 font-normal'>+</span>
              </button>
            </div>
            <div className='cartContainer__item__text-container__change-quantity-save__save-button'>
              <ButtonWithIcon
                eventHandler={removeItem}
                text={"delete"}
                Icon={() => {
                  return (
                    <FaTrash className='text-3xl font-normal mr-6 text-gray-400' />
                  );
                }}
              />
              {/* <button onClick={() => removeItem()}>
                <FaTrash className='text-3xl font-normal mr-6 text-gray-400' />{" "}
                <span className='text-2xl font-normal text-gray-500'>
                  Delete
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <hr className='hr-light mr-10 ml-10' />
    </>
  );
}
