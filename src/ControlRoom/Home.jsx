import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen px-6 md:px-12 py-16 text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* ================= HERO INTRO SECTION ================= */}
        <section className="mb-20">
          {/* Subtle Top Badge matching Navbar/About style */}
          <div className="inline-flex items-center gap-2 bg-[#EEEDEA] text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            WEB DEVELOPER — LAGOS, NG
          </div>

          {/* Large Hero Headline matching About scale */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-8">
            I build websites that <br />
            elevate <span className="text-[#1D4ED8]">stunning visuals.</span>
          </h1>

          {/* Subtitle / Descriptive Paragraph matching About typography */}
          <div className="text-gray-600 text-base md:text-lg space-y-6 font-normal leading-relaxed max-w-3xl mb-10">
            <p>
              Frontend developer specializing in crafting highly performant, visually crisp web applications. I bridge the gap between design systems and semantic, maintainable code to deliver production-ready digital experiences.
            </p>
          </div>

          {/* Spring-elastic Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link 
              to="/Project" 
              className="bg-black text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-sm text-center transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gray-800 hover:scale-[1.04] hover:-translate-y-[2px] active:scale-[0.96]"
            >
              View projects
            </Link>
            <Link 
              to="/Contact" 
              className="bg-white text-black border border-gray-200 text-sm font-semibold px-6 py-3.5 rounded-full shadow-sm text-center transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gray-50 hover:scale-[1.04] hover:-translate-y-[2px] hover:shadow-md hover:border-gray-300 active:scale-[0.96]"
            >
              Get in touch
            </Link>
          </div>
        </section>

        <hr className="border-gray-200 my-16" />

        {/* ================= CORE PERFORMANCE METRICS GRID ================= */}
        {/* Uses the exact Left Column Label / Right Column Detail Grid layout from the About page */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase pt-1">
            Core Metrics
          </h2>
          
          <div className="md:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
            
            {/* Metric Item 1 */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <span className="text-black font-black text-3xl sm:text-4xl tracking-tight block mb-1">
                1+
              </span>
              <span className="text-gray-400 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                YEARS EXPERIENCE
              </span>
            </div>

            {/* Metric Item 2 */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <span className="text-black font-black text-3xl sm:text-4xl tracking-tight block mb-1">
                12+
              </span>
              <span className="text-gray-400 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                PRODUCTS SHIPPED
              </span>
            </div>

            {/* Metric Item 3 */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <span className="text-black font-black text-3xl sm:text-4xl tracking-tight block mb-1">
                2
              </span>
              <span className="text-gray-400 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                FINTECH TOOLS
              </span>
            </div>

            {/* Metric Item 4 */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
              <span className="text-black font-black text-3xl sm:text-4xl tracking-tight block mb-1">
                100%
              </span>
              <span className="text-gray-400 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                CODE QUALITY
              </span>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
