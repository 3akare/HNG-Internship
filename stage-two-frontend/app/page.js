import HeroSection from "./components/HeroSection";
import Logos from "./components/Logos";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="space-y-12">
      <HeroSection />
      <Logos />
      <Products />
    </main>
  );
}
