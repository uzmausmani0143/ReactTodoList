import React from 'react';
import "../components/Navbar.css";
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white p-3 '> 
      <div className="logo text-xl flex items-center"> {/* Wrap text and icon in a flex container */}
        <span className="mr-2">MyTask</span> {/* Add some margin between text and icon */}
        <FaTasks className="icon-animation" /> {/* Apply animation class */}
      </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold hover:text-red-600 transition-all'>About</li>
        <li className='cursor-pointer hover:font-bold  hover:text-red-600 transition-all  text-yellow'>Home</li>
        <li className='cursor-pointer hover:font-bold  hover:text-red-600 transition-all text-yellow'>Contact Us</li>
        <li className='cursor-pointer hover:font-bold  hover:text-red-600 transition-all text-yellow'>Your Tasks</li>
      </ul> 
    </nav>
  );
}

export default Navbar;
