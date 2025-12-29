import React from 'react'
import BigImage from './BigImage'
import SmallImage from './SmallImage'
import IMAGE5 from '../assets/images/image5.jpg'
import IMAGE6 from '../assets/images/image6.jpg'
import IMAGE7 from '../assets/images/image7.jpg'
import IMAGE8 from '../assets/images/image8.jpg'
import IMAGE9 from '../assets/images/image9.jpg'

const NewArrival = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-8 mt-10 mb-20 ">
        <h2 className="text-6xl lg:text-9xl impact uppercase leading-tight mb-8 ">NEW ARRIVAL</h2>
        <div className="grid lg:grid-cols-4 gap-8 ">
            {/* Featured Lage Image */}
            <div className="lg:col-span-2 ">
                <div className="flex flex-col-reverse card-hover">
                    {/* Image  PlaceHolder*/}
                    <BigImage src={IMAGE5}/>

                    {/* Text Content */}
                    <div className="mt-6 md:mt-0 pt-4 flex justify-between ">
                        <div>
                            <p className="text-lg uppercase font-bold text-zinc-600">The Fintest Collection</p>
                            <h3 className="text-lg font-bold mb-4">Options, Starting</h3>
                        </div>
                    </div>
                    <p className="relative text-xl font-bold bottom-5 text-right right-2">$1000</p>
                    <p className="text-sm text-zinc-500">10+ Variants</p>

                </div>
            </div>
            {/* Featured Small Products */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8  sm:mt-22">
                {/* Small Card 1*/}
                <div className="flex flex-col  card-hover h-[420px] sm:h-[300px]">
                {/* Image Placeholder */}
                <SmallImage src={IMAGE6} />
                {/* Text Details */}
                <div className="w-full  pt-2 ">
                    <div>
                        <h4 className="text-lg uppercase font-semibold text-[18px]">Coffee Table</h4>
                    </div>
                    <div className='flex justify-between '>
                    <p className="text-xl font-semibold ">$350</p>
                    <p className="text-base text-zinc-500 mt-[2px]">20+ Variants</p>

                    
                    </div>
                       
                </div>
                </div>
                  {/* Small Card 2*/} 
                  <div className="flex flex-col  card-hover h-[420px] sm:h-[300px]  ">
                {/* Image Placeholder */}
                <SmallImage  src={IMAGE7}/>
                {/* Text Details */}
                <div className="w-full  pt-2 ">
                    <div>
                        <h4 className="text-lg uppercase font-bold text-[18px]">Valvet Chair</h4>
                    </div>
                    <div className='flex justify-between '>
                    <p className="text-xl font-semibold ">$350</p>
                    <p className="text-base text-zinc-500 mt-[2px]">30+ Variants</p>
                    </div>
                       
                </div>
                </div>
                {/* Small Card 3 */}
                <div className="flex flex-col  card-hover  h-[420px] sm:h-[300px]">
                {/* Image Placeholder */}
                <SmallImage src={IMAGE8} />
                {/* Text Details */}
                <div className="w-full  pt-2 ">
                    <div>
                        <h4 className="text-lg uppercase font-bold text-[18px]">Valvet Chair</h4>
                    </div>
                    <div className='flex justify-between '>
                    <p className="text-xl font-semibold ">$350</p>
                    <p className="text-base text-zinc-500 mt-[2px]">30+ Variants</p>
                    </div>
                       
                </div>
                </div>
                {/* Small Card 4 */}
                
                <div className="flex flex-col   card-hover  h-[420px] sm:h-[300px]">
                {/* Image Placeholder */}
                <SmallImage  src={IMAGE9}/>
                {/* Text Details */}
                <div className="w-full  pt-2 ">
                    <div>
                        <h4 className="text-lg uppercase font-bold text-[18px]">Valvet Chair</h4>
                    </div>
                    <div className='flex justify-between '>
                    <p className="text-xl font-semibold ">$350</p>
                    <p className="text-base text-zinc-500 mt-[2px]">30+ Variants</p>
                    </div>
                       
                </div>
                </div>

                
            </div>

        </div>
        <div className="flex justify-center mt-12 lg:mt-15">
            <button className="text-[17px] lg:text-lg font-medium border border-zinc-900 px-8 
            lg:px-8 py-3 rounded-full  hover:text-white hover:bg-zinc-900 transition-all 
            cursor-pointer ease-in duration-200 hover:animate-wiggle  ">
                    Explore
            </button>
        </div>
    </section>
  )
}

export default NewArrival