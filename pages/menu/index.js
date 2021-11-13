import React from "react";
import Link from "next/link";

import commerce from "../../lib/commerce";
import CategoryList from "../../components/CategoryList";
import ProductList from "../../components/ProductList";
import MenuItem from "../../components/MenuItem";
export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <React.Fragment>
      <div class=' pb-80'>
        <header class='mb-40 '>{/* <x-navbar class="" /> */}</header>
        <main id='menu' class='menu__content'>
          <div class='menu-heading-container'>
            <h2 class=' menu-heading-container-subheading heading-small--black'>
              {" "}
              Menu{" "}
            </h2>
            <h1 class='heading heading-2'>Delicious Delicacies </h1>
          </div>

          <div class='menu__content-title'>
            {/* //THIS WILL BE CATEGORY LIST CAN MAP TO HAVE THESE STYLES */}

            <h3>
              <Link href='/categories'>
                <a>Categories</a>
              </Link>
            </h3>

            <CategoryList categories={categories} />
          </div>
          {/* HERE IS PRODUCT LIST FOR ALL IF WANT THIS HERE USE PRODUCT LIST for component WITH THESE STYLES
    //can change the product styles to fit with this or it will when i fix it anyway then can import it 
    this is just product list which if i do it right will have the meuneItem component anyway
    can jsut resuse it
    */}
          {/* <ProductList products={products} /> */}

          <div class='menu-container-wrapper'>
            <div class='menu-container'>
              {products.map((product) => {
                console.log(product);
                return <MenuItem {...product} />;
              })}
              {/* <div class=' menu-container__card'>
                <div class='popular-products-container__card-image'>
                  <img alt='Menu item ' src='image' />
                </div>
                <div class='menu-container__card-body'>
                  <div class='menu-container__card-body-text'>
                    <h4 class='menu-container__card-body-text--title'>
                      'title'
                    </h4>
                    <p class='menu-container__card-body-text--paragraph'>
                      'description'
                    </p>
                  </div>
                </div>
                <div class='menu-container__card-footer'>
                  <p class='menu-container__card-footer-price'>'price'</p>
                </div>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
