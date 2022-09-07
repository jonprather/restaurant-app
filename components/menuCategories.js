import React from "react";
import Link from "next/link";
import CategoryList from "./CategoryList";

export default function MenuCategories(categories) {
  console.log("wtf,", categories);
  return (
    <div class='menu__content-title flex flex-col justify-center items-center'>
      {/* //THIS WILL BE CATEGORY LIST CAN MAP TO HAVE THESE STYLES */}

      <h3>
        <h3 className='text-4xl uppercase'>Categories</h3>
        {/* TODO do i really need a category list page?
         I mean all that info will be on menu page so...
         */}
      </h3>

      <CategoryList categories={categories} />
    </div>
  );
}
