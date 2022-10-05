import React from "react";
import useAddToCart from "@/components/hooks/useAddToCart";

export default function Header() {
  const addToCart = useAddToCart();
  return (
    <header class='header'>
      <div class='header-hero-description pl-8 md:pl-0'>
        <div class='header-brand'>
          <div>
            <span class='heading-small'>Now Taking Online Orders </span>
            <h1 class=' header-kebabs heading heading-1'>Kebabs </h1>
          </div>
          <span class='header-brand-price'>
            <span class='header-brand-price--sign'> $</span> 14.97{" "}
          </span>
        </div>
        <div className='header__hero--small'>
          <img
            className=''
            src='/images/hero-small.jpg'
            alt='kebab menu item'
          />
        </div>
        <p class='header-paragraph'>
          Restaurant style Yogurt Mint Sauce is delicious dip which is quick and
          easy to ... This is a standard Indian mint chutney served with
          poppadums along with mint and lemon.
        </p>
        <div class='header-button-box'>
          <div class='header-button-wrapper'>
            <div class='btn-wrapper--1'>
              <button
                onClick={() => addToCart("prod_8XO3wpMZjNoYAz")}
                class=' btn'
              >
                {" "}
                Add To Cart
              </button>
            </div>
            <div class='btn-wrapper--2'>
              <button class=' btn btn--black'>Book a Table</button>
              {/* TODO add a form to psuedo book a table 
              a modal would be cool but can make it a page as well
              yeah could reuse the modal here
               */}
            </div>
          </div>

          <div class=' header-info'>
            <div>
              <p class='capitalize header-info-meal'>Lunch </p>
              <span class=' header-info-time'>1:00- 3:00pm </span>
            </div>
            <div>
              <p class='capitalize header-info-meal'>Dinner </p>
              <span class=' header-info-time'>7:00-10:00pm </span>
            </div>
          </div>
        </div>
      </div>
      <div class='header__hero'></div>
    </header>
  );
}
