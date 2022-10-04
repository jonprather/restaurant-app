import React, { useEffect, useState } from "react";

import Category from "@/components/Category";

export default function CategoryList({ categories: { categories } = [] }) {
  if (!categories) return null;

  categories = categories.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <ul class='flex gap-4 menu__categories'>
      {categories?.map((category) => (
        <Category category={category} />
      ))}
    </ul>
  );
}
