// import React from 'react'
// import {HashLink as Link} from 'react-router-hash-link'
// import { Link } from 'react-router-dom'
import { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
 
const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "Portfolio",
  },
  { id: 3, link: "Projects" },
  { id: 4, link: "Contact" },
];
const Navbar = () => {
  const [nav , setNav] = useState(false)
  return (
    <div className="bg-slate-900 px-5 sm:h-16 h-14 shadow-2xl flex flex-row justify-between w-full align-middle items-center fixed">
      <div className="bg-slate-900 text-gray-300 sm:text-5xl text-2xl">
        <h1 className="font-signature font-bold pt-1">Prince</h1>
      </div>
      <ul className="hidden md:flex gap-3">
        {links.map(({link,id})=>(       
            <li key={id} className="text-gray-400   font-noto sm:text-lg font-medium cursor-pointer hover:scale-105 duration-200">
            {link}
          </li>
          ))}
      </ul>
      <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={22}  />: <FaBars size={22} />}
      </div>
      {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-950 to-gray-600">
      {links.map(({link,id})=>(       
            <li key={id} className="px-4 cursor-point text-3xl capitalize py-6 font-bold font-raleway text-gray-400">
            {link}
          </li>
          ))}
        
      </ul>
      )}
      
      
    </div>
  );
};

export default Navbar;
