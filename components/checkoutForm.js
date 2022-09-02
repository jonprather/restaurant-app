import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export default function SignupForm() {
  const [step, setStep] = useState(0);

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setStep(++step);
        console.log("STEP:", step);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        {stepForm(step)}
        ?????????
        {step < 3 ? (
          <button onClick={(() => setStep(step++), console.log(step))}>
            Next
          </button>
        ) : (
          <button type='submit'> submit????</button>
        )}
      </Form>
    </Formik>
  );
}

// ok so just got basic form to show
//but to get stepped form to work in this contrived format hwo can i get click event to trigger the update of step
//right now nothing is happening so idk maybe formik intercepts it all maybe i have to do something... else
//use bubbling, register another listener <idk className="//i feel guilty for not playing with colt"//but also feels good to get work done.></idk>

//diff layers so have the submit of form layer where must handle all of that to commerce.js
//have state changes that have to handle with redux ie for cart and for commerce tokens
//have step state
//vaidation and basics are ok now
//cn just show a diff button one to be onclick handler increment state the other to be final submit handler
// ie  if step < 3 ? btn1 ()which will be for the onclick : btn 2 (will be type sub,it)
