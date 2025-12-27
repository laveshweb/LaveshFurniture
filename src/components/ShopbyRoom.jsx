import React, { useState } from 'react'
import {roomDetails} from '../assets/data'
import RoomLink from './RoomLink'
import Dynamic from './Dynamic'

const ShopbyRoom = () => {
    const initialImageSrc = roomDetails[0]?.src || ""
    const [currentImageSrc , setCurrentImageSrc] = useState(initialImageSrc)
    const handleMouseEnter = (src) => {
        setCurrentImageSrc(src)
    }
    const handleMouseLeave = () => {
        setCurrentImageSrc(initialImageSrc)
    }

  return (
    <section className='relative max-w-7xl mx-auto p-4 sm:p-8 mt-20 mb-20'>
        <h2 className="heading-2 impact">
            BEST SHOP BY  <br/> Room
        </h2>
            <div className="flex flex-col lg:flex-row lg:space-x-20 ">
                {/* "Left Side Content" */}
                <div className="lg:w-1/3">{roomDetails.map((room) => (
                    <RoomLink key={room.name} onMouseEnter={() => handleMouseEnter(room.src)} 
                    onMouseLeave={handleMouseLeave}>{room.name}</RoomLink>
                ))}
                </div>
                {/* Right side content */}
                <Dynamic src={currentImageSrc} />
            </div>
    </section>
  )
}

export default ShopbyRoom