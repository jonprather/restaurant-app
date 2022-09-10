import React from "react";

// TODO extract this stuff out or clean it up if its distracting to have testomonials and review together like this
export default function About() {
  return (
    <section id='about' class='about'>
      <div class='about__container'>
        <div class='about__container-image'>
          <img alt='Restaurant Interior' src='images/about-us.jpg' />
          {/*  <Image
              alt='Restaurant Interior'
              src='/images/about-us.jpg'
              layout='fill'
              objectFit='contain'
              className={"about__container-imagesssss"}
            /> */}
        </div>
        <div class='about__container-textbox'>
          <h2 class='about__container-textbox-subtitle'>About Us</h2>
          <h1 class='about__container-textbox-title'>Our Story</h1>
          <p class=' about__container-textbox-paragraph'>
            Discover local, on-demand delivery or Pickup from restaurants,
            nearby grocery and convenience stores, and more. Meals are generally
            served and eaten on the premises, but many restaurants also offer
            take-out and food delivery services.
          </p>
          <p class='about__container-textbox-paragraph'></p>
        </div>
      </div>
    </section>
  );
}
