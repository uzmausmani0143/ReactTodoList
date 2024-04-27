import React from 'react'
import "../components/Navbar.css"

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-white p-3'> 
       <div className="logo">
       <span className='font-bold-text-xl mx-9 my-2'>iTask</span> 
       </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer hover:font-bold hover:text-red-600 transition-all'>About</li>
            <li  className='cursor-pointer hover:font-bold  hover:text-red-600 transition-all  text-yellow'>Home</li>
            <li className='cursor-pointer hover:font-bold  hover:text-red-600 transition-all text-yellow'>Contact Us</li>
            <li className='cursor-pointer hover:font-bold  hover:text-red-600 transition-all text-yellow'>Your Tasks</li>
        </ul> 
    </nav>
  )
}

export default Navbar