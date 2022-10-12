import React, { useState } from "react";
import { Content } from "@/components/molecules/navModalContent";
import Hamburger from "hamburger-react";
export const NavModal = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='nav__hamburger'>
      <button onClick={() => setOpen(true)}>
        <i className='fa fa-bars nav__hamburger__icon fa-lg'>
          <Hamburger />
        </i>
      </button>
      {isOpen && (
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
