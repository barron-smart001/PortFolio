import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F5] px-6 py-16 text-black sm:px-8 md:px-12 lg:px-12">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Large moving blue glow */}
        <div
          className="
            absolute
            -left-32
            -top-32
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#1D4ED8]/10
            blur-[90px]
            animate-[orbOne_10s_ease-in-out_infinite]
          "
        />

        {/* Second moving glow */}
        <div
          className="
            absolute
            -right-32
            top-[25%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#1D4ED8]/10
            blur-[100px]
            animate-[orbTwo_13s_ease-in-out_infinite]
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
            bg-[#1D4ED8]/[0.07]
            blur-[110px]
            animate-[orbThree_15s_ease-in-out_infinite]
          "
        />

        {/* Rotating decorative ring */}
        <div
          className="
            absolute
            -right-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#1D4ED8]/10
            animate-[spinSlow_25s_linear_infinite]
          "
        />

        <div
          className="
            absolute
            -right-28
            top-32
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#1D4ED8]/10
            animate-[spinReverse_18s_linear_infinite]
          "
        />

        {/* Floating dots */}
        <span className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-[#1D4ED8]/30 animate-[floatDot_5s_ease-in-out_infinite]" />

        <span className="absolute right-[20%] top-[45%] h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/30 animate-[floatDot_7s_ease-in-out_infinite]" />

        <span className="absolute bottom-[20%] left-[12%] h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/20 animate-[floatDot_6s_ease-in-out_infinite]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* =======================================================
            HERO
        ======================================================== */}
        <section className="mb-20 sm:mb-24">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#EEEDEA] px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-blue-600 opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-600" />
            </span>

            WEB DEVELOPER — LAGOS, NG
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            I build digital products that{" "}
            <span className="text-[#1D4ED8]">
              stand out.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Frontend developer focused on building modern, scalable and
            visually refined web applications. I turn ideas into practical
            digital products using clean interfaces, thoughtful UX and
            maintainable code.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/Project"
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                bg-black
                px-7
                py-3.5
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
              View projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/Contact"
              className="
                group
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-black
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gray-300
                hover:bg-gray-50
                hover:shadow-md
                active:scale-95
              "
            >
              Get in touch

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

          </div>

        </section>

        {/* =======================================================
            DIVIDER
        ======================================================== */}
        <div className="relative mb-16 sm:mb-20">
          <div className="h-px bg-gray-200" />

          <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#1D4ED8]" />
        </div>

        {/* =======================================================
            AT A GLANCE
        ======================================================== */}
        <section className="mb-20 sm:mb-24">

          {/* Section Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                At a Glance
              </span>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                A snapshot of my work.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-500 sm:text-right">
              Building practical products across fintech, education and
              modern web experiences.
            </p>

          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

            {/* Products */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                5+
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Products Built
              </span>
            </div>

            {/* Fintech */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                2
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Fintech Projects
              </span>
            </div>

            {/* Stack */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                5+
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Core Technologies
              </span>
            </div>

            {/* Experience */}
            <div className="group rounded-2xl border border-gray-200/70 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6">
              <span className="block text-3xl font-black tracking-tight sm:text-4xl">
                1+
              </span>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
                Year Building
              </span>
            </div>

          </div>

        </section>

        {/* =======================================================
            CURRENT FOCUS
        ======================================================== */}
        <section className="border-t border-gray-200 py-16 sm:py-20">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">
                Current Focus
              </span>

              <h2 className="mt-3 max-w-xl text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                Building products,
                <br className="hidden sm:block" />
                not just interfaces.
              </h2>
            </div>

            <Link
              to="/Project"
              className="group inline-flex w-fit items-center text-sm font-bold"
            >
              View all projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </section>

      </div>

      {/* =========================================================
          CSS ANIMATIONS
      ========================================================== */}
      <style>{`
        @keyframes orbOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(120px, 80px) scale(1.2);
          }
        }

        @keyframes orbTwo {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(-100px, 100px) scale(1.15);
          }
        }

        @keyframes orbThree {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(80px, -70px) scale(1.2);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes floatDot {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.25;
          }

          50% {
            transform: translateY(-25px);
            opacity: 0.7;
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