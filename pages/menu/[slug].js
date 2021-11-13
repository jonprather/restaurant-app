import React from "react";
import MenuItem from "../../components/MenuItem";
import Link from "next/link";
import CategoryList from "../../components/CategoryList";

import commerce from "../../lib/commerce";
import ProductList from "../../components/ProductList";

export async function getStaticProps({ params }) {
  const { slug } = params;

  // const category = await commerce.categories.retrieve(slug, {
  //   type: "slug",
  // });
  const { data: categories } = await commerce.categories.list();
  let { data: products } = await commerce.products.list({
    category_slug: slug,
  });
  if (!products) products = null;
  return {
    props: {
      categories,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export default function MenuCategoryPage({ categories, products = null }) {
  return (
    <React.Fragment>
      <div class='menu__content-title'>
        {/* //THIS WILL BE CATEGORY LIST CAN MAP TO HAVE THESE STYLES */}
        <h3>
          <Link href='/categories'>
            <a>Categories</a>
          </Link>
        </h3>
        WTF HERE
        <CategoryList categories={categories} />
      </div>
      <div class='menu-container-wrapper'>
        <div class='menu-container'>
          {products?.map((product) => {
            console.log(product);
            return <MenuItem {...product} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
