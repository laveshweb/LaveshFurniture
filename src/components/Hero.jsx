import { ArrowRight } from 'lucide-react'
import React from 'react'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
      <section className='max-w-7xl mt-14 lg:mt-30 mx-auto p-4 sm:p-8 mb-20 '>
    
    <div className="flex relative flex-col lg:flex-row  lg:space-x-12  overflow-x-clip z-99">
        {/* Left Content */}
        <div className="lg:w-1/2">
            <h1 className="text-7xl sm:text-8xl font-extrabold leading-none mb-8">
                <span className="block impact lg:text-[250px]">FINE</span>
                <span className="block impact lg:text-[250px] tracking-tight lg:mt-10">FURISHINGS</span>
            </h1>
            {/* SubText */}
            <div className="text-base lg:text-lg text-zinc-600 max-w-d lg:w-full mb-8 py-2 ">
                Choosing the right furniture for you home online will add elegance and functionality to your space.
                we offer a curated collection of fine furnishing
            </div>
            {/* CTA Button */}
            <button className="group flex items-center  space-x-3 bg-zinc-900
             text-white text-sm font-semibold py-4  rounded-full transition-all duration-150 
             hover:bg-transparent border border-zinc-900 hover:border-zinc-900 hover:text-black 
             ease-in lg:absolute lg:text-lg   lg:py-5 px-4 lg:px-10 bottom-10 right-10 hover:animate-wiggle">
                <span>Shop Now</span>
                <ArrowRight size={20} className='group-hover:rotate-360  transition-all duration-500 ease-in'/>
            </button>
        </div>
        {/* right Content */}
        <HeroImage/>

    </div>
    

  </section>
  )
}

export default Hero