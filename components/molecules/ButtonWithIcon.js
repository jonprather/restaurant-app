import React from "react";

export default function ButtonWithIcon({
  eventHandler,
  Icon,
  text,
  styles = "text-gray-800",
}) {
  //   const Icond = Icon();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        eventHandler();
      }}
      className='flex active:translate-y-1'
    >
      <Icon />

      <span className={`text-2xl font-normal ${styles}`}>{text}</span>
    </button>
  );
}
