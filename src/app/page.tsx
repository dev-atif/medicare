import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import CareSection from "./Components/Care Section/CareSection";
import ProductDealList from "./Components/Product Deal/ProductDealList";
import ConsulationSection from "./Components/Consulation/ConsulationSection";
import TrendingProduct from "./Components/Trendind Product/TrendingProduct";
import OfferSection from "./Components/Offer Section/OfferSection";

export default function Home() {
  return (
  <main className="px-5 pb-20">
   <section>
    <HeroSection/>
   </section>
   <section>
    <CareSection/>
   </section>
   <section>
    <ProductDealList/>
   </section>
   <section>
    <ConsulationSection/>
   </section>
   <section><TrendingProduct/></section>
   <section>
    <OfferSection/>
   </section>
  </main>
  );
}
