import React, { useState } from "react";
import { Content } from "@/components/molecules/navModalContent";
import Hamburger from "hamburger-react";
import { BiMenu } from "react-icons/bi";
export const NavModal = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <button
      className='nav__hamburger fa fa-bars nav__hamburger__icon fa-lg w-min'
      onClick={() => setOpen(true)}
      aria-label='Hamburger Menu button'
    >
      <BiMenu />
      {/* <Hamburger aria-label='Hamburger Menu Icon' /> */}
      {isOpen && (
        <Content
          onClose={() => {
            setOpen(false);
          }}
        >
          {children}
        </Content>
      )}
    </button>
  );
};
