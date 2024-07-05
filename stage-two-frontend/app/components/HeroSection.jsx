import Image from "next/image";
import heroimage from "../../app/assets/herosection.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container mx-auto max-w-7xl w-full rounded h-[650px] bg-neutral-100 flex items-center justify-center relative px-4">
      <div className="flex flex-col gap-6 items-center justify-center md:items-start md:gap-8">
        <div className="text-black text-center md:text-left text-5xl md:text-7xl font-black leading-[90px] md:leading-[1.25] uppercase">
          <h1>Lets</h1>
          <h1>Explore</h1>
          <div className="relative inline-block">
            <h1 className="skewed-text text-center relative z-10">Unique</h1>
          </div>
          <h1>Crafts</h1>
        </div>
        <h2 className="text-neutral-900 text-lg md:text-xl font-light capitalize">
          Elevate Your Space With Art
        </h2>
        <Link
          href={"/#shop"}
          className="w-fit h-fit bg-black text-sm py-4 px-6 text-white rounded uppercase hover:text-black hover:bg-neutral-100 transition-colors duration-300 border-black border"
        >
          shop now
        </Link>
      </div>

      <div className="absolute right-0 bottom-0 hidden md:block">
        <Image src={heroimage} alt="a girl dancing and smiling" />
      </div>
      <div className="invisible hidden md:block">
        <Image src={heroimage} alt="a girl dancing and smiling" />
      </div>
    </section>
  );
};

export default HeroSection;
