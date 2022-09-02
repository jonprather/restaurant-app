import CheckoutForm from "../components/formikTest.js"; //  ///checkoutForm"; //form1 is Formik - Form is hooks

import React, { useState } from "react";

export default function checkout() {
  let [step, setStep] = useState(0);
  return (
    <div>
      <CheckoutForm step={step} />
    </div>
  );
}
