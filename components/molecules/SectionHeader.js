import React from "react";

export default function SectionHeader({ heading, subheading }) {
  return (
    <div className='menu-heading-container'>
      <h1 className=' menu-heading-container-subheading heading-small--black'>
        {heading}
      </h1>
      <h2 className='heading heading-2'>{subheading}</h2>
    </div>
  );
}
