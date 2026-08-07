import React from 'react';

export default function Project() {
  const works = [
    {
      title: "PrismView — Personal Finance Dashboard",
      status: "Completed",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      description: "A modern personal finance dashboard engine designed to help users monitor and manage complex capital trends. Built to handle secure transaction mapping, responsive financial budgets, and data analytics streams through real-time chart layers.",
      tech: ["React Context API", "Tailwind CSS", "Dynamic Charts", "Routing Layouts"],
      type: "FinTech Module"
    },
    {
      title: "Modern Portfolio Website",
      status: "Completed",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      description: "A premium developer platform designed to display codebase capabilities with a strict emphasis on performance metric marks. Focuses on high-end typography structures, micro-interactions, custom routing hooks, and sleek device adaptability.",
      tech: ["React Engine", "Tailwind UI", "Cubic-Bezier Motion", "Semantic Architecture"],
      type: "Product System"
    },
    {
      title: "AI-Powered Forex Market Analysis Platform",
      status: "In Progress",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      isLive: true,
      description: "An ambitious intelligent monitoring environment merging Frontend Engineering, AI patterns, and FinTech. Formulated to capture institutional patterns (SMC/ICT), scan market structure maps, detect order blocks, and output valid trade confirmation setups without automated scripting dependencies.",
      tech: ["Advanced React Patterns", "AI Integration", "Market Scanner Layouts", "SMC Pattern Engines"],
      type: "FinTech R&D Engine"
    }
  ];

  return (
    <div className="bg-[#FAF9F5] min-h-screen px-6 md:px-12 py-16 text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* ================= HEADER INTRO AREA ================= */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#EEEDEA] text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            CASE STUDIES
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Selected Work & <br />
            <span className="text-[#1D4ED8]">Digital Architecture.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            A precise curation of production layouts and application engines designed with pixel discipline, performance architecture, and robust maintainability.
          </p>
        </header>

        {/* ================= WORK CARD SHOWCASE CONTAINER ================= */}
        <div className="space-y-12">
          {works.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200/60 p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300"
            >
              {/* Top Banner Tagging Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-black tracking-widest text-gray-400 uppercase">
                  {item.type}
                </span>
                
                <div className="flex items-center gap-2">
                  {item.isLive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                  )}
                  <span className={`border text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Title Header */}
              <h2 className="text-2xl font-black tracking-tight text-black mb-4">
                {item.title}
              </h2>

              {/* Description Body Text */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              {/* Technical Stack Badges Section */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {item.tech.map((badge, bIndex) => (
                  <span 
                    key={bIndex} 
                    className="bg-[#FAF9F5] text-gray-500 text-xs font-semibold px-3 py-1.5 border border-gray-200/40 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
