"use client";
import ProductCard from "../../app/components/ProductCard";
import { usePathname } from "next/navigation";
import { productItems } from "../../data";

const Products = () => {
  const path = usePathname();

  return (
    <section
      className="container mx-auto w-full max-w-7xl px-8 space-y-4"
      id="shop"
    >
      {path === "/" ? (
        <h1 className="uppercase font-bold text-xl">Products</h1>
      ) : (
        <h1 className="uppercase font-bold text-xl">Similar Items</h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {productItems.map(
          ({ id, image, productName, price, productDescriptionShort }) => (
            <ProductCard
              key={id}
              id={id}
              image={image}
              productName={productName}
              price={price}
              productDescriptionShort={productDescriptionShort}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Products;
