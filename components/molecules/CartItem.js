import React from "react";
import { FaTrash } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import ButtonWithIcon from "@/components/molecules/ButtonWithIcon";
export default function CartItem({
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
      <div className='cartContainer__item  pt-12 pb-12 pr-10 pl-10 '>
        <div className='cartContainer__item__image-container mr-10 max-w-xs w-60  cart__card-image'>
          <img src={image} alt='Menu Item' className=' w-96' />
        </div>
        <div className='cartContainer__item__text-container'>
          <div className='cartContainer__item__text-container__name-price'>
            <div className=''>
              <span className='capitalize text-4xl font-normal'>{name}</span>
              <div className='text-3xl font-normal mt-1 text-gray-500'>
                {price}
              </div>
            </div>
            <div className='text-4xl font-normal '>{line_total}</div>
          </div>
          <div className='cartContainer__item__text-container__quatity-stock'>
            {/* <div>availablity</div> */}
          </div>
          <div className='cartContainer__item__text-container__change-quantity-save'>
            <div className='cartContainer__item__text-container__change-quantity-save__quantity-button font-light shadow-sm p-1'>
              <button
                onClick={() => decrementQuantity()}
                data-action='decrement'
              >
                <span className='text-gray-500 4xl md:text-3xl font-normal p-5'>
                  −
                </span>
              </button>
              <span className='pr-1 pl-1  min-w-[2.5rem] inline-block text-center font-normal text-gray-600'>
                {quantity}
              </span>
              <button
                onClick={() => incrementQuantity()}
                data-action='increment'
              >
                <span className='text-gray-500 4xl md:text-3xl font-normal p-5'>
                  +
                </span>
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
                <FaTrash className='text-4xl font-normal mr-6 text-gray-400' />{" "}
                <span className=' font-normal text-gray-500'>
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
