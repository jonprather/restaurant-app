import React from "react";
import SectionHeader from "@/components/Sectionheader";

export default function booking() {
  return (
    <div className='mt-40'>
      {/* TODO finish form functionality - date picker, design
       zod object and validation etc
       //also add to navs so to have access and fix the links to work on any page
       //so router .push perhaps
     */}
      <SectionHeader heading={"Reservations"} subheading={"get a table"} />
      <div className='header__hero--small'>
        <img className='' src='/images/hero-small.jpg' alt='kebab menu item' />
      </div>
      <div class='w-full max-w-lg  mb-40 mx-auto'>
        <form class='bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4'>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-lg font-bold mb-2'
              for='Email'
            >
              Email
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Email'
              type='text'
              placeholder='Email'
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-lg font-bold mb-2'
              for='Date'
            >
              Date
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='Date'
              type='text'
              placeholder='Date'
            />
          </div>
          <div class='mb-6'>
            <label
              class='block text-gray-700 text-lg font-bold mb-2'
              for='Guests'
            >
              Guests
            </label>
            <input
              class='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='Guests'
              type='number'
              max={9}
              placeholder='0'
            />
            <p class='text-red-500 text-md italic'>COuld use this for errors</p>
          </div>
          <div class='flex items-center justify-between'>
            <button
              class='bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
