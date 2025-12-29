import Footer from "./components/Footer";
import Getinspired from "./components/Getinspired";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import ShopbyRoom from "./components/ShopbyRoom";
import Trending from "./components/Trending"

// SCROLL SMOOTHER
import { useRef, useEffect } from "react";
import gsap from 'gsap'
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";



const App = () => {
const contentRef = useRef(null)
useEffect(() => {
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
const smoother = ScrollTrigger.create({
  content : "#smooth-content",
  smooth : 1.8,
  effects : true,

})
return () => {
  smoother && smoother.kill()
  ScrollTrigger.getAll().forEach((t) => t.kill()) 
}
}, [])



  return <div className="min-h-screen overflow-clip">
    {/* Header */}
    <Header/>
    <hr className="text-zinc-300 -mt-4"/>
    {/* MAIN */}
    <main id="smooth-content" ref={contentRef} >
      <Hero/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <Trending/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <NewArrival/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <ShopbyRoom/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>
      <Getinspired/>
      <hr className="text-zinc-300 h-[3px] bg-black relative "/>

    </main>
    {/* Footer */}
    <Footer/>

  </div>;
};

export default App;
