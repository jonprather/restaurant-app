import React from "react";
import { FaStar } from "react-icons/fa";

export default function Stars({ starsGiven }) {
  return (
    <>
      {Array.from({ length: starsGiven }, (_, i) => {
        return (
          <span
            key={"star-" + i}
            className='color-primary testomonials__body-card-container-rating-star'
          >
            {/* index should be fine as its just a dummy list that doesnt change */}
            <FaStar className='text-3xl' />
          </span>
        );
      })}
    </>
  );
}
