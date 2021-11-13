import React from "react";

export default function NavModal() {
  return (
    <div class='nav-hamburger'>
      <div>
        <button>
          <span class='material-icons'>menu</span>
        </button>

        <div role='navigation' aria-label='Toggle Open'>
          <div class='nav-hamburger-menu'>
            <span>
              <a href='/menu'>Menu</a>
            </span>
            <span>
              {" "}
              <a href='home#popular-products'>Our Specials</a>{" "}
            </span>
            <span>
              <a href='home#about'> About Us </a>{" "}
            </span>
            <span>
              <a href='home#footer'>Our Locations</a>
            </span>{" "}
            <span>Our Chefs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
