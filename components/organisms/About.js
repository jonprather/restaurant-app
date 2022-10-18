import React from "react";
import Image from "next/image";
import ImageF from "next/future/image";
import Hero from "../../public/images/about-us.jpg";
export default function About() {
  return (
    <section id='about' className='about'>
      <div className='about__container'>
        <div className='about__container-image'>
          {/* <img alt='Restaurant Interior' src='images/about-us.jpg' /> */}
          <ImageF
            src={Hero}
            alt='Picture of Dining Room'
            className=''
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder='blur' // Optional blur-up while loading
          />
        </div>
        <div className='about__container-textbox'>
          <h2 className='about__container-textbox-subtitle'>About Us</h2>
          <h1 className='about__container-textbox-title'>Our Story</h1>
          <p className=' about__container-textbox-paragraph'>
            {/* TODO this is a bit plain maybe add some highlights? */}
            Discover local, <span>on-demand</span> delivery or pickup from
            restaurants, nearby grocery and convenience stores, and more. Many{" "}
            restaurants offer <span>take-out</span> and food{" "}
            <span> delivery </span> services. But Meals are generally served and
            eaten on the premises.
          </p>
          <p className='about__container-textbox-paragraph'></p>
        </div>
      </div>
    </section>
  );
}
