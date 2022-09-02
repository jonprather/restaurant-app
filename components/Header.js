import React from "react";
// import Nav from "./Nav";
import Image from "next/image";
export default function Header() {
  return (
    <header class='header'>
      <div class='header-hero-description'>
        <div class=' header-brand'>
          <div>
            <span class='heading-small'>Now Taking Online Orders </span>
            <h1 class=' header-kebabs heading heading-1'>Kebabs </h1>
          </div>
          <span class='header-brand-price'>
            <span class='header-brand-price--sign'> $</span> 14.97{" "}
          </span>
        </div>
        <p class='header-paragraph'>
          Restaurant style Yogurt Mint Sauce is delicious dip which is quick and
          easy to ... This is a standard Indian mint chutney served with
          poppadums along with mint and lemon.
        </p>
        <img src='hero-small.jpg' alt='Kebabs' />
        <div class='header-button-box'>
          <div class='header-button-wrapper'>
            <div class='btn-wrapper--1'>
              <button class=' btn'>Add To Cart</button>
            </div>
            <div class='btn-wrapper--2'>
              <button class=' btn btn--black'>Book a Table</button>
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
