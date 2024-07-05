import Image from "next/image";
import logo from "../../app/assets/logo.svg";
import search from "../../app/assets/search.svg";
import cart from "../../app/assets/cart.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="container mx-auto w-full max-w-7xl flex items-center justify-between p-4">
        <nav className="flex flex-row items-center gap-12">
          <div className="flex flex-col gap-1 md:hidden">
            <div className="w-5 h-[1.75px] bg-black"></div>
            <div className="w-5 h-[1.75px] bg-black"></div>
            <div className="w-5 h-[1.75px] bg-black"></div>
          </div>
          <Link href="/">
            <Image src={logo} alt="Handcrafted logo"></Image>
          </Link>
        </nav>
        <ul className="hidden md:flex flex-row items-center gap-12 font-normal text-xs uppercase">
          <Link
            href={"/"}
            className="hover:underline underline-offset-4 transition-all duration-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/#shop"}
            className="hover:underline underline-offset-4 transition-all duration-500 cursor-pointer"
          >
            Shop
          </Link>
          <li className="hover:underline underline-offset-4 transition-all duration-500 cursor-pointer">
            About
          </li>
          <Link
            href={"/#shop"}
            className="hover:underline underline-offset-4 transition-all duration-500 cursor-pointer"
          >
            Deals
          </Link>
          <li className="w-fit h-fit bg-black text-sm py-2 px-6 text-white rounded uppercase cursor-pointer hover:text-black hover:bg-white transition-colors duration-300 border border-black">
            Sign Up
          </li>
        </ul>
        <ul className="flex flex-row items-center gap-12">
          <Image
            src={search}
            alt="search icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <div className="relative">
            <Image
              src={cart}
              alt="cart"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <span className="absolute rounded-full bg-red-500 size-4 -z-10 -top-[10px] -right-[10px] text-xs inline-flex items-center justify-center animate-pulse text-white">
              3
            </span>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
