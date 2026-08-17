import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  const works = [
    {
      title: "Meridian — Forex & Financial Platform",
      status: "In Progress",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      isLive: true,
      description:
        "A financial technology platform currently being developed to bring market analysis, trading-focused workflows, and intelligent financial tools into a unified digital experience. The project combines modern frontend architecture with Supabase-backed functionality and a strong focus on usability.",
      tech: [
        "React",
        "Tailwind CSS",
        "Supabase",
        "React Router",
        "Financial UI",
      ],
      type: "FinTech Platform",
      projectLink: "#",
    },

    {
      title: "Student Hub Platform",
      status: "Completed",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      description:
        "A student-focused web application designed to bring academic resources, organization, and collaboration into one responsive platform. Built with reusable React components and a responsive interface for both desktop and mobile users.",
      tech: [
        "React",
        "Tailwind CSS",
        "State Management",
        "Responsive UI",
        "Component Architecture",
      ],
      type: "EduTech Application",
      projectLink: "https://studenthub-black.vercel.app/",
    },

    {
      title: "PrismView — Personal Finance Dashboard",
      status: "Completed",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      description:
        "A personal finance dashboard designed to give users a clearer view of transactions, financial activity, budgets, and analytics. The application focuses on structured data presentation, reusable components, and a clean dashboard experience.",
      tech: [
        "React",
        "Context API",
        "Tailwind CSS",
        "Charts",
        "React Router",
      ],
      type: "FinTech Application",
      projectLink: "https://prism-view.vercel.app",
    },

    {
      title: "Personal Portfolio",
      status: "Completed",
      statusColor: "bg-green-50 text-green-700 border-green-200",
      description:
        "A personal developer portfolio built to showcase my projects, technical direction, experience, and approach to frontend engineering. Designed around clean typography, responsive layouts, subtle motion, and a focused user experience.",
      tech: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Responsive Design",
        "UI Motion",
      ],
      type: "Personal Product",
      projectLink: "/",
      internal: true,
    },

    {
      title: "AI Forex Market Analysis Platform",
      status: "R&D",
      statusColor: "bg-purple-50 text-purple-700 border-purple-200",
      isLive: true,
      description:
        "An experimental intelligent market-analysis platform exploring how AI can assist with forex research and technical market interpretation. The project focuses on market structure, liquidity, SMC/ICT concepts, setup analysis, and presenting complex market information through a clear interface.",
      tech: [
        "React",
        "AI Integration",
        "Market Analysis",
        "Data Visualization",
        "SMC / ICT",
      ],
      type: "FinTech R&D",
      projectLink: "#",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F5] px-6 py-16 text-black md:px-12">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Main glow */}
        <div
          className="
            absolute
            -left-40
            -top-32
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#1D4ED8]/[0.07]
            blur-[100px]
            animate-[projectOrbOne_12s_ease-in-out_infinite]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            -right-40
            top-[30%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#1D4ED8]/[0.05]
            blur-[110px]
            animate-[projectOrbTwo_15s_ease-in-out_infinite]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-[25%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#1D4ED8]/[0.04]
            blur-[110px]
            animate-[projectOrbThree_18s_ease-in-out_infinite]
          "
        />

        {/* Rotating circle */}
        <div
          className="
            absolute
            -right-32
            top-16
            h-[320px]
            w-[320px]
            rounded-full
            border
            border-[#1D4ED8]/[0.08]
            animate-[projectSpin_26s_linear_infinite]
          "
        />

        {/* Floating points */}
        <span className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-[#1D4ED8]/30 animate-[projectPulse_5s_ease-in-out_infinite]" />

        <span className="absolute right-[20%] top-[55%] h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/25 animate-[projectPulse_7s_ease-in-out_infinite]" />

        <span className="absolute bottom-[20%] left-[10%] h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/20 animate-[projectPulse_6s_ease-in-out_infinite]" />
      </div>

      {/* =========================================================
          MAIN CONTENT — ORIGINAL WIDTH MAINTAINED
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* =======================================================
            HEADER
        ======================================================== */}
        <header className="mb-16 sm:mb-20">

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#EEEDEA]
              px-3
              py-1.5
              text-xs
              font-semibold
              text-gray-600
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-blue-600 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-600" />
            </span>

            SELECTED WORK
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Selected Work &
            <br />
            <span className="text-[#1D4ED8]">
              Digital Products.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            A selection of products and applications I've built while
            exploring frontend engineering, financial technology, education,
            and intelligent digital experiences.
          </p>
        </header>

        {/* =======================================================
            PROJECT LIST
        ======================================================== */}
        <section className="space-y-6 sm:space-y-8">

          {works.map((item, index) => {

            const cardContent = (
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200/60
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-gray-300
                  hover:shadow-xl
                  md:p-8
                "
              >

                {/* Animated card glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#1D4ED8]/[0.04]
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top row */}
                <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3">

                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-400 sm:text-xs">
                    {item.type}
                  </span>

                  <div className="flex items-center gap-2">

                    {item.isLive && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                      </span>
                    )}

                    <span
                      className={`
                        rounded-full
                        border
                        px-2.5
                        py-1
                        text-[9px]
                        font-black
                        uppercase
                        tracking-wider
                        ${item.statusColor}
                      `}
                    >
                      {item.status}
                    </span>

                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10 mb-4 flex items-start justify-between gap-5">

                  <h2 className="text-xl font-black leading-tight tracking-tight text-black transition-colors duration-300 group-hover:text-[#1D4ED8] sm:text-2xl">
                    {item.title}
                  </h2>

                  {/* Arrow */}
                  <svg
                    className="
                      mt-1
                      h-5
                      w-5
                      flex-shrink-0
                      text-gray-400
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#1D4ED8]
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>

                </div>

                {/* Description */}
                <p className="relative z-10 mb-7 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  {item.description}
                </p>

                {/* Tech */}
                <div className="relative z-10 flex flex-wrap gap-2 border-t border-gray-100 pt-5">

                  {item.tech.map((badge) => (
                    <span
                      key={badge}
                      className="
                        rounded-full
                        border
                        border-gray-200/60
                        bg-[#FAF9F5]
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-gray-500
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-gray-300
                        hover:text-gray-700
                      "
                    >
                      {badge}
                    </span>
                  ))}

                </div>

                {/* Bottom indicator */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#1D4ED8]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            );

            /* Internal portfolio route */
            if (item.internal) {
              return (
                <Link
                  key={item.title}
                  to="/"
                  className="block"
                >
                  {cardContent}
                </Link>
              );
            }

            /* External project */
            if (item.projectLink !== "#") {
              return (
                <a
                  key={item.title}
                  href={item.projectLink}
                  target="_parent"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              );
            }

            /* Project without a public link yet */
            return (
              <div key={item.title}>
                {cardContent}
              </div>
            );
          })}

        </section>

        {/* =======================================================
            PROJECT FOOTER
        ======================================================== */}
        <section className="mt-16 border-t border-gray-200 py-12 sm:mt-20">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                Next Project
              </span>

              <h3 className="mt-2 text-xl font-black tracking-tight">
                More products are in development.
              </h3>
            </div>

            <Link
              to="/Contact"
              className="
                inline-flex
                w-fit
                items-center
                rounded-full
                bg-black
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-800
                hover:shadow-lg
                active:scale-95
              "
            >
              Start a project
              <span className="ml-2">→</span>
            </Link>

          </div>

        </section>

      </div>

      {/* =========================================================
          ANIMATION KEYFRAMES
      ========================================================== */}
      <style>{`
        @keyframes projectOrbOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(90px, 60px, 0) scale(1.15);
          }
        }

        @keyframes projectOrbTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-90px, 80px, 0) scale(1.12);
          }
        }

        @keyframes projectOrbThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(70px, -60px, 0) scale(1.1);
          }
        }

        @keyframes projectSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes projectPulse {
          0%,
          100% {
            opacity: 0.2;
            transform: translateY(0) scale(1);
          }

          50% {
            opacity: 0.7;
            transform: translateY(-20px) scale(1.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </main>
  );
}