import React from "react";
import MenuCategories from "./menuCategories";
import MenuHeader from "./MenuHeader";
import MenuItemsContainer from "./MenuItemsContainer";
export default function MenuPageTemplate({
  merchant,
  categories = [],
  products,
}) {
  return (
    <div class='pb-80'>
      <main id='menu' class='menu__content mt-40'>
        <MenuHeader />
        <MenuCategories categories={categories} />
        <MenuItemsContainer products={products} />
      </main>
    </div>
  );
}
