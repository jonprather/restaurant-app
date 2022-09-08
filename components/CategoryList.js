import Link from "next/link";
import React from "react";
import Category from "./Category";
import { useRouter } from "next/router";
export default function CategoryList({ categories: { categories } = [] }) {
  const router = useRouter();

  const [activeId, setActiveId] = React.useState("All");

  function isActiveTab(category) {
    if (!router?.query?.slug && category?.slug === "all") return true;
    return category?.slug?.toLowerCase() === router?.query?.slug?.toLowerCase();
  }
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
              TODO bad semantics here fix li nested in a
               */}
            <li
              className={` ${
                isActiveTab(category) ? "menu__categories--tab-active" : ""
              }`}
            >
              {console.log(
                category?.slug?.toLowerCase() +
                  "  " +
                  router?.query?.slug?.toLowerCase()
              )}
              {category.name}
            </li>

            {/* <Category {...category} /> */}
          </a>
        </Link>
      ))}
    </ul>
  );
}
