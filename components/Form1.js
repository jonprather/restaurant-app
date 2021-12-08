import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Layout from "../components/Layout";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Form.module.css";

export default function FormTest() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    shippingName: "",
    shippingStreet: "",
    shippingCity: "",
    shippingStateProvince: "",
    shippingPostalZipcode: "",
    shippingCountry: "",
    shippingOption: "",
    cardNum: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    billingPostalZipcode: "",
  });

  let schema = yup.object().shape({
    firstname: yup.string().required(),
  });
  const router = useRouter();
  const generateCheckoutToken = async () => {
    if (cart.data.line_items.length) {
      const commerce = getCommerce(props.commercePublicKey);
      const token = await commerce.checkout.generateToken(cart.data.id, {
        type: "cart",
      });
      setCheckoutToken(token);
      fetchShippingCountries(token.id);
    } else {
      Router.push("/cart");
    }
  };

  const handleSubmit = async (e) => {
    schema.isValid(values).then(function (valid) {
      console.log("VALID:", valid); // => true
    });
    e.preventDefault();
    console.log(values);
    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );
    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    } else {
      //submit to commerce js
      console.log(values);
      //handleCaptureCheckout();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // computed property value for the key and the value for the value to handle multiple diff types of key value pairs // o finputs from the forms... spread in the old state and add in new key value pairs...  }
  };
  const handleCaptureCheckout = async () => {
    const orderData = {
      // all of this will be handled with the forms that are dynacmially passed in when on correct step,// when its all together at end and no errors it will be sent to capture method//by the time the user gets to this fn call ie last step then should have all data to proceed
      //if i named the properties the same as the values couldnt i jus tpass in the whole values obj saving much code?      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
      },
      shipping: {
        name: values.shippingName,
        street: values.shippingStreet,
        town_city: values.shippingCity,
        county_state: values.shippingStateProvince,
        postal_zip_code: values.shippingPostalZipCode,
        country: values.shippingCountry,
      },
      fulfillment: {
        shipping_method: values.shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: values.cardNum,
          expiry_month: values.expMonth,
          expiry_year: values.expYear,
          cvc: values.cvv,
          postal_zip_code: values.billingPostalZipcode,
        },
      },
    };
    const commerce = getCommerce(props.commercePublicKey);
    try {
      const order = await commerce.checkout.capture(
        checkoutToken.id,
        orderData
      );
      //  order will be the confirmaition data sent back from commerce after order used for reciept//hERE WE are updatigng the store to have the order data also saving it to localStorage (is that safe is there any sensitive info?  i know it reccomends to save the data so dont have to do a recall using a secret key)
      dispatch({ type: ORDER_SET, payload: order });
      localStorage.setItem("order_receipt", JSON.stringify(order));
      await refreshCart();
      Router.push("/confirmation");
    } catch (err) {
      const errList = [err.data.error.message];
      const errs = err.data.error.errors;
      for (const index in errs) {
        errList.push(`${index}: ${errs[index]}`);
      }
      setErrors(errList);
    }
  };

  const refreshCart = async () => {
    const commerce = getCommerce(props.commercePublicKey);
    const newCart = await commerce.cart.refresh();
    dispatch({ type: SET_CART, payload: newCart });
    //SO I RESET THE CART BY PASSIN GIN THE RIGHT ACTION OF SETCART AND THE PAYLOAD OF THE NEW CART
    //REDUCER WILL TAKE PREV STATE AND MERGE IT WIHT NEW STATE WHICH IS REALLY JUST  resetiing it
  };

  return (
    <Layout title='Checkout'>
      <Link href='/events'>Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              value={values.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              value={values.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              value={values.email}
              onChange={handleInputChange}
            />
          </div>
          <div></div>
          <div>
            <label htmlFor='shippingName'>Shipping Name</label>
            <input
              type='text'
              id='shippingName'
              name='shippingName'
              value={values.shippingName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='ShippingStreet'>Shipping Street</label>
            <input
              type='text'
              id='shippingStreet'
              name='shippingStreet'
              value={values.shippingStreet}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='shippingCity'>shipping city</label>
            <input
              type='text'
              id='shippingCity'
              name='shippingCity'
              value={values.shippingCity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='shippingCountry'>Shipping Country</label>
            <input
              type='text'
              id='shippingCountry'
              name='shippingCountry'
              value={values.shippingCountry}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='shippingStateProvince'>
              Shipping State Provice
            </label>
            <input
              type='text'
              id='shippingStateProvince'
              name='shippingStateProvince'
              value={values.shippingStateProvince}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='shippingPostalZipcode'>
              shipping Postal Zipcode
            </label>
            <input
              type='text'
              id='shippingPostalZipcode'
              name='shippingPostalZipcode'
              value={values.shippingPostalZipcode}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='shippingOption'>Shipping Option</label>
            <input
              type='text'
              id='shippingOption'
              name='shippingOption'
              value={values.shippingOption}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='cardNum'>Card Number</label>
            <input
              type='text'
              id='cardNum'
              name='cardNum'
              value={values.cardNum}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='expMonth'>Expiration Month</label>
            <input
              type='text'
              id='expMonth'
              name='expMonth'
              value={values.expMonth}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='expYear'>Expiration Year</label>
            <input
              type='text'
              id='expYear'
              name='expYear'
              value={values.expYear}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='cvv'>cvv</label>
            <input
              type='text'
              id='cvv'
              name='cvv'
              value={values.cvv}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='billingPostalZipcode'>Billing Postal Code</label>
            <input
              type='text'
              id='billingPostalZipcode'
              name='billingPostalZipcode'
              value={values.billingPostalZipcode}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <input type='submit' value='checkout' className='btn' />
      </form>
    </Layout>
  );
}
