import Link from "next/link";
import React from "react";
import Category from "./Category";

export default function CategoryList({ categories: { categories } = [] }) {
  const [activeId, setActiveId] = React.useState(1);
  if (!categories) return null;

  return (
    <ul class='flex gap-4 menu__categories'>
      {categories?.map((category) => (
        <Link
          key={category.slug}
          href={`/menu/${category.slug}`}
          scroll={false}
        >
          {/* //TODO  make text larger 
            //TODO if using the link route to new page ie menu/fish then make that workwith underline
            //perhps dont do it that way or make the underline  check the url?
            chanage default color to match my styles
          
           */}
          {/* TODO again do i want this to function as a link or just a filter or spa with no route */}
          <a onClick={() => setActiveId(category.id)}>
            {/* //should  use the same logic as the nav bar
              TODO replace these daisy ui classes either with tail wiind or my scss type classes
              ie for color on hover also that underline on click should work as well
              same bolding and stuff as well
               */}
            <li
              className={` ${
                category.id === activeId ? "menu__categories--tab-active" : ""
              }`}
            >
              {category.name}
            </li>

            {/* <Category {...category} /> */}
          </a>
        </Link>
      ))}
    </ul>
  );
}
