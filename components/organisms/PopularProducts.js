import React from "react";
import MenuItem from "@/components/molecules/MenuItem";
import Loading from "@/components/atoms/Loading";
import useProducts from "@/components/hooks/useProducts";
import SectionHeader from "../molecules/SectionHeader";
export default function popularProducts() {
  const updatedProducts = useProducts();

  return (
    <main className='popular-products' id='popular-products'>
      <SectionHeader
        heading={"Popular Menu "}
        subheading={"Amazing Delicacies Served"}
        headingClassName={"heading-2"}
        containerClassname={"mb-24"}
      ></SectionHeader>

      <div className='grid-container grid-cols-3-2-1 mb-24'>
        <Loading />
        {updatedProducts?.slice(0, 3).map((product) => {
          return <MenuItem key={product.id} {...product} />;
        })}
      </div>

      <div className='popular-products-button-box'>
        <div className='btn-wrapper--3'>
          <button className=' btn'>
            {" "}
            <a href='/menu/all'>See All Menu</a>
          </button>
        </div>
      </div>
    </main>
  );
}
