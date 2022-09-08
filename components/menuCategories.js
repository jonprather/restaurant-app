import React from "react";
import Link from "next/link";
import CategoryList from "./CategoryList";

export default function MenuCategories(categories) {
  return (
    <div class='menu__content-title flex flex-col justify-center items-center'>
      <h3 className='text-4xl uppercase'>Categories</h3>
      <CategoryList categories={categories} />
    </div>
  );
}
