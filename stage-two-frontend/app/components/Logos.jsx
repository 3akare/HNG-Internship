import Image from "next/image";
import shopify from "../../app/assets/shopify.svg";
import levis from "../../app/assets/levis.svg";
import hm from "../../app/assets/h-m.svg";
import obey from "../../app/assets/obey.svg";
import lacoste from "../../app/assets/lacoste-logo.svg";
import amazon from "../../app/assets/logo-amazon.svg";

const Logos = () => {
  const logos = [hm, obey, shopify, lacoste, levis, amazon];
  return (
    <div className="w-full bg-amber-300">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-center px-16 py-2 h-24 gap-4 md:gap-12 lg:gap-16">
        {logos.map((item, idx) => {
          return (
            <Image
              key={item + idx}
              src={item}
              alt=""
              priority
              width={50}
              height={25}
              className={`size-14 sm:size-16 md:size-18 lg:size-20 ${
                idx % 3 === 0 ? "hidden md:inline" : "inline"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
