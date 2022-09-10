import React from "react";
import { FaStar } from "react-icons/fa";

export default function Stars({ starsGiven }) {
  console.log("HHOHOH", starsGiven);
  return (
    <>
      {Array.from({ length: starsGiven }, (_) => {
        return (
          <span class='color-primary testomonials__body-card-container-rating-star'>
            <FaStar className='text-3xl' />
          </span>
        );
      })}
    </>
  );
}
