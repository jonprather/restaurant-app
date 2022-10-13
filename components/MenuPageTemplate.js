import React from "react";
import MenuCategories from "./organisms/menuCategories";
import SectionHeader from "@/components/molecules/SectionHeader";
import MenuItemsContainer from "@/components/organisms/MenuItemsContainer";
export default function MenuPageTemplate({ categories = [] }) {
  return (
    <div className='pb-80'>
      <main id='menu' className='menu__content mt-40'>
        <SectionHeader heading={"Menu"} subheading={"Delicious Delicacies"} />
        {/* TODO consider Categories option here
        check out the headings stuff it looks broke liek not the right distances ie in review section  also should be uppercase for the sub heading
        
         */}
        <MenuCategories categories={categories} />
        <MenuItemsContainer />
      </main>
    </div>
  );
}
