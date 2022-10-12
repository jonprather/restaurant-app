import React from "react";
import MenuItem from "@/components/molecules/MenuItem";
import Loading from "@/components/atoms/Loading";
import useProducts from "@/components/hooks/useProducts";

export default function popularProducts() {
  const updatedProducts = useProducts();

  return (
    <main className='popular-products' id='popular-products'>
      <div className='popular-products-heading-container'>
        <h2 className='popular-products-heading-container-subheading heading-small--black'>
          Popular Menu{" "}
        </h2>
        <h1 className='heading heading-2'>Amazing Delicacies Served</h1>
      </div>
      <div className='popular-products-container-wrapper'>
        <div className='popular-products-container'>
          <Loading />
          {updatedProducts?.slice(0, 3).map((product) => {
            return <MenuItem key={product.id} {...product} />;
          })}
        </div>
      </div>
      <div className='popular-products-button-box'>
        <div className='btn-wrapper--3 '>
          <button className=' btn'>
            {" "}
            <a href='/menu/all'>See All Menu</a>
          </button>
        </div>
      </div>
    </main>
  );
}
