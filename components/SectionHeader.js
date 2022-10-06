import React from "react";

export default function SectionHeader({ heading, subheading }) {
  return (
    <div class='menu-heading-container'>
      <h1 class=' menu-heading-container-subheading heading-small--black'>
        {heading}
      </h1>
      <h2 class='heading heading-2'>{subheading}</h2>
    </div>
  );
}
