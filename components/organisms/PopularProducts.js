import React from "react";
import MenuItem from "@/components/MenuItem";
import Loading from "@/components/atoms/Loading";
import useProducts from "@/components/hooks/useProducts";

export default function popularProducts() {
  const updatedProducts = useProducts();

  return (
    <main class='popular-products' id='popular-products'>
      <div class='popular-products-heading-container'>
        <h2 class='popular-products-heading-container-subheading heading-small--black'>
          Popular Menu{" "}
        </h2>
        <h1 class='heading heading-2'>Amazing Delicacies Served</h1>
      </div>
      <div class='popular-products-container-wrapper'>
        <div class='popular-products-container'>
          <Loading />
          {updatedProducts?.slice(0, 3).map((product) => {
            console.log(product);
            return <MenuItem {...product} />;
          })}
        </div>
      </div>
      <div class='popular-products-button-box'>
        <div class='btn-wrapper--3 '>
          <button class=' btn'>
            {" "}
            <a href='/menu'>See All Menu</a>
          </button>
        </div>
      </div>
    </main>
  );
}
