import React, { useState } from "react";
import { z } from "zod";
import { getZodErrorMessage } from "@/lib/zodHelpers";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [state, setState] = useState({
    email: "",
  });

  const [touched, setTouched] = useState({
    email: false,
  });
  const [errorsObj, setErrorsObj] = useState({
    email: false,
  });
  const resetState = () => {
    setState({
      email: "",
    });
    setTouched({
      email: false,
    });
  };
  const FormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });

  const handleSubmit = () => {
    Object.entries(state).forEach(([key, value]) => {
      const errorMsg = getZodErrorMessage(FormSchema.shape[key], value);
      setErrorsObj((prev) => {
        return { ...prev, [key]: errorMsg };
      });
    });

    if (FormSchema.safeParse({ ...state }).success) {
      toast.success(`You have been added to our subscriber list!`);
      resetState();
    }
  };
  return (
    <section className='newsletter'>
      <div className='newsletter-container'>
        <h1 className='newsletter__header'>Get special Discounts</h1>
        <p className='newsletter__paragraph'>
          Input email address and complete your subscription to get our special
          offer.
        </p>

        <div className='newsletter__input-container'>
          <label
            className='newsletter__input-container-label'
            htmlFor='newsletter'
          ></label>
          <input
            className='newsletter__input-container-input'
            autofill='true'
            type='email'
            placeholder='shakir260@gmail.com'
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
            }}
          />
          <button
            onClick={handleSubmit}
            type='submit'
            className='newsletter__input-container-button active:translate-y-1'
          >
            Subscribe
          </button>
        </div>
        <p className='text-red-600 text-xl italic pt-2'>{errorsObj.email}</p>
      </div>
    </section>
  );
}
