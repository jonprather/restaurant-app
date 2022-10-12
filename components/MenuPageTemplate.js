import React from "react";
import MenuCategories from "./organisms/menuCategories";
import SectionHeader from "@/components/molecules/SectionHeader";
import MenuItemsContainer from "@/components/organisms/MenuItemsContainer";
export default function MenuPageTemplate({ categories = [] }) {
  return (
    <div className='pb-80'>
      <main id='menu' className='menu__content mt-40'>
        <SectionHeader heading={"Menu"} subheading={"Delicious Delicacies"} />
        <MenuCategories categories={categories} />
        <MenuItemsContainer />
      </main>
    </div>
  );
}
