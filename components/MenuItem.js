import React from "react";
import Image from "next/image";
import { useCartDispatch, useCartState } from "../context/cart";
import commerce from "../lib/commerce";
import { FaCartPlus } from "react-icons/fa";
import ButtonWithIcon from "@/components/molecules/ButtonWithIcon";
import Stars from "@/components/molecules/Stars";

export default function MenuItem({ name, description, price, image, id }) {
  const { setCart } = useCartDispatch();
  const state = useCartState();
  console.log("STATE", state);
  let [imgURL, setImgURL] = React.useState(null);
  React.useEffect(() => {
    setImgURL(image?.url);
  }, [image?.url]);

  function addItem() {
    commerce.cart
      .add(id, 5)
      .then((response) =>
        commerce.cart.contents().then((items) => console.log(items))
      );
  }
  return (
    <div class='popular-products-container__card'>
      <div class='popular-products-container__card-image'>
        <img src={image?.url} alt='menu item' />
        {/* {imgURL && (
          <Image
            src={image?.url}
            alt='menu item'
            layout='fill'
            objectFit='cover'
            className={""}
          />
        )} */}
        {/* I think i would have to use an image loader here... idk its getting the src prop as empty and failing rather
        than workign like the other one does idk how to have it wait */}
      </div>
      <div class='popular-products-container__card-body'>
        <div class='popular-products-container__card-body-rating flex'>
          <Stars starsGiven={5} />
          {/* <span class='material-icons star color-primary popular-products-container__card-body-rating-star'>
            star
          </span>
          <span class='material-icons star color-primary popular-products-container__card-body-rating-star'>
            star
          </span>
          <span class='material-icons star color-primary popular-products-container__card-body-rating-star'>
            star
          </span>
          <span class='material-icons star color-primary popular-products-container__card-body-rating-star'>
            star
          </span>
          <span class='material-icons star color-primary popular-products-container__card-body-rating-star'>
            star
          </span> */}
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
        {/* { id, name, quantity, line_total } */}
        <ButtonWithIcon
          eventHandler={addItem}
          text={"add to cart"}
          Icon={() => {
            return (
              <FaCartPlus className='text-3xl font-normal mr-6 text-gray-400' />
            );
          }}
        />
        {/* <button
          onClick={() =>
            
              commerce.cart
                .add(id, 5)
                .then((response) =>
                  commerce.cart.contents().then((items) => console.log(items))
                )
            
          }
        >
          <FaCartPlus />
      
          <span>Add To Cart</span>
        </button> */}
        {/* TODO reuse the star component from the other page make it a molecule
          can do same for icon plus text
           */}
        {/* {{-- <div>
                        <span
                            class="material-icons color-primary popular-products-container__card-footer-favorite">favorite_border</span>
                        <span class="material-icons">share</span>
                    </div> --}} */}
      </div>
    </div>
  );
}
