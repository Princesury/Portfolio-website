// import React from 'react' 
// import {HashLink as Link} from 'react-router-hash-link'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className='bg-slate-900 p-5 shadow-2xl flex flex-row justify-between w-full align-middle'>
      <div className='bg-slate-900 font-bold text-gray-300 sm:text-3xl'>
        <text className=''>Prince</text>
      </div>
      <div className='flex align-middle gap-3'>
        <Link to='/'  className='text-gray-400   font-noto sm:text-lg font-medium'>About</Link>
        <Link to='/Portfolio'className='text-gray-400   font-noto sm:text-lg font-medium'>Portfolio</Link>
        <Link to='/Projects' className='text-gray-400   font-noto sm:text-lg font-medium'>Projects</Link>
        <Link to='/Contact' className='text-gray-400  font-noto sm:text-lg font-medium'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar