import React from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import ButtonWithIcon from "@/components/molecules/ButtonWithIcon";
import Stars from "@/components/molecules/Stars";
import useAddToCart from "@/components/hooks/useAddToCart";

// TODO add some effects on transition to menu perhaps and buttons in general
//TODO could ...abrev the extra text then make it either expand or go to another page
//TODO text overflows and there is a fixed hieght looks bad either chop text or make it extentible or modal or something
//  on main page can probably just cut it then on menu page can make the card extendidible or bigger or some other solution
// or be a modal
export default function MenuItem({ name, description, price, image, id }) {
  let [imgURL, setImgURL] = React.useState(null);
  const addToCart = useAddToCart();
  React.useEffect(() => {
    setImgURL(image?.url);
  }, [image?.url]);

  function addItem() {
    addToCart(id);
  }
  return (
    <div class='popular-products-container__card'>
      <div class='popular-products-container__card-image'>
        <img src={image?.url} alt='menu item' />
      </div>
      <div class='popular-products-container__card-body'>
        <div class='popular-products-container__card-body-rating flex'>
          <Stars starsGiven={5} />
        </div>
        <div class='popular-products-container__card-body-text'>
          <h4 class='popular-products-container__card-body-text--title'>
            {name}
          </h4>
          <p class='popular-products-container__card-body-text--paragraph'>
            {description.slice(3, -4)}
          </p>
        </div>
      </div>
      <div class='popular-products-container__card-footer'>
        <p class='popular-products-container__card-footer-price'>
          {price?.formatted_with_symbol}
        </p>
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
