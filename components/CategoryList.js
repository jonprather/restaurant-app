import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug}>
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
