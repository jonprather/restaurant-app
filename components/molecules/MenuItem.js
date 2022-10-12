import React from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import ButtonWithIcon from "@/components/molecules/ButtonWithIcon";
import Stars from "@/components/molecules/Stars";
import useAddToCart from "@/components/hooks/useAddToCart";
import { Modal } from "@/components/organisms/Modal";

// TODO add some effects on transition to menu perhaps and buttons in general

export default function MenuItem({ name, description, price, image, id }) {
  let [imgURL, setImgURL] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);

  description = description.slice(3, -4);
  description = description.slice(0, 1).toUpperCase() + description.slice(1);

  const addPeriod = (text) => {
    text = text.trim();
    if (text[text.length - 1] !== ".") {
      text += ".";
    }
    return text;
  };
  description = addPeriod(description);

  const trimmedDescription =
    description.split(" ").slice(0, 7).join(" ") + "...";

  const addToCart = useAddToCart();
  React.useEffect(() => {
    setImgURL(image?.url);
  }, [image?.url]);

  function addItem() {
    addToCart(id);
  }
  return (
    <div
      role={"button"}
      className='popular-products-container__card cursor-pointer flex flex-col justify-between'
      onClick={() => setOpen(true)}
    >
      <div className='popular-products-container__card-image'>
        <img src={image?.url} alt='menu item' />
      </div>
      <div className='popular-products-container__card-body'>
        <div className='popular-products-container__card-body-rating flex'>
          <Stars starsGiven={5} />
        </div>
        <div className='popular-products-container__card-body-text'>
          <h4 className='popular-products-container__card-body-text--title'>
            {name}
          </h4>
          <div className='popular-products-container__card-body-text--paragraph'>
            {trimmedDescription}
            <Modal isOpen={isOpen} setOpen={setOpen}>
              <div className='popular-products-container__card--modal p-4'>
                <div className='popular-products-container__card-image'>
                  <img src={image?.url} alt='menu item' />
                </div>
                <div className='popular-products-container__card-body'>
                  <div className='popular-products-container__card-body-rating flex'>
                    <Stars starsGiven={5} />
                  </div>
                  <div className='popular-products-container__card-body-text'>
                    <h4 className='popular-products-container__card-body-text--title '>
                      {name}
                    </h4>
                    <p className='popular-products-container__card-body-text--paragraph '>
                      {description}
                    </p>
                  </div>
                </div>
                <div className='popular-products-container__card-footer pt-5'>
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

      <div className='popular-products-container__card-footer'>
        <p className='popular-products-container__card-footer-price'>
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
