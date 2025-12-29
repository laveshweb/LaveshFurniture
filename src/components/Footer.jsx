import React from 'react'
import SOFA from '../assets/sofa.png'
import SocialIcon from './SocialIcon'
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react"
 
const MARQUEE_COPIES = 9

const Footer = () => {
  return (
    <footer className='bg-zinc-950 text-white '>
      
      {/* Upper Area : Large Text*/}
      <div className="relative max-w-7xl mx-auto p-4 sm:p-8 py-18 lg:py-24 ">
        {/* Marquee : Dynamic Generated*/}
        <div className="flex min-w-full whitespace-nowrap animate-marquee">
            {Array.from({length:MARQUEE_COPIES}).map((_,index)=> (
                <p key={index} aria-hidden={index !== 0 ? "true" : "false"} className="text-9xl lg:text-[250px] impact 
                font-extrabold leading-none opacity-90 lg:opacity-95 pr-20 ">FURNISHINGS</p>
            ))}

      </div>
      {/* SOFA IMAGE */}
            <img src={SOFA} alt="" className=" absolute
    bottom-0
    
    sm:bottom-[-2rem]
    lg:bottom-[-1rem]
    left-1/2 -translate-x-1/2
    w-[280px]
    sm:w-[350px]
    lg:w-[450px]
    hover:animate-wiggle
    duration-700
    ease-in-out
    cursor-pointer" />
            </div>

        {/* lower Area : Copyright Area */}
        <div className="border-t border-zinc-800 py-6 lg:py-10 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row 
          justify-between items-center space-x-4 sm:space-y-0 text-sm">
            <p className="text-zinc-400 ">
              <strong>© Furniture.</strong> All rights reserved </p>
              <div className="flex space-x-3">
               <SocialIcon Icon={Instagram}/>
               <SocialIcon Icon={Facebook}/>
               <SocialIcon Icon={Twitter}/>
               <SocialIcon Icon={Linkedin}/>
               <SocialIcon Icon={Youtube}/>
              </div>
              {/* Design Credit */}
              <p className="text-zinc-400">
                Design by <strong>Lavesh Bhagwani</strong>
              </p>
          </div>
        </div>


    </footer>
  )
}

export default Footer