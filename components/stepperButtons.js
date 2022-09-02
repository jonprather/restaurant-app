import React from "react";
import { array } from "yup";

export default function stepperButtons({ setStep, step, errors, touched }) {
  //utility function for checking if has stuff
  // get subset to check if has stuff - can be a utility used by both errors and touched //can slice the new array
  // hasErrors //these are for the subsets
  //hasBeenTouched
  //will pass these to the disababled or rather theres proably a funciton that will work for both that i can call in the disabled fields...
  //so pass anothe rprop in which will be what amount of form inputs we are at bc wont worry about not touching ones we havent go tto yet
  // so maybe have a fn that passes down an object dep on values for each step level...
  ///ie step 0 has 0-3 step 1 has 4-6  but really in step 1 can have 0-6 checked bc we just making sure later ones arent incuded bc touched needs to have been for our bool
  //to work check if prior elementsUp to currren thave been touched......
  //need ot look at erros bc cant just check length for subset? and touched
  //for erros might not just be length bc maybe its in there populated but no acive error im not sure how that works when its fixed
  function getLength(obj) {
    return Object.entries(obj).length;
  }
  function getSubset(formInputsForStep) {
    //need data on how many are in the subset like have a certain number of form feilds shown for each step
    let arr = arr.slice(formInputsForStep);
    //can probably leave on the earlier ones as there shouldnt be any errors from earlier and they should be added to touched...
    //maybe idk how it will react when i show diff ones it may show all so i just wont stress about earlier ones
  }
  function hasBeenTouched(arr) {
    arr = arr.slice();
    arr = getSubset(arr); //this goes in below but subset needs to know where to slice
    let len = getLength(arr);
    // return len === lengthThusFar //passed in or derived from prop where how many steps so far
  }

  function hasErrors(arr) {
    arr = arr.slice();
    arr = getSubset(arr); //this goes in below
    let len = getLength(arr);
    return len > 0;
  }
  return (
    <div>
      <button
        className='btn btn-primary btn-block mt-4'
        onClick={() => {
          setStep((prev) => prev - 1);
          console.log("step", step);
        }}
        disabled={step < 1}
      >
        Prev
      </button>
      <button
        className='btn btn-primary btn-block mt-4'
        onClick={() => {
          setStep((prev) => prev + 1);

          console.log("step", step);
        }}
        disabled={false}
      >
        Next
      </button>
      {console.log(
        Object.entries(touched),
        Object.entries(errors),
        !(
          Object.entries(touched).length > 0 &&
          Object.entries(errors).length === 0
        )
      )}
    </div>
  );
}
