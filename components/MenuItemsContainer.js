import React from "react";
import MenuItem from "./MenuItem";
import useProducts from "@/components/hooks/useProducts";

export default function MenuItemsContainer({ products }) {
  const updatedProducts = useProducts(products);

  return (
    <div class='menu-container-wrapper'>
      <div class='menu-container'>
        {updatedProducts?.map((product) => {
          return <MenuItem {...product} />;
        })}
      </div>
    </div>
  );
}
