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
      className="bg-slate-800 w-full h-screen md:flex flex-row justify-evenly my-auto mx:auto"
      id="About"
    >
      <div className="md:flex max-md:flex-col md:flex-col md:w-100 md:h-100 my-auto mx:auto pl-10">
        <h1 className="text-white text-3xl font-mono font-bold w-50">
          Hi, I'm Prince
        </h1>
        <br/>
          <h1 className="text-white text-3xl font-mono font-bold">I am a {skills[currentSkillIndex]} 👋
          </h1>
      </div>
      <div></div>
      <div className="md:w-32 md:h-32  bg-my-image object-center  bg-cover rounded-full md:mx-auto md:my-auto py-35 px-35  "></div>
    </div>
  );
};

export default About;
