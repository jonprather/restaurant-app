import React from "react";
import useAddToCart from "@/components/hooks/useAddToCart";
import Image from "next/image";
import ImageF from "next/future/image";
import Hero from "../public/images/hero-cropped.png";
export default function Header() {
  const addToCart = useAddToCart();
  return (
    <header className='header relative'>
      <div className='header-hero-description pl-8 md:pl-0'>
        <div className='header-brand'>
          <div>
            <span className='heading-small'>Now Taking Online Orders </span>
            <h1 className=' header-kebabs heading heading-1'>Kebabs </h1>
          </div>
          <span className='header-brand-price text-gray-500'>
            <span className='header-brand-price--sign'> $</span> 14.97{" "}
          </span>
        </div>
        <div className='header__hero'>
          <Image
            src={Hero}
            alt='Picture of Kebabs'
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder='blur' // Optional blur-up while loading
            className='header__hero__img'
          />
          {/* <img
            className=''
            src='/images/hero-cropped.png'
            alt='kebab menu item'
          /> */}
        </div>

        <p className='header-paragraph'>
          Restaurant style Yogurt Mint Sauce is delicious dip which is quick and
          easy to ... This is a standard Indian mint chutney served with
          poppadums along with mint and lemon.
        </p>
        <div className='header-button-box'>
          <div className='header-button-wrapper '>
            <div className='btn-wrapper--1 '>
              <button
                onClick={() => addToCart("prod_8XO3wpMZjNoYAz")}
                className=' btn  '
              >
                {" "}
                Add To Cart
              </button>
            </div>
            <div className='btn-wrapper--2'>
              <a href='/booking'>
                <button className=' btn btn--black' href='/booking'>
                  Book a Table
                </button>
              </a>
            </div>
          </div>

          <div className=' header-info'>
            <div>
              <p className='capitalize header-info-meal'>Lunch </p>
              <span className=' header-info-time text-gray-500'>
                1:00- 3:00pm{" "}
              </span>
            </div>
            <div>
              <p className='capitalize header-info-meal'>Dinner </p>
              <span className=' header-info-time text-gray-500'>
                7:00-10:00pm{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
