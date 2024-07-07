import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  id,
  image,
  productName,
  price,
  productDescriptionShort,
}) => {
  return (
    <div className="w-full sm:w-2/3 md:w-52 h-fit m-4">
      {/* <div className="bg-black w-full h-64"></div> */}
      <Image
        src={image}
        alt={productName + "-" + id}
        width={0}
        height={0}
        className="w-full h-64 object-cover"
      />
      <div className="flex flex-col gap-4 h-1/5 w-full text-xs py-4">
        <h1 className="font-medium text-sm uppercase">{productName}</h1>
        <span>${price}</span>
        <p className="text-zinc-500">{productDescriptionShort}</p>
        <button className="py-3 text-white bg-black font-semibold uppercase leading-[18px] tracking-wide border border-black justify-center items-center gap-[3px] inline-flex hover:text-black hover:bg-white transition-colors duration-300 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
