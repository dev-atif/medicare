import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import CareSection from "./Components/Care Section/CareSection";

export default function Home() {
  return (
  <main className="px-5 pb-20">
   <section>
    <HeroSection/>
   </section>
   <section>
    <CareSection/>
   </section>
  </main>
  );
}
