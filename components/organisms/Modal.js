import React, { useState } from "react";
import { Content } from "../navModalContent";
import Hamburger from "hamburger-react";
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal = ({ children, isOpen, setOpen }) => {
  return (
    // TODO make this stuff parameters not hard coded
    //not sure how yet
    //the only difference is the class names here on the modal div and the button/icon
    //the logic is the same of having setIsOpen here and passing children through
    //could use that pattern make this Modal.head or something via context pattern
    //compound components right?
    // or what was the pattern for passing the styles
    //like could do that for main compoennet here then the top can be just passed in ie the button
    // i mead it has predictable stucture couldnt i pass styles for the main and for the button
    //lets pause here as i want to think of the best solution here
    <div
      className={`${
        isOpen
          ? "bg rounded-lg fixed w-2/3 top-1/2  left-1/2 -translate-x-2/4  z-50 shadow-lg"
          : ""
      } `}
    >
      <div
        onClick={() => setOpen(true)}
        className=' text-right pr-12 text-2xl relative'
      >
        {/* <i class='fa fa-bars nav__hamburger__icon fa-lg'>
          <Hamburger />
        </i> */}

        {!isOpen ? (
          ""
        ) : (
          <button className='pt-6 text-5xl '>
            <AiOutlineCloseCircle />
          </button>
        )}
      </div>
      {/* //so only render if isOpen and pass a way to close */}
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
