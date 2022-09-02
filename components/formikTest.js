import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import StepperButtons from "./stepperButtons";
function formikTest() {
  const initialValues = [
    { firstName: "", lastName: "", email: "" },

    {
      shippingName: "",
      shippingCity: "",
      shippingStreet: "",
      shippingCountry: "",
      shippingStateProvince: "",
      shippingPostalZipcode: "",
      shippingOption: "",
    },
    {
      cardNum: "",
      expMonth: "",
      expYear: "",
      cvv: "",
      billingPostalZipcode: "",
    },
  ];
  commerce.checkout
    .helperValidation("chkt_L5z3kmQpdpkGlA")
    .then((response) => console.log(response.rules));

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    shippingName: Yup.string().required("Name is required"),
    shippingCity: Yup.string().required("City is required"),
    shippingStreet: Yup.string().required("Street is required"),
    shippingCountry: Yup.string().required("Country is required"),
    shippingStateProvince: Yup.string().required("State/province is required"),
    shippingPostalZipcode: Yup.string().required("Postal Zipcode is required"),
    shippingOption: Yup.string().required("Shipping Option is required"),
    cardNum: Yup.string().required("Card Number is required"),

    cardMonth: Yup.string().required("Month is required"),

    cardYear: Yup.string().required("Year is required"),
    cvv: Yup.string().required("cvv is required"),
    billingPostalZipcode: Yup.string().required("Billing Zipcode is required"),
  });
  const [step, setStep] = useState(0);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <Formik
            initialValues={initialValues.reduce((prev, curr) => {
              return { ...prev, curr };
            }, {})}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);

              console.log("step on sub", step);
              alert("Form is validated! Submitting the form...");
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className='row mb-5'>
                    <div className='col-lg-12 text-center'>
                      <h1 className='mt-5'>Login Form</h1>
                    </div>
                  </div>
                  <Form>
                    {step === 0 && (
                      <>
                        <div className='form-group'>
                          <label htmlFor='email'>Email</label>
                          <Field
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            autoComplete='off'
                            className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component='div'
                            name='email'
                            className='invalid-feedback'
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='firstname'>First Name</label>
                          <Field
                            type='text'
                            name='firstname'
                            placeholder='Enter firstname'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.firstname && errors.firstname
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='firstname'
                            className='invalid-feedback'
                          />
                        </div>
                        {/* /// */}
                        <div className='form-group'>
                          <label htmlFor='lastname'>Last Name</label>
                          <Field
                            type='text'
                            name='lastname'
                            placeholder='Enter lastname'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.lastname && errors.lastname ? "is-invalid" : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='lastname'
                            className='invalid-feedback'
                          />
                        </div>
                      </>
                    )}
                    {step === 1 && (
                      ///STEPPPPPPPPPPPPPPPPPPPPPPP 2222222222222 SHIPPING
                      <>
                        <div className='form-group'>
                          <label htmlFor='shippingName'>Shipping Name</label>
                          <Field
                            type='text'
                            name='shippingName'
                            placeholder='Enter shipping name'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingName && errors.shippingName
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingName'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='shippingCity'>Shipping City</label>
                          <Field
                            type='text'
                            name='shippingCity'
                            placeholder='Enter shipping city'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingCity && errors.shippingCity
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingCity'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='shippingStreet'>
                            Shipping Street
                          </label>
                          <Field
                            type='text'
                            name='shippingStreet'
                            placeholder='Enter shipping Street'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingStreet && errors.shippingStreet
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingStreet'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='shippingCountry'>
                            Shipping Country
                          </label>
                          <Field
                            type='text'
                            name='shippingCountry'
                            placeholder='Enter shipping Country'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingCountry && errors.shippingCountry
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingCountry'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='shippingStateProvince'>
                            Shipping State PRovincet
                          </label>
                          <Field
                            type='text'
                            name='shippingStateProvince'
                            placeholder='Enter shipping State Province'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingStateProvince &&
                        errors.shippingStateProvince
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingStateProvince'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='shippingPostalZipcode'>
                            Shipping Postal Zipcode
                          </label>
                          <Field
                            type='text'
                            name='shippingPostalZipcode'
                            placeholder='Enter Postal Zipcode'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingPostalZipcode &&
                        errors.shippingPostalZipcode
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingPostalZipcode'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}

                        <div className='form-group'>
                          <label htmlFor='shippingOption'>
                            Shipping Option
                          </label>
                          <Field
                            type='text'
                            name='shippingOption'
                            placeholder='Enter shipping option'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.shippingOption && errors.shippingOption
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='shippingOption'
                            className='invalid-feedback'
                          />
                        </div>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <div className='form-group'>
                          <label htmlFor='cardNum'>credit card number</label>
                          <Field
                            type='text'
                            name='cardNum'
                            placeholder='Enter credit card number'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${touched.cardNum && errors.cardNum ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component='div'
                            name='cardNum'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='cardMonth'>credit card month</label>
                          <Field
                            type='text'
                            name='cardMonth'
                            placeholder='Enter credit card month'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.cardMonth && errors.cardMonth
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='cardMonth'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='cardYear'>credit card Year</label>
                          <Field
                            type='text'
                            name='cardYear'
                            placeholder='Enter credit card Year'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.cardYear && errors.cardYear ? "is-invalid" : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='cardYear'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='cvv'>cvv security code</label>
                          <Field
                            type='text'
                            name='cvv'
                            placeholder='Enter cvv (check back of card)'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${touched.cvv && errors.cvv ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component='div'
                            name='cvv'
                            className='invalid-feedback'
                          />
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className='form-group'>
                          <label htmlFor='billingPostalZipcode'>
                            Billing Zipcode
                          </label>
                          <Field
                            type='text'
                            name='billingPostalZipcode'
                            placeholder='Enter billing Zipcode'
                            autoComplete='off'
                            className={`mt-2 form-control
                      ${
                        touched.billingPostalZipcode &&
                        errors.billingPostalZipcode
                          ? "is-invalid"
                          : ""
                      }`}
                          />

                          <ErrorMessage
                            component='div'
                            name='billingPostalZipcode'
                            className='invalid-feedback'
                          />
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      // CAN SHOW WHAT WE HAVE THUS FAR IN FEILDS AND ORDER AND HAVE CONFIRM HERE OR AT STEP 4
                      <button
                        className='btn btn-primary btn-block mt-4 bs'
                        type='submit'
                      >
                        {" "}
                        submit
                      </button>
                    )}
                  </Form>
                  <StepperButtons
                    touched={touched}
                    errors={errors}
                    step={step}
                    setStep={setStep}
                  />
                  {/*    
                      ) */}
                </div>
              ) : (
                <div>
                  <h1 className='p-3 mt-5'>Form Submitted</h1>

                  <div className='alert alert-success mt-3'>
                    Thank for your Ordering with us. Here's what we got from you
                    !
                  </div>
                  <ul className='list-group'>
                    {/* can put order details here and also any finalized info */}
                    <li className='list-group-item'>Email: {values.email}</li>
                    <li className='list-group-item'>
                      FirstName: {values.firstname}
                    </li>
                  </ul>
                </div>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default formikTest;
