import React from "react";
import Link from "next/link";

import commerce from "../lib/commerce";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import Layout from "../components/Layout";

// shit lags wtf how do i fix it lagging on dom updates...
// export async function getStaticProps() {
//   const merchant = await commerce.merchants.about();
//   const { data: categories } = await commerce.categories.list();
//   const { data: products } = await commerce.products.list();

//   return {
//     props: {
//       merchant,
//       categories,
//       products,
//     },
//     // time: 1000,////????
//   };
// }

export default function IndexPage() {
  // { merchant, categories, products }
  return (
    <div>NADA</div>
    // <React.Fragment>
    //   <Layout>
    //     <h1>{merchant.business_name}</h1>

    //     <h3>
    //       <Link href='/categories'>
    //         <a>Categories</a>
    //       </Link>
    //     </h3>

    //     <CategoryList categories={categories} />

    //     <h3>
    //       <Link href='/products'>
    //         <a>Products</a>
    //       </Link>
    //     </h3>

    //     <ProductList products={products} />
    //   </Layout>
    // </React.Fragment>
  );
}
