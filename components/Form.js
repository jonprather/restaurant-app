import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
//...

export default function Form({ step = 0 }) {
  let [steps, setSteps] = React.useState(0);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  //   const watchAllFields = watch();
  //   const watchShowAge = watch("age", false);
  //hmm could maybe do it if do rerouting or force refresh of page or something..
  const age = watch("age", 0);
  //   const age = watch("age", 0);
  //   const age = watch("age", 0);

  return (
    <>
      {age < 18 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input
              type='number'
              {...register("age", { required: true, min: 18, max: 99 })}
            />
          </>

          {errors.lastName}

          <input type='submit' />
        </form>
      )}
      {age > 18 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.lastName}

          <>
            <input {...register("email", { required: true, maxLength: 20 })} />
            <input {...register("lastName2", { pattern: /^[A-Za-z]+$/i })} />
            <input type='number' {...register("cc", { min: 18, max: 99 })} />
          </>

          <input type='submit' />
        </form>
      )}
    </>
  );
}

//prob with this is idk how to get it to show a hidden sub input like it doesnt re render
// i can perhaps use another whole input just switch it out? and have the data saved in state? but doesnt that reproduce the data?
