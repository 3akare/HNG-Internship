"use client";

import ProductCard from "../../app/components/ProductCard";
import plate from "../../app/assets/plate.png";
import { usePathname } from "next/navigation";

const productItems = [
  {
    id: 1,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 2,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 3,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 4,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 5,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 6,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 7,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 8,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 9,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 10,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 11,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
  {
    id: 12,
    image: plate,
    productName: "LALUDE Dinner Plate",
    price: 55000,
    rating: 5,
    productDescriptionShort:
      "Long lasting and very durable with incredible luxury",
    productDescriptionLong:
      "Long lasting and very durable with incredible luxury",
  },
];

const Products = () => {
  const path = usePathname();

  return (
    <section className="container mx-auto w-full max-w-7xl px-8 space-y-4" id="shop">
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
