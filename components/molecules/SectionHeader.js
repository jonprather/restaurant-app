import React from "react";

export default function SectionHeader({
  heading,
  subheading,
  headingClassName = "heading-2",
  containerClassname = "mb-36",
  children,
}) {
  // const containerClassname = [containerClassname].join(" ").trim();
  return (
    <div className={containerClassname} style={{ minWidth: "fit-content" }}>
      {/* TODO remove margin bottom here to make it more flexible component but it will break else where  */}
      {/* Yeah fix it and universalize the styling somehow can pass a prop for margins or not */}
      <h1 className=' menu-heading-container-subheading heading-small--black uppercase'>
        {heading}
      </h1>
      <h2 className={headingClassName}>{subheading}</h2>
      {children}
    </div>
  );
}
