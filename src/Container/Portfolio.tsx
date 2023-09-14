// import React from 'react'
import LinkedIn from '../assets/LinkedIn.png'
import Track from '../assets/Track.jpg'
import Weather from '../assets/Weather.jpg'
import Queue from '../assets/Queue.jpg'

const detail =[
  {
    id: 1,
    src:LinkedIn,
    link:'https://github.com/Princesury/LinkedInClone'
  },
  {
    id: 2,
    src:Track,
    link:'https://github.com/Princesury/MusicPlayer'
  },
  {
    id: 3,
    src:Queue,
    link:'https://github.com/Princesury/ResQ'
  },
  {
    id: 4,
    src:Weather,
    link:'https://github.com/Princesury/LinkedInClone'
  },
]


const Portfolio = () => {
  return (
    <div  className='flex bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 w-full md:h-screen text-white'>
     <div className="max-w-screen-lg flex flex-col p-4 w-full justify-center mx-auto">
       <div className='pb-8'>
        <p className='text-4xl p-2 inline border-b-4 font-bold border-gray-500'>Portfolio</p>
        <p className='text-xl py-6'>Check out some of my work right here</p>
       </div>
       <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          detail.map(({id,src,link})=> (
          <div key={id} className='rounded-lg shadow-md shadow-gray-500 w-64 h-42 inline'>
          <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 ' />
           <div className='flex  justify-center items-center '>
             <button className='duration-200 hover:scale-105'>{<a href={link} target='_blank' className='font-bold text-xl inline text-white p-1'>CODE</a>}</button>
           </div>
          </div>
          )
          )
        }
       </div>
     </div>
  </div>
  )
}

export default Portfolio;