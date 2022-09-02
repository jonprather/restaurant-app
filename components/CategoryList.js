import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug}>
          <div class='tabs tabs-boxed'>
            <a class='tab'>Tab 1</a>
            <a class='tab tab-active'>Tab 2</a>
            <a class='tab'>Tab 3</a>
          </div>
          <Link href={`/menu/${category.slug}`}>
            <a>
              <button className='menu-heading-container-button menu-heading-container-subheading heading-small--black'>
                <Category {...category} />
              </button>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
