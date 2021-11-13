import React from "react";
import Image from "next/image";
export default function MenuItem({ name, description, price, image }) {
  let [imgURL, setImgURL] = React.useState(null);
  React.useEffect(() => {
    setImgURL(image?.url);
  }, [image?.url]);
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
        <div class='popular-products-container__card-body-rating'>
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
          </span>
          <span class='material-icons star color-primary popular-products-container__card-body-rating-star'>
            star
          </span>
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
        {/* {{-- <div>
                        <span
                            class="material-icons color-primary popular-products-container__card-footer-favorite">favorite_border</span>
                        <span class="material-icons">share</span>
                    </div> --}} */}
      </div>
    </div>
  );
}
