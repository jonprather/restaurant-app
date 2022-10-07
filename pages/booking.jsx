import React, { useState } from "react";
import SectionHeader from "@/components/Sectionheader";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function booking() {
  const [date, setDate] = useState(new Date());
  const handleDateChange = (date) => {
    setDate(date);
  };
  return (
    <div className='booking pt-40 pb-40  z-50 '>
      <div className='booking__container  '>
        {/* TODO finish form functionality - date picker, design
       zod object and validation etc
       //also add to navs so to have access and fix the links to work on any page
       //so router .push perhaps

       TODO fix styling for a hero or bg image to look nice - 
     */}
        <SectionHeader heading={"Reservations"} subheading={"get a table"} />
        <div className='booking__hero--small'>
          <img
            className=''
            src='/images/hero-small.jpg'
            alt='kebab menu item'
          />
        </div>
        <div class='w-full max-w-lg  mb-40 mx-auto z-50'>
          <form class='bg-white shadow-lg rounded px-8 py-8 mb-4 z-50'>
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

            <div class='mb-4 z-50'>
              <label
                class='block text-gray-700 text-lg font-bold mb-2'
                for='Guests'
              >
                Guests
              </label>
              <input
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='Guests'
                type='number'
                max={9}
                min={1}
                placeholder='1'
              />
              {/* <p class='text-red-500 text-md italic'>COuld use this for errors</p> */}
            </div>
            <div class='mb-6 z-50'>
              <label
                class='block text-gray-700 text-lg font-bold mb-2'
                for='Date'
              >
                Date
              </label>
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat='Pp'
              />
            </div>
            <div class='flex items-center justify-between z-50'>
              <button
                class='bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => alert("Table Reserved!")}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
