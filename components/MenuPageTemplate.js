import React from "react";
import MenuCategories from "./menuCategories";
import SectionHeader from "./Sectionheader";
import MenuItemsContainer from "./MenuItemsContainer";
export default function MenuPageTemplate({
  merchant,
  categories = [],
  products,
}) {
  return (
    <div class='pb-80'>
      <main id='menu' class='menu__content mt-40'>
        <SectionHeader heading={"Menu"} subheading={"Delicious Delicacies "} />
        <MenuCategories categories={categories} />
        <MenuItemsContainer products={products} />
      </main>
    </div>
  );
}
