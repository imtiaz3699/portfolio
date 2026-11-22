import Image from "next/image";
import PortfolioNavbar from "./components/PortfolioComponents/PortfolioNavbar";
import PortfolioHeroSection from "./components/PortfolioComponents/PortfolioHeroSection";
import OurServices from "./components/PortfolioComponents/OurServices";
import WhyChooseUs from "./components/PortfolioComponents/WhyChooseUs";
import WhatOurClientSay from "./components/PortfolioComponents/WhatOurClientSay";
import FAQ from "./components/PortfolioComponents/FAQ";
export default function Home() {
  return (
    <div className="w-full bg-portfolioBg ">
        <PortfolioNavbar/>
        <PortfolioHeroSection/>
        <OurServices/>
        <WhyChooseUs/>
        <WhatOurClientSay/>
        <FAQ/>
    </div>
  );
}
