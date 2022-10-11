import React from "react";
import MenuItem from "./MenuItem";
import useProducts from "@/components/hooks/useProducts";

export default function MenuItemsContainer() {
  const updatedProducts = useProducts();

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
