import React from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import ButtonWithIcon from "@/components/molecules/ButtonWithIcon";
import Stars from "@/components/molecules/Stars";
import useAddToCart from "@/components/hooks/useAddToCart";
import { Modal } from "@/components/organisms/Modal";

// just a util method so that you dont have to add a period in cms
const addPeriod = (text) => {
  text = text.trim();
  if (text[text.length - 1] !== ".") {
    text += ".";
  }
  return text;
};

export default function MenuItem({ name, description, price, image, id }) {
  const [isOpen, setOpen] = React.useState(false);

  description = description.replace(/<\/?[^>]+(>|$)/g, "");
  // removing some of the cms added paragraph tags note this is not a complete solution
  // if some bolds or underlines then this breaks

  description = addPeriod(description);

  let trimmedDescription = description;
  const SLICE_LENGTH = 7;
  //TODO maybe trim based on characters but cut at the right word ie round
  //so slice position should be dependent on how many characters but dont cut in middle
  //round down
  if (description.split(" ").length > SLICE_LENGTH) {
    trimmedDescription =
      description.split(" ").slice(0, SLICE_LENGTH).join(" ") + "...";
  }

  const addToCart = useAddToCart();

  function addItem() {
    addToCart(id);
  }
  return (
    <div
      role={"button"}
      className='popular-products__card cursor-pointer flex flex-col justify-between shadow-lg'
      onClick={() => setOpen(true)}
    >
      <div className='popular-products__card-image'>
        <img src={image?.url} alt='menu item' />
      </div>
      <div className='popular-products__card-body'>
        <div className='popular-products__card-body-rating flex'>
          <Stars starsGiven={5} />
        </div>
        <div className='popular-products__card-body-text'>
          <h1 className='popular-products__card-body-text--title'>{name}</h1>
          <div className='popular-products__card-body-text--paragraph'>
            {trimmedDescription}
            <Modal isOpen={isOpen} setOpen={setOpen}>
              <div className='popular-products__card--modal p-4'>
                <div className='popular-products__card-image'>
                  <img src={image?.url} alt='menu item' />
                </div>
                <div className='popular-products__card-body'>
                  <div className='popular-products__card-body-rating flex'>
                    <Stars starsGiven={5} />
                  </div>
                  <div className='popular-products__card-body-text'>
                    <h4 className='popular-products__card-body-text--title '>
                      {name}
                    </h4>
                    <p
                      className={`popular-products__card-body-text--paragraph ${
                        isOpen &&
                        "popular-products__card-body-text--paragraph--wide"
                      } `}
                    >
                      {description}
                    </p>
                  </div>
                </div>
                <div className='popular-products__card-footer pt-5'>
                  <p className=' text-4xl text-white'>
                    {price?.formatted_with_symbol}
                  </p>
                  <ButtonWithIcon
                    eventHandler={addItem}
                    text={"add to cart"}
                    styles={"text-white"}
                    Icon={() => {
                      return (
                        <FaCartPlus className='text-4xl font-normal mr-6 text-white' />
                      );
                    }}
                  />
                </div>
              </div>
            </Modal>
          </div>

          {/* content should be like this card item itself just larger bigger description right?
              so what do i do there? hmm perhaps not maybe make a basic design similar but 
              //TODO ok proablay keep it WET at first bc not sure of the right abstracitons here
              working on modal conten modal top styling and 
               */}
        </div>
      </div>

      <div className='popular-products__card-footer'>
        <p className='popular-products__card-footer-price'>
          {price?.formatted_with_symbol}
        </p>
        {/* TODO could add a condition if item is in cart then goto cart link appears
        //can check if is in cart by comparing id to ids in cart 
         */}
        <ButtonWithIcon
          eventHandler={addItem}
          text={"add to cart"}
          Icon={() => {
            return (
              <FaCartPlus className='text-4xl font-normal mr-6 text-gray-400' />
            );
          }}
        />
      </div>
    </div>
  );
}
