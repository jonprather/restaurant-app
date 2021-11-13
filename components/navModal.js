import React, { useState } from "react";
import { Content } from "./navModalContent";

export const NavModal = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='nav__hamburger'>
      <button onClick={() => setOpen(true)}>
        <i class='fa fa-bars nav__hamburger__icon fa-lg'>FUCK</i>
      </button>
      {open && (
        <Content
          onClose={() => {
            setOpen(false);
          }}
        >
          {children}
        </Content>
      )}
    </div>
  );
};
