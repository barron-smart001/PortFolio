import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen px-6 md:px-12 py-16 text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* ================= HERO INTRO SECTION ================= */}
        <section className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EEEDEA] text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            ABOUT ME
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-8">
            Building Digital Products That <br />
            <span className="text-[#1D4ED8]">Solve Real Problems.</span>
          </h1>
          <div className="text-gray-600 text-base md:text-lg space-y-6 font-normal leading-relaxed max-w-3xl">
            <p>
              I'm <strong className="text-black font-semibold">Abasifreke Smart Monday</strong>, a Frontend Developer from Nigeria passionate about building fast, scalable, and visually engaging web applications.
            </p>
            <p>
              My journey into software development started with curiosity about how modern digital products are built. That curiosity quickly became a passion for creating interfaces that don't just look good—they solve meaningful problems.
            </p>
            <p>
              Today, I specialize in developing responsive web applications using React, JavaScript, Tailwind CSS, HTML, and CSS, with a strong focus on clean architecture, reusable components, accessibility, and exceptional user experiences.
            </p>
            <p>
              Over the years, I've worked on a variety of projects across different industries, from responsive business websites and interactive web applications to financial dashboards and developer tools. Every project has helped me grow as a developer, strengthen my problem-solving skills, and refine my ability to build products that are both visually appealing and technically sound.
            </p>
            <p className="text-black font-medium border-l-2 border-blue-600 pl-4 my-6 italic">
              "I believe great software should be intuitive, fast, accessible, and built with purpose."
            </p>
          </div>
        </section>

        <hr className="border-gray-200 my-12" />

        {/* ================= MISSION SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase">My Mission</h2>
          <div className="md:col-span-2 text-gray-600 space-y-4">
            <h3 className="text-xl font-bold text-black">Technology has the power to simplify complex problems.</h3>
            <p className="leading-relaxed">
              My mission is to build products that improve productivity, enhance financial decision-making, and create seamless digital experiences that people genuinely enjoy using.
            </p>
            <p className="leading-relaxed">
              Whether it's designing a modern portfolio, developing business applications, or creating AI-powered financial tools, I enjoy transforming ideas into production-ready solutions that deliver real value.
            </p>
          </div>
        </section>

        <hr className="border-gray-200 my-12" />

        {/* ================= CAPABILITIES SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase">Capabilities</h2>
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">Responsive Design</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">Performance Optimization</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">Clean Code Architecture</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">Accessibility</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">Component-Based Development</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">API Integration</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">State Management</span>
                <span className="bg-white text-gray-700 text-xs font-medium px-3 py-2 border border-gray-200/60 rounded-full shadow-sm">UI/UX Implementation</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">Stack Technologies</h4>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>React</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>JavaScript (ES6+)</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>HTML5</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>CSS3</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>Tailwind CSS</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>Vite</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-blue-600 rounded-full"></span>Git & GitHub</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">Currently Learning</h4>
                <ul className="space-y-2 text-sm font-medium text-gray-600">
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-gray-400 rounded-full"></span>TypeScript</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-gray-400 rounded-full"></span>Advanced React Patterns</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-gray-400 rounded-full"></span>Node.js</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-gray-400 rounded-full"></span>System Design</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-gray-400 rounded-full"></span>AI Integration</li>
                  <li className="flex items-center gap-2"><span className="h-1 w-1 bg-gray-400 rounded-full"></span>Web3 Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 my-12" />
             {/* ================= NEW: WORK METHOD & APPROACH SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase">My Approach</h2>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Block 1: Design to Code */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm">
              <h4 className="text-base font-bold text-black mb-2">Pixel Discipline</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                I bridge the gap between design systems and engineering. I translate complex design mockups into semantic, fluid, and scalable UI layouts with pixel-perfect accuracy.
              </p>
            </div>

            {/* Block 2: Performance First */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm">
              <h4 className="text-base font-bold text-black mb-2">Performance Optimization</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Clean software isn't just about functional code; it's about speed. I focus on optimizing bundle sizes, clean asset loading, and fast interactions for high core web vitals.
              </p>
            </div>

            {/* Block 3: Architecture */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm sm:col-span-2">
              <h4 className="text-base font-bold text-black mb-2">Maintainable Component Systems</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                I write highly reusable, atomic components backed by clean architecture. This ensures that the frontend codebases I create are clean, well-structured, and effortless for engineering teams to scale or maintain later.
              </p>
            </div>

          </div>
        </section>

        <hr className="border-gray-200 my-12" />


                {/* ================= BACKGROUND OVERVIEW SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase">Background Overview</h2>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Experience Card */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-1">Experience</span>
              <h4 className="text-xl font-bold text-black mb-1">1+ Years Professional</h4>
              <p className="text-sm text-gray-500 leading-normal">Building custom React software architectures, pixel-perfect responsive layouts, and interactive dashboards.</p>
            </div>

            {/* Availability Card */}
            <div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block">Availability Status</span>
              </div>
              <h4 className="text-xl font-bold text-black mb-1">Open To Work</h4>
              <p className="text-sm text-gray-500 leading-normal">Available immediately for remote international contracts, full-time engineering roles, or freelance design scopes.</p>
            </div>

           {/* Education Qualification Card */}
<div className="bg-white border border-gray-200/60 p-5 rounded-xl shadow-sm sm:col-span-2">
  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-1">Education & Qualifications</span>
  <h4 className="text-lg font-bold text-black mb-1">Frontend Engineering Fellow — TalentPort</h4>
  <p className="text-sm text-gray-500 leading-relaxed">
    Undergoing intensive professional frontend development training and residency at <span className="text-black font-semibold">TalentPort (Uyo, Akwa Ibom State)</span>. Specialising in turning complex pixel mockups into production-ready software systems, master class state architecture, and maintainable, enterprise-level design systems.
  </p>
</div>


          </div>
        </section>

        <hr className="border-gray-200 my-12" />


        {/* ================= BEYOND CODING SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase">Beyond Coding</h2>
          <div className="md:col-span-2 text-gray-600 space-y-4">
            <p className="leading-relaxed">
              Outside of software development, I'm passionate about exploring the worlds of Financial Markets & Forex Trading, Artificial Intelligence, FinTech Innovation, Open Source Learning, and Continuous Self-Development. I'm constantly learning, experimenting with new technologies, and exploring how software can solve complex financial problems and improve everyday experiences.
            </p>
            <p className="leading-relaxed">
              My long-term vision is to build innovative digital products at the intersection of Frontend Engineering, Artificial Intelligence, and Financial Technology. I'm committed to continuous learning, embracing new challenges, and creating software that doesn't just meet expectations—but exceeds them.
            </p>
          </div>
        </section>

        {/* ================= PHILOSOPHY SECTION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <h2 className="text-xs font-black tracking-widest text-gray-400 uppercase">Philosophy</h2>
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#EEEDEA]/40 p-6 md:p-8 rounded-2xl border border-gray-200/40">
              <p className="text-black text-lg font-medium leading-relaxed italic mb-4">
                "I don't just build websites—I create digital experiences that solve problems, inspire confidence, and leave a lasting impression. Every project is an opportunity to learn, innovate, and build something meaningful."
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every interface should be intuitive. Every interaction should feel effortless. Every line of code should contribute directly to a better user experience. I strive to create products that are fast, accessible, scalable, and visually refined—because exceptional software isn't just about functionality; it's about how people experience it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
              <div className="text-sm text-gray-500 font-medium">Let's build something exceptional together.</div>
              <Link to="/Contact" className="bg-black text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-sm inline-block text-center">
                Get in touch
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
