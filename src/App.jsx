import { useEffect, useRef } from "react";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import NewArrival from "./components/NewArrival";
import ShopbyRoom from "./components/ShopbyRoom";
import Getinspired from "./components/Getinspired";
import Footer from "./components/Footer";

// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

const App = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create smooth scroll
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.8,
      effects: true,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <Header />
      <hr className="text-zinc-300 -mt-4" />

      {/* Scroll Wrapper */}
      <div id="smooth-wrapper">
        <main id="smooth-content" ref={contentRef}>
          <Hero />
          <hr className="text-zinc-300 h-[3px] bg-black" />

          <Trending />
          <hr className="text-zinc-300 h-[3px] bg-black" />

          <NewArrival />
          <hr className="text-zinc-300 h-[3px] bg-black" />

          <ShopbyRoom />
          <hr className="text-zinc-300 h-[3px] bg-black" />

          <Getinspired />
          <hr className="text-zinc-300 h-[3px] bg-black" />
      {/* Footer fix after adding smooth scroller*/}
      <Footer />
      <div className="w-full h-[120px]"></div>
        </main>
      </div>

    </div>
  );
};

export default App;
