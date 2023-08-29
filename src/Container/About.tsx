import  { useEffect, useState } from 'react';

const About = () => {
  const skills = ['FrontEnd Developer', 'React Native Developer', 'FullStack Developer'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='bg-slate-800 w-full h-screen' id='About'>
      <h1>Hi, I'm Prince</h1>
      <div className='flex flex-row ml-5'>
        <h1>I am a</h1>
        <h1>{skills[currentSkillIndex]}</h1>
      </div>
    </div>
  );
};

export default About;
