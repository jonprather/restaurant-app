import React from "react";
import MenuItem from "@/components/MenuItem";
export default function popularProducts({ products }) {
  return (
    <main class='popular-products' id='popular-products'>
      <div class='popular-products-heading-container'>
        <h2 class='popular-products-heading-container-subheading heading-small--black'>
          Popular Menu{" "}
        </h2>
        <h1 class='heading heading-2'>Amazing Delicacies Served</h1>
      </div>
      <div class='popular-products-container-wrapper'>
        <div class='popular-products-container'>
          {products.map((product) => {
            console.log(product);
            return <MenuItem {...product} />;
          })}
          {/* {{-- ideally pass down data from controller and loop here --}} */}
          {/* 
            //ok so can pass title and description price and url down as props instead
            //and can get these from BE
            //and do same for the menu
            
        <x-menu-item-card>
            <x-slot name="title"> Sweet Sawaiyan</x-slot>
            <x-slot name="description"> Ut enim ad minim veniam, quis nostrud exercitation.
            </x-slot>
            <x-slot name="price"> 5.10</x-slot>
            <x-slot name="image"> <img alt="Menu Item Sawaiyan" src={{ asset('images/sawaiyan.png') }} /></x-slot>
        </x-menu-item-card>
        <x-menu-item-card>
            <x-slot name="title"> Fried Raw Fish</x-slot>
            <x-slot name="description"> Lorem Ipsum Lorem Ipsum is
                simply
                and dummy text of the printing.
            </x-slot>
            <x-slot name="price"> 3.60</x-slot>
            <x-slot name="image"> <img alt="Menu Item fish" src={{ asset('images/fried-fish.png') }} /></x-slot>
        </x-menu-item-card>
        <x-menu-item-card>
            <x-slot name="title"> Breakfast With Half Fried Egg</x-slot>
            <x-slot name="description"> Lorem Ipsum Lorem Ipsum is
                simply
                and dummy text of the printing.
            </x-slot>
            <x-slot name="price"> 6.40</x-slot>
            <x-slot name="image"> <img alt="Menu Item egg" src={{ asset('images/fried-egg.png') }} /></x-slot>
        </x-menu-item-card>
        <x-menu-item-card>
            <x-slot name="title"> Chicken Hot Wings</x-slot>
            <x-slot name="description"> Lorem Ipsum Lorem Ipsum is
                simply
                and dummy text of the printing.
            </x-slot>
            <x-slot name="price"> 6.40</x-slot>
            <x-slot name="image"> <img alt="Menu Item hot wings" src={{ asset('images/dish-2.png') }} /></x-slot>
        </x-menu-item-card>

        <x-menu-item-card>
            <x-slot name="title"> Samosas with Green Chatni</x-slot>
            <x-slot name="description"> Ut enim ad minim veniam, quis nostrud exercitation.
            </x-slot>
            <x-slot name="price"> 4.80</x-slot>
            <x-slot name="image"> <img alt="Menu Item samosas" src={{ asset('images/samosas.png') }} /> </x-slot>
        </x-menu-item-card>
        <x-menu-item-card>
            <x-slot name="title"> Disham With Rice and Sauce</x-slot>
            <x-slot name="description"> Lorem Ipsum Lorem Ipsum is
                simply
                and dummy text of the printing.
            </x-slot>
            <x-slot name="price"> 7.10</x-slot>
            <x-slot name="image"> <img alt="Menu Item Dishim" src={{ asset('images/dish-1.png') }} /></x-slot>
        </x-menu-item-card> */}
        </div>
      </div>
      <div class='popular-products-button-box'>
        <div class='btn-wrapper--3 '>
          <button class=' btn'>
            {" "}
            <a href='/menu'>See All Menu</a>
          </button>
        </div>
      </div>
    </main>
  );
}
