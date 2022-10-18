import React from "react";
import Link from "next/link";
import CategoryList from "@/components/molecules/CategoryList";

export default function MenuCategories(categories) {
  return (
    <div className='menu__content-title flex flex-col justify-center items-center'>
      {/* <h3 className='text-4xl uppercase'>Categories</h3>
      TODO maybe delte this and also rethink the ui for this component
       */}
      <CategoryList categories={categories} />
    </div>
  );
}

// TODO arange this so that tap targets are bigger maybe make it a grid or flex containers that break to new lines
// on mobile
