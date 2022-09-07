import Link from "next/link";
import React from "react";
import Category from "./Category";

export default function CategoryList({ categories }) {
  const [activeId, setActiveId] = React.useState(1);
  if (!categories) return null;

  return (
    <div class='tabs tabs-boxed'>
      {categories.map((category) => (
        <Link key={category.slug} href={`/menu/${category.slug}`}>
          <a>
            {/* //TODO  make text larger 
            chanage default color to match my styles
          
           */}
            <a
              className={`tab ${category.id === activeId ? "tab-active" : ""} `}
              onClick={() => setActiveId(category.id)}
            >
              <Category {...category} />
            </a>
          </a>
        </Link>
      ))}
    </div>
  );
}
