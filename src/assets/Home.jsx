import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import arpita from "./arpita.jpeg";
import Tilt from "react-parallax-tilt";
import CV from './CV.pdf'

const Home = () => {
  return (
    <section
      id="about"
      className="py-4 px-[5vw] md:px-[6vw] lg:px-[10vw] font-sans mt-10 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="md:w-[55%] text-center md:text-left ">

          <h1 className="text-4xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Arpita Patel
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            <span className="text-white">I am a </span>

            <TypeAnimation
              sequence={[
                "Fullstack Developer", 2000,
                "App Developer", 2000,
                "UI/UX Designer", 2000,
                "Coder", 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#1cd8d2]"
            />
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            I specialize in frontend web development using <br/>
            React.js, with a focus on creating responsive, high-<br/>
            performance, and user-friendly interfaces. Passionate<br/>
             about crafting seamless user experiences, I enjoy<br/>
              learning modern frontend technologies and <br/>
              optimizing UI workflows. With a strong understanding<br/>
               of JavaScript, React ecosystem, and UI/UX principles, I <br/>
               strive to build impactful, scalable, and visually <br/>
               appealing web applications.
          </p>

          <a
            href={CV}
            target="_blank"
            rel='noopener noreferrer'
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105 cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #1cd8d2)",
              boxShadow: "0 0 20px #1cd8d2",
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt 
        className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#1cd8d2] rounded-full md:translate-x-10'
        tiltMaxAngleX={20}
        >
          <img
            src={arpita}
            alt="Arpita Patel"
            className="w-full h-full rounded-full object-cover  object-[60%_center]  drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default Home;