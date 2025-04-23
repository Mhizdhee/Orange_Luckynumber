import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import HowToPlay from "../Components/HowToPlay";
import Testimonial from "../Components/Testimonial";
import Faq from "../Components/FAQSection";
import Footer from "../Components/Footer";
import Socials from "../Components/Socials";
import LuckyNumberBar from "../Components/LuckyNumberBar";

const LandingPage: React.FC = () => {
  const howToPlayRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <section className="sticky top-0 z-50">
          <LuckyNumberBar triggerRef={howToPlayRef} />
        </section>
        <HeroSection />
        <div ref={howToPlayRef}>
          <HowToPlay />
          <Testimonial />
          <Faq />
          <Footer />
          <Socials />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
