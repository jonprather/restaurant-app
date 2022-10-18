import React from "react";
import Link from "next/link";
import CategoryList from "@/components/molecules/CategoryList";

export default function MenuCategories(categories) {
  return (
    <div className='menu__content-title'>
      <CategoryList categories={categories} />
    </div>
  );
}
