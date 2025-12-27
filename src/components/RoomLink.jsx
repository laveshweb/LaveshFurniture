import React from 'react'
import {ArrowRight} from 'lucide-react'

const RoomLink = ({children, onMouseEnter , OnMouseLeave}) => {
  return (
   <p className="group flex  justify-between items-center text-2xl 
   font-light py-4 border-b cursor-pointer border-zinc-200  hover:text-zinc-900 
   hover:font-semibold duration-200 ease-in 
   transition-colors " 
   onMouseEnter={onMouseEnter} onMouseLeave={OnMouseLeave}>
    <span>{children}</span>
    <ArrowRight size={24} className='text-zinc-900  -rotate-30 group-hover:rotate-36 duration-400 ease-in'/>
   </p>
  )
}

export default RoomLink