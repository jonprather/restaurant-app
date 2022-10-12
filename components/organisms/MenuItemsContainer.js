import React from "react";
import MenuItem from "@/components/molecules/MenuItem";
import useProducts from "@/components/hooks/useProducts";

export default function MenuItemsContainer() {
  const updatedProducts = useProducts();
  // TODO this is working for /menu (page without slug)
  return (
    <div className='menu-container-wrapper'>
      <div className='menu-container'>
        {updatedProducts?.map((product) => {
          return <MenuItem key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}
