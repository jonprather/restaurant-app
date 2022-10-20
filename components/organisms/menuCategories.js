import React from "react";
import Link from "next/link";
import CategoryList from "@/components/molecules/CategoryList";

export default function MenuCategories(categories) {
  return (
    <div className=' mb-24'>
      <CategoryList categories={categories} />
    </div>
  );
}
