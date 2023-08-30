import { useEffect, useState } from "react";
// import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const skills = [
    "FrontEnd Developer",
    "React Native Developer",
    "FullStack Developer",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div
      className="bg-slate-800 w-full h-screen flex flex-row align-middle"
      id="About"
    >
      <div className="flex flex-col">
        <h1 className="text-white ml-20 text-3xl font-mono font-bold pt-32">
          Hi, I'm Prince
        </h1>
        <div className="flex flex-row relative ml-20 ">
          <h1 className="text-white text-3xl font-mono font-bold">I am a</h1>
          <h1 className="text-white ml-5 text-3xl font-mono font-bold">
            `${skills[currentSkillIndex]} 👋`
          </h1>
        </div>
      </div>
      <div className='flex align-middle pl-10 '>
      <img src='../../assets/Prince.jpg' className='h-80 w-80 ml-10 absolute rounded-full' />
      </div>
    </div>
  );
};

export default About;
