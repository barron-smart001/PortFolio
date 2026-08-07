import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="bg-[#FAF9F5] min-h-[calc(100vh-80px)] px-12 pt-20 pb-32 flex flex-col justify-start">
        
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#EEEDEA] text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            WEB DEVELOPER — Uyo, NG
          </div>

          <h1 className="text-black font-extrabold text-5xl md:text-6xl tracking-tight leading-[1.1] mb-8">
            I build  <span className="text-[#1D4ED8]">digital experiences</span> <br />
            that leave lasting impressions.
          </h1>
 
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-normal">
          Frontend developer specializing in high-performance React applications with clean architecture, seamless interactions, and exceptional user experiences.
          </p>

          <div className="flex items-center gap-4">
            <Link 
              to="/Project" 
className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm inline-block text-center transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gray-800 hover:scale-[1.05] hover:-translate-y-[2px] active:scale-[0.96]"
            >
              View projects
            </Link>
            <Link 
              to="/Contact" 
className="bg-white text-black border border-gray-200 text-sm font-semibold px-6 py-3 rounded-full inline-block text-center transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gray-50 hover:scale-[1.05] hover:-translate-y-[2px] hover:shadow-md hover:border-gray-300 active:scale-[0.96]"
            >
              Get in touch
            </Link>
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;
