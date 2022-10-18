import React, { useEffect, useState } from "react";

import Category from "@/components/atoms/Category";

export default function CategoryList({ categories: { categories } = [] }) {
  if (!categories) return null;

  categories = categories.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className='menu__categories'>
      {categories?.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}
