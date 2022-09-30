import React from "react";

export default function ButtonWithIcon({
  eventHandler,
  Icon,
  text,
  styles = "text-gray-800",
}) {
  //   const Icond = Icon();
  return (
    <button onClick={eventHandler} className='flex'>
      <Icon />

      <span className={`text-2xl font-normal ${styles}`}>{text}</span>
    </button>
  );
}
