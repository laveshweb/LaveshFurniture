import React from 'react'
import NavBtn from './NavBtn'
import {Menu , Phone} from 'lucide-react'

const Header = () => {
  return (
   <header className=' border-b border-b-zinc-300 bg-white/50 backdrop-blur-lg min-w-full  py-5 
   sm:px-24 max-w-7xl overflow-x-clip'>
    <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="text-3xl impact relative uppercase tracking-tight text-zinc-900 ml-4">
          Furniture <sup className='absolute font-thin text-xs'>TM</sup>
        </div>

        {/* Desktop  Nav */}
        <nav className="hidden lg:flex items-center space-x-8"
        >
          {/* Links */}
          <NavBtn>Home</NavBtn>
          <NavBtn>About</NavBtn>
          <NavBtn>Works</NavBtn>
          <NavBtn>Gallery</NavBtn>
          <NavBtn>Sevice</NavBtn>

          {/* Contact Button */}
          <button className="flex items-center space-x-2 bg-zinc-900 text-white text-sm py-4 px-6 rounded-full 
          cursor-pointer transition-all duration-150 ease-in ml-4 hover:bg-transparent 
          border border-zinc-900 hover:text-zinc-900"><Phone size={16}/><span>Contact Us</span></button>

        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden"> 
          <Menu className="size-7 text-zinc-900 mr-5 cursor-pointer"/>
        </div>
    </div>

   </header>
  )
}

export default Header