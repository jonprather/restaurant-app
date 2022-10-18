import React from "react";
import MenuCategories from "./organisms/menuCategories";
import SectionHeader from "@/components/molecules/SectionHeader";
import MenuItemsContainer from "@/components/organisms/MenuItemsContainer";
import Footer from "./organisms/Footer";
export default function MenuPageTemplate({ categories = [] }) {
  return (
    <>
      <div className='pb-80'>
        <main id='menu' className='menu__content mt-40'>
          <SectionHeader
            heading={"Menu"}
            subheading={"Categories"}
            headingClassName='heading-3'
            containerClassname='mb-20'
          />
          <MenuCategories categories={categories} />
          <MenuItemsContainer />
        </main>
      </div>
      <Footer />
    </>
  );
}
