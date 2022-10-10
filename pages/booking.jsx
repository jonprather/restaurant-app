import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/Sectionheader";
import { toast } from "react-toastify";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { setErrorMap, z } from "zod";
export default function booking() {
  const [date, setDate] = useState(new Date());
  const [dateError, setDateError] = useState(null);
  const [touched, setTouched] = useState({
    email: false,
    guests: false,
    date: false,
  });
  const buttonIsEnabled = () => {
    return Object.values(touched).every((ele) => ele);
  };
  const [guests, setGuests] = useState(0);
  const [guestsError, setGuestsError] = useState(null);
  const [errorsObj, setErrorsObj] = useState({
    email: null,
    guests: null,
    date: null,
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);

  const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    date: z
      .date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
      })
      .min(new Date()),
    guests: z.number().gt(0).lt(13),
  });
  const resetState = () => {
    setEmail("");
    setGuests(0);
    setDate(new Date());
    setTouched({
      email: false,
      guests: false,
      date: false,
    });
  };

  const handleSubmit = () => {
    const errorMsg = getZodErrorMessage(FormSchema.shape.email, email);
    setEmailError(errorMsg);

    const guestsErrorMsg = getZodErrorMessage(FormSchema.shape.guests, guests);
    setGuestsError(guestsErrorMsg);

    const dateErrorMsg = getZodErrorMessage(FormSchema.shape.date, date);
    setDateError(dateErrorMsg);
    !touched.date && setDateError("Please choose a date and time.");

    //since these are all the same could put all in one error obj reuires them to be on same obj so its computable rather then be part of
    //aset state name hmm i like this abstraction pattern use one object to use computed properties allowing mroe abstraction

    // then could do somehting like
    // ["email", "guests", "date"];
    Object.keys(errorsObj).forEach((key) => {
      // so i can abstract the difference which is the name and reuse a common more generic form of name rahter than specificName
      //couldnt this also be like a reducer pattern??
      const errorMsg = getZodErrorMessage(FormSchema.shape[key], key);
      console.log("IN here dude", errorMsg);

      setErrorsObj((prev) => {
        return { ...prev, [key]: errorMsg };
      });
    });
    if (!FormSchema.safeParse({ email, guests, date }).success) return;
    resetState();
    toast.success("Table Registered");
  };

  const getZodErrorMessage = (schema, testObj) => {
    const data = schema.safeParse(testObj);
    if (data.success) return null;
    const formatted = data.error.format();
    return formatted._errors.join(". ");
  };

  const handleDateChange = (date) => {
    setDateError(null);
    setDate(date);
    setTouched((prev) => {
      return { ...prev, date: true };
    });
    const dateErrorMsg = getZodErrorMessage(FormSchema.shape.date, date);
    setDateError(dateErrorMsg);
  };
  useEffect(() => {
    console.log(errorsObj);
  }, [errorsObj]);

  return (
    <div className='booking pt-40 pb-40  z-50 '>
      <div className='booking__container  '>
        {/* TODO 
       // add to navs so to have access and fix the links to work on any page
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
        <div className='w-full max-w-lg  mb-40 mx-auto z-50'>
          <form className='bg-white shadow-lg rounded px-8 py-8 mb-4 z-50'>
            <div className='mb-4'>
              <label
                className='block text-gray-700 text-lg font-bold mb-2'
                for='email'
              >
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) => {
                  setEmailError(null);
                  setEmail(e.target.value);
                }}
                onBlur={(e) => {
                  const errorMsg = getZodErrorMessage(
                    FormSchema.shape.email,
                    e.target.value
                  );
                  setTouched((prev) => {
                    return { ...prev, email: true };
                  });
                  setEmailError(errorMsg);
                }}
              />
              <p className='text-red-500 text-md italic'>{errorsObj.email}</p>
            </div>

            <div className='mb-4 z-50'>
              <label
                className='block text-gray-700 text-lg font-bold mb-2'
                for='guests'
              >
                Guests
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='guests'
                type='number'
                max={9}
                min={1}
                placeholder='1'
                value={guests}
                onChange={(e) => {
                  setGuestsError(null);
                  setGuests(+e.target.value);
                }}
                onBlur={(e) => {
                  const errorMsg = getZodErrorMessage(
                    FormSchema.shape.guests,
                    +e.target.value
                  );
                  setTouched((prev) => {
                    return { ...prev, guests: true };
                  });
                  setGuestsError(errorMsg);
                }}
              />
              {guestsError && (
                <p className='text-red-500 text-md italic'>
                  {errorsObj.guests}
                </p>
              )}
            </div>
            <div className='mb-6 z-50'>
              <label
                className='block text-gray-700 text-lg font-bold mb-2'
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

              <p className='text-red-500 text-md italic'>{errorsObj.date}</p>
            </div>
            <div className='flex items-center justify-between z-50'>
              <button
                className={`bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline ${
                  (emailError ||
                    guestsError ||
                    dateError ||
                    !buttonIsEnabled()) &&
                  "cursor-pointer bg-gray-400 hover:bg-gray-400"
                }`}
                type='button'
                onClick={handleSubmit}
                disabled={emailError || guestsError || dateError}
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
