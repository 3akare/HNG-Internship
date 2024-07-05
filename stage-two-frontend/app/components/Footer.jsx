import Image from "next/image";
import logo from "../../app/assets/white-logo.svg";
import left from "../../app/assets/Arrow Right.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 p-8 flex justify-center flex-col mt-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-y-8 text-white md:grid-cols-4 py-4 md:py-8">
        <Link href={"/"}>
          <div className="flex flex-col gap-6 items-baseline w-64 text-sm">
            <Image src={logo} alt="Allcast logo" />
            <p>
              We supply you the best of ceramic craft work and design to suit
              your taste.
            </p>
            <button className="bg-transparent p-2 px-4 inline-flex items-center justify-center gap-4 uppercase text-xs border rounded">
              <p>get started</p>
              <Image
                src={left}
                alt="arrow left"
                className="animate-pulse"
              ></Image>
            </button>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-y-6 md:col-span-3  md:gap-x-20 md:grid-cols-3">
          <ul className="order-2 flex flex-col gap-3 md:order-3 lg:order-2">
            <h1 className="text-base font-medium leading-normal text-white">
              About Us
            </h1>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Vision
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Strength
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Awards
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Testimonials
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Privacy policy
            </li>
          </ul>
          <ul className="order-3 flex flex-col gap-3 md:order-2 lg:order-3">
            <h1 className="text-base font-medium leading-normal text-white">
              Products
            </h1>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Pottery
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Cutlery
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Spoon
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Flower Vase
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Home made products
            </li>
          </ul>
          <ul className="order-3 flex flex-col gap-3 md:order-2 lg:order-3">
            <h1 className="text-base font-medium leading-normal text-white">
              Dealings
            </h1>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer  ">
              Home decoration
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer  ">
              Resales
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Wholesales
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Recycling
            </li>
            <li className="text-sm font-light text-neutral-200 hover:underline underline-offset-2 transition-all duration-300 cursor-pointer ">
              Luxury
            </li>
          </ul>
        </div>
      </div>
      <br />
      <hr className="border-zinc-800" />
      <br />
      <div className="text-[11px] font-normal text-white lg:text-center">
        &copy; 2024 Handercrafted. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
