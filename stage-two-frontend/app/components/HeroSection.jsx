import Image from "next/image";
import heroimage from "../../app/assets/herosection.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto max-w-7xl w-full rounded h-[650px] bg-white flex items-center justify-around relative p-4">
      <div className="flex flex-col gap-6 items-center justify-center md:items-start md:gap-8 w-2/3 basis-1">
        <div className="text-black text-center md:text-left text-5xl md:text-7xl font-black leading-[90px] md:leading-[1.25] uppercase">
          <div className="relative inline-block">
            <h1 className="skewed-text text-center relative z-10 after:!bg-black hover:after:!bg-amber-300 hover:!text-black text-white">
              Lets
            </h1>
          </div>
          <h1>Explore</h1>
          <div className="relative inline-block">
            <h1 className="skewed-text text-center relative z-10">Unique</h1>
          </div>
          <h1>Crafts</h1>
        </div>
        <h2 className="text-neutral-900 md:text-lg text-center md:text-left lg:text-xl font-light capitalize">
          Elevate Your Space With Art
        </h2>
        <Link
          href={"/#shop"}
          className="w-fit h-fit bg-black text-sm py-4 px-6 text-white rounded uppercase hover:text-black hover:bg-neutral-100 transition-colors duration-300 border-black border"
        >
          shop now
        </Link>
      </div>
      <div className="items-center justify-center w-1/3 h-full hidden md:flex">
        <Image src={heroimage}></Image>
      </div>
    </section>
  );
};

export default HeroSection;
