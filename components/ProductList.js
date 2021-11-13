import Link from "next/link";

import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
              {/* //so a product is an object with properties of name desc etc  */}
              {/* so here he is being terse and saying product= {product} */}
              {/* //ok here want to pass in the needed props to render wha ti want from the product attributes */}
              {/* //not sure exactly what to pass in but this is from product props in restaturant 
              to popProducts down to menu item 
              // feel freid but getting closer to what i wanted here
              */}
              {/* //wtf is the spread in product shit here.... */}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
