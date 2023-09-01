// import { useEffect, useState } from "react";
// import { TypeAnimation } from 'react-type-animation';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Image from '../assets/Prince.jpg'

const About = () => {
  // const skills = [
  //   "FrontEnd Developer",
  //   "React Native Developer",
  //   "FullStack Developer",
  // ];
  // const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  //   }, 2000);

  //   return () => clearInterval(interval); // Clean up the interval on component unmount
  // }, []);

  return (
    <div  className=" flex w-full h-screen  bg-gradient-to-b from-slate-950 via-slate-900 to-slate-700">
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row">
     <div className='mt-20 overflow-hidden pb-2/3 rounded-2xl h-48 w-48'>
          <img src={Image} alt="my profile" className="h-full w-full object-cover"/>
        </div>
      <div className="flex flex-col justify-center h-full px-4">
        <h2 className="text-4xl sm:text-4xl font-bold text-white">
          I'm a React Native Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md ">
        I am currently working on an E-commerce project using technologies like React Native, Redux, RazorPay API Gateway, Native Wind, and others, with 1 year of experience in React Native.
        </p>
        <div>
          <button className="flex flex-row bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md w-fit px-4 py-2">
           Portfolio
           <span>
           <MdOutlineKeyboardArrowRight />
           </span>
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default About;




      {/* <div className="md:flex max-md:flex-col md:flex-col md:w-100 md:h-100 my-auto mx:auto pl-10 max-md:w-80">
        <h1 className="text-white text-3xl font-mono font-bold w-50">
          Hi, I'm Prince
        </h1>
        <br/>
          <h1 className="text-white text-3xl font-mono font-bold">I am a {skills[currentSkillIndex]} 👋
          </h1>
      </div>
      <div className="md:w-32 md:h-32  bg-my-image object-center  bg-cover rounded-full md:mx-auto md:my-auto py-35 px-35"></div> */}
