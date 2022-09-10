import React from "react";

export default function ButtonWithIcon({ eventHandler, Icon, text }) {
  //   const Icond = Icon();
  return (
    <button className='flex'>
      <Icon className='text-3xl font-normal mr-6 text-gray-800' />

      <span className='text-2xl font-normal text-gray-800'>{text}</span>
    </button>
  );
}
