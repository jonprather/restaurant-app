import React from "react";
import MenuItem from "./MenuItem";
export default function MenuItemsContainer({ products }) {
  return (
    <div class='menu-container-wrapper'>
      <div class='menu-container'>
        {products?.map((product) => {
          return <MenuItem {...product} />;
        })}
      </div>
    </div>
  );
}
