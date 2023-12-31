// import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import pdf from '../assets/Prince Suryavanshi (2).pdf'

const links=[
    {
        id:1,
        child:(
            <>
                    LinkedIn <FaLinkedin size={30} />
                    </>
        ),
        link:'https://www.linkedin.com/in/prince-suryavanshi-65662717b/'
    },
    {
        id:2,
        child:(
            <>
                    GitHub <FaGithub size={30} />
                    </>
        ),
        link:'https://github.com/Princesury'
    },
    {
        id:3,
        child:(
            <>
                    Gmail <HiOutlineMail size={30} />
                    </>
        ),
        link:'mailto:suryavanshiprince123@gmail.com'
    },
    {
        id:4,
        child:(
            <>
                    Resume <BsFillPersonLinesFill size={30} />
                    </>
        ),
        link:pdf
    },
]

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed ms:hidden'>
        <ul>
           {
            links.map(({id,child,link})=>{
                return(
                    <li key={id} className='flex justify-center items-center px-4 w-40 h-14 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md'>
                    <a href={link}
                    className='flex justify-between items-center w-full text-white'
                    target='_blank'
                    rel='noreferrer'
                      >
                        {
                            child
                        }
                    </a>
                </li>
                )
            })
           }
        </ul>
    </div>
  )
}

export default SocialLinks