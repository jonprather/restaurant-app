import React from "react";

export default function ButtonWithIcon({ eventHandler, Icon, text }) {
  //   const Icond = Icon();
  return (
    <button className='flex'>
      <Icon />

      <span className='text-2xl font-normal text-gray-800'>{text}</span>
    </button>
  );
}
