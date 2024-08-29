'use client'
import Image from "next/image";
import HeroSection from "./Components/HeroSection/HeroSection";
import CareSection from "./Components/Care Section/CareSection";
import ProductDealList from "./Components/Product Deal/ProductDealList";
import ConsulationSection from "./Components/Consulation/ConsulationSection";
import TrendingProduct from "./Components/Trendind Product/TrendingProduct";
import OfferSection from "./Components/Offer Section/OfferSection";

export default function Home(props:any) {

  return (
    <main className="lg:px-5 px-3 pb-20">
      <section>
    <HeroSection/>
   </section>
   <section>
    <CareSection/>
   </section>
      <section>
        <TrendingProduct props={props} />
      </section>
      <section>
    <ConsulationSection/>
   </section>

      <section>
    <OfferSection/>
   </section>
    </main>
  );
}
