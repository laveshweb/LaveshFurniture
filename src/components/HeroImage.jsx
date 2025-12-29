import React from 'react'

const HeroImage = ({src}) => {
  return (
    <div className="relative overflow-clip  lg:right-36 bottom-0 lg:bottom-28 lg:w-full mt-10 lg:mb-24 ">
        <div  style={{
            backgroundImage :`url(${src})`,
            backgroundPosition : "bottom",
            backgroundSize : "cover"
        }} className="apsect-video saturate-120 h-[330px] lg:h-[350px] lg:w-[650px]  bg-zinc-200 flex
         items-center justify-center text-zinc-500 cursor-pointer hover:scale-105 
         transition-all duration-300 ease-in-out">
            {/* Image Placeholder */}
            {src ? "" : <span className='text-lg'>src</span>}
            <p>lavesh</p>

        </div>
    </div>
  )
}

export default HeroImage