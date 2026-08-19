import React from 'react'
import Chatboat from "./Chatboat.png";
import weather from "./weather.png";
import Calculater from "./Calculater.png";


  const projects = [
    {
      id:1,
      title: "Chatboat",
      description:" Developed an AI-powered chatbot using React and JavaScript that provides real-time responses, answers user queries, offers coding assistance,",
      image:Chatboat,
      tags: ["React", "Javascript","css"],
      link: "https://react-chatboat.vercel.app ",
    },

     {
      id:2,
      title: "weather",
      description:"Search weather by city name Show city name, temperature, weather condition, humidity, and wind speed Use OpenWeather Map API Display weather icon based on conditionShow loading and error statesUse ",
      image: weather,
      tags: ["React", "Javascript","Talwindcss"],
       link: "https://weather-app-six-tawny-14.vercel.app/  ",
    },

     {
      id:3,
      title: "Calculater",
      description:"Calculator application using React.js and JavaScript with support for basic mathematical operations, real-time result updates, and a clean, responsive user interface.",
      image: Calculater,
      tags: ["html", "Javascript","css"],
      link: "https://calculatr-xi.vercel.app", 
    },
  ];
 
  const Project = () => {
    return (
  <section id='project' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl '>
      <h2 className='text-white text-4xl md:text-6xl font-bold mb-4 text-center'>
          Project
      </h2>

      <p className='text-gray-400 font-bold text-center mb-12 max-w-4xl mx-auto'>
        Here are some of the projects I've developed and worked on, showcasing my skills and creativity.
      </p>

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
  {projects.map((project) => (
    
    <div
      key={project.id}
      className='bg-[#111827] rounded-xl border border-gray-700 shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300'
    >
      <div className='h-48 bg-gray-800 flex items-center justify-center'>
         <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={project.image}
    alt={project.title}
    className='w-full h-full object-cover'
  />
</a>
      </div>

      <div className='p-5'>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className='px-3 py-1 text-xs text-cyan-400 border border-cyan-400 rounded-full'
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className='text-xl font-bold text-white mb-2'>
          {project.title}
        </h3>

        <p className='text-gray-400'>
          {project.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
  </section>
);
  }

export default Project 