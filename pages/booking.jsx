import React, { useState, useEffect } from "react";

import SectionHeader from "@/components/molecules/SectionHeader";
import { toast } from "react-toastify";
import { z } from "zod";
import Footer from "@/components/organisms/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getZodErrorMessage } from "@/lib/zodHelpers";
import Layout from "@/components/Layout";
const MAX = 13;
const MIN = 1;

export default function booking() {
  const [state, setState] = useState({
    email: "",
    guests: 0,
    date: new Date(),
  });

  const [touched, setTouched] = useState({
    email: false,
    guests: false,
    date: false,
  });

  const [errorsObj, setErrorsObj] = useState({
    email: false,
    guests: false,
    date: false,
  });

  const resetState = () => {
    setState({
      email: "",
      guests: 0,
      date: new Date(),
    });
    setTouched({
      email: false,
      guests: false,
      date: false,
    });
  };

  const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    date: z
      .date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
      })
      .min(new Date()),
    guests: z.number().gte(MIN).lte(MAX),
  });

  const handleSubmit = () => {
    Object.entries(state).forEach(([key, value]) => {
      const errorMsg = getZodErrorMessage(FormSchema.shape[key], value);
      setErrorsObj((prev) => {
        return { ...prev, [key]: errorMsg };
      });
    });
    !touched.date &&
      setErrorsObj((prev) => {
        return { ...prev, date: "Please choose a date and time." };
      });

    if (FormSchema.safeParse({ ...state }).success) {
      toast.success(`Table Registered for ${state.guests} on ${state.date}`);
      resetState();
    }
  };

  const handleDateChange = (date) => {
    setState((prev) => {
      return { ...prev, date: date };
    });
    setErrorsObj((prev) => {
      return { ...prev, date: null };
    });
    setTouched((prev) => {
      return { ...prev, date: true };
    });
    const errorMsg = getZodErrorMessage(FormSchema.shape.date, date);
    setErrorsObj((prev) => {
      return { ...prev, date: errorMsg };
    });
  };

  const showDisableButtonStyle = function () {
    return (
      Object.values(touched).some((hasBeenTouched) => !hasBeenTouched) ||
      Object.values(errorsObj)?.some((hasError) => hasError)
    );
  };

  return (
    <Layout
      title='Reservations Yannal'
      description={" Reservation form for Yannal Middle eastern restaurant"}
    >
      <div className='booking pt-40 pb-40  z-50 '>
        <div className='booking__container  '>
          <SectionHeader
            heading={"Reservations"}
            subheading={"get a table"}
            headingClassName={"heading-3"}
            containerClassname={"mb-36"}
          />
          <div className='booking__hero--small'>
            <img
              className=''
              src='/images/hero-small.jpg'
              alt='kebab menu item'
            />
          </div>
          <div className='w-full  max-w-xl  mb-40 mx-auto z-50'>
            <form className='bg-white shadow-lg rounded px-12 py-12 mb-4 z-50'>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-2xl font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  className='shadow appearance-none border text-2xl rounded w-full py-4 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='text'
                  placeholder='Email'
                  value={state.email}
                  onChange={(e) => {
                    setErrorsObj((prev) => {
                      return { ...prev, email: null };
                    });
                    setState((prev) => {
                      return { ...prev, email: e.target.value };
                    });
                  }}
                  onBlur={(e) => {
                    const errorMsg = getZodErrorMessage(
                      FormSchema.shape.email,
                      e.target.value
                    );

                    setErrorsObj((prev) => {
                      return { ...prev, email: errorMsg };
                    });
                    setTouched((prev) => {
                      return { ...prev, email: true };
                    });
                  }}
                />
                <p className='text-red-500 text-lg italic '>
                  {errorsObj.email}
                </p>
              </div>

              <div className='mb-4 z-50'>
                <label
                  className='block text-gray-700 text-2xl font-bold mb-2'
                  htmlFor='guests'
                >
                  Guests
                </label>
                <input
                  className='shadow appearance-none text-2xl border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                  id='guests'
                  type='number'
                  max={MAX}
                  min={MIN}
                  placeholder='0'
                  value={state.guests}
                  onChange={(e) => {
                    setErrorsObj((prev) => {
                      return { ...prev, guests: null };
                    });
                    setState((prev) => {
                      return { ...prev, guests: +e.target.value };
                    });
                  }}
                  onBlur={(e) => {
                    const errorMsg = getZodErrorMessage(
                      FormSchema.shape.guests,
                      +e.target.value
                    );
                    setErrorsObj((prev) => {
                      return { ...prev, guests: errorMsg };
                    });
                    setTouched((prev) => {
                      return { ...prev, guests: true };
                    });
                  }}
                />
                {errorsObj.guests && (
                  <p className='text-red-500 text-lg italic '>
                    {errorsObj.guests}
                  </p>
                )}
              </div>
              <div className='mb-6 z-50'>
                <label
                  className='block text-gray-700 text-2xl font-bold mb-2'
                  htmlFor='date'
                >
                  Date
                </label>
                <DatePicker
                  selected={state.date}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat='Pp'
                  className='text-2xl'
                  id='date'
                />

                <p className='text-red-500 text-lg italic pt-3'>
                  {errorsObj.date}
                </p>
              </div>
              <div className='flex items-center justify-between z-50'>
                <button
                  className={` bg-red-500 hover:bg-red-700 text-white text-3xl font-bold py-6 px-10 rounded focus:outline-none focus:shadow-outline ${
                    showDisableButtonStyle() &&
                    "cursor-pointer bg-gray-500 hover:bg-gray-500"
                  }`}
                  type='button'
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
