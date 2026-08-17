import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F5] px-6 py-16 text-black md:px-12">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Main ambient glow */}
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
            animate-[aboutFloatOne_12s_ease-in-out_infinite]
          "
        />

        {/* Secondary ambient glow */}
        <div
          className="
            absolute
            -right-40
            top-[25%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#1D4ED8]/[0.05]
            blur-[110px]
            animate-[aboutFloatTwo_15s_ease-in-out_infinite]
          "
        />

        {/* Bottom ambient glow */}
        <div
          className="
            absolute
            bottom-[-180px]
            left-[25%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#1D4ED8]/[0.035]
            blur-[120px]
            animate-[aboutFloatThree_18s_ease-in-out_infinite]
          "
        />

        {/* Decorative rotating circle */}
        <div
          className="
            absolute
            -right-24
            top-20
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#1D4ED8]/[0.08]
            animate-[aboutSpin_24s_linear_infinite]
          "
        />

        {/* Small floating accents */}
        <span className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-[#1D4ED8]/30 animate-[aboutPulse_5s_ease-in-out_infinite]" />

        <span className="absolute right-[18%] top-[48%] h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/25 animate-[aboutPulse_7s_ease-in-out_infinite]" />

        <span className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#1D4ED8]/20 animate-[aboutPulse_6s_ease-in-out_infinite]" />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* =======================================================
            HERO INTRO
        ======================================================== */}
        <section className="mb-16">

          {/* Badge */}
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

            ABOUT ME
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Building Digital Products That
            <br className="hidden sm:block" />
            <span className="text-[#1D4ED8]"> Solve Real Problems.</span>
          </h1>

          {/* Introduction */}
          <div className="mt-8 max-w-3xl space-y-6 text-base font-normal leading-relaxed text-gray-600 md:text-lg">

            <p>
              I'm{" "}
              <strong className="font-semibold text-black">
                Abasifreke Smart Monday
              </strong>
              , a Frontend Developer from Nigeria passionate about building
              fast, scalable, and visually engaging web applications.
            </p>

            <p>
              My journey into software development started with curiosity
              about how modern digital products are built. That curiosity
              became a passion for creating interfaces that don't just look
              good—they solve meaningful problems.
            </p>

            <p>
              Today, I focus on building responsive web applications with
              React, JavaScript, Tailwind CSS, and modern frontend tooling,
              with an emphasis on clean architecture, reusable components,
              accessibility, and thoughtful user experiences.
            </p>

            <p>
              Through the projects I've worked on, I've gained experience
              across different areas—from responsive business websites and
              interactive applications to financial dashboards and
              developer-focused tools. Each project has strengthened my
              problem-solving skills and helped me become a more thoughtful
              engineer.
            </p>

            {/* Quote */}
            <p className="my-6 border-l-2 border-blue-600 pl-4 font-medium italic text-black">
              "I believe great software should be intuitive, fast, accessible,
              and built with purpose."
            </p>

          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* =======================================================
            MISSION
        ======================================================== */}
        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <h2 className="pt-1 text-xs font-black uppercase tracking-widest text-gray-400">
            My Mission
          </h2>

          <div className="space-y-4 text-gray-600 md:col-span-2">

            <h3 className="text-xl font-bold text-black">
              Technology has the power to simplify complex problems.
            </h3>

            <p className="leading-relaxed">
              My mission is to build products that improve productivity,
              enhance financial decision-making, and create seamless digital
              experiences that people genuinely enjoy using.
            </p>

            <p className="leading-relaxed">
              Whether I'm developing a modern portfolio, building business
              applications, or creating financial tools, I enjoy transforming
              ideas into practical, production-ready solutions that deliver
              real value.
            </p>

          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* =======================================================
            CAPABILITIES
        ======================================================== */}
        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <h2 className="pt-1 text-xs font-black uppercase tracking-widest text-gray-400">
            Capabilities
          </h2>

          <div className="space-y-10 md:col-span-2">

            {/* Frontend */}
            <div>
              <h3 className="mb-4 text-xl font-bold">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-2">

                {[
                  "Responsive Design",
                  "Performance Optimization",
                  "Clean Architecture",
                  "Accessibility",
                  "Reusable Components",
                  "API Integration",
                  "State Management",
                  "UI/UX Implementation",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-gray-200/60
                      bg-white
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-gray-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-gray-300
                      hover:shadow-md
                    "
                    style={{
                      animationDelay: `${index * 70}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>

            {/* Stack + Learning */}
            <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2">

              {/* Core Stack */}
              <div>

                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Core Stack
                </h4>

                <ul className="space-y-3 text-sm font-medium text-gray-700">

                  {[
                    "React",
                    "JavaScript (ES6+)",
                    "Tailwind CSS",
                    "React Router",
                    "Vite",
                    "Supabase",
                    "Git & GitHub",
                  ].map((technology) => (
                    <li
                      key={technology}
                      className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1"
                    >
                      <span className="h-1 w-1 rounded-full bg-blue-600" />
                      {technology}
                    </li>
                  ))}

                </ul>
              </div>

              {/* Currently Exploring */}
              <div>

                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Currently Exploring
                </h4>

                <ul className="space-y-3 text-sm font-medium text-gray-600">

                  {[
                    "TypeScript",
                    "Advanced React Patterns",
                    "Backend Development",
                    "AI Integration",
                  ].map((technology) => (
                    <li
                      key={technology}
                      className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-1"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-400" />
                      {technology}
                    </li>
                  ))}

                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* =======================================================
            MY APPROACH
        ======================================================== */}
        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <h2 className="pt-1 text-xs font-black uppercase tracking-widest text-gray-400">
            My Approach
          </h2>

          <div className="grid grid-cols-1 gap-5 md:col-span-2 sm:grid-cols-2">

            {/* Card 1 */}
            <div className="group rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEEDEA] text-xs font-black text-[#1D4ED8] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                01
              </div>

              <h4 className="mb-2 text-base font-bold transition-colors duration-300 group-hover:text-[#1D4ED8]">
                Pixel Discipline
              </h4>

              <p className="text-sm leading-relaxed text-gray-500">
                I bridge the gap between design and engineering by translating
                complex designs into fluid, scalable, and responsive
                interfaces.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEEDEA] text-xs font-black text-[#1D4ED8] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                02
              </div>

              <h4 className="mb-2 text-base font-bold transition-colors duration-300 group-hover:text-[#1D4ED8]">
                Performance First
              </h4>

              <p className="text-sm leading-relaxed text-gray-500">
                I focus on fast interactions, efficient rendering, optimized
                assets, and frontend architecture that keeps applications
                responsive.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gray-300 hover:shadow-xl sm:col-span-2">

              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEEDEA] text-xs font-black text-[#1D4ED8] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                03
              </div>

              <h4 className="mb-2 text-base font-bold transition-colors duration-300 group-hover:text-[#1D4ED8]">
                Maintainable Component Systems
              </h4>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
                I build reusable components backed by clear architecture,
                making applications easier to understand, extend, and
                maintain as they grow.
              </p>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* =======================================================
            BACKGROUND
        ======================================================== */}
        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <h2 className="pt-1 text-xs font-black uppercase tracking-widest text-gray-400">
            Background
          </h2>

          <div className="grid grid-cols-1 gap-5 md:col-span-2 sm:grid-cols-2">

            {/* Experience */}
            <div className="group rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">

              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-400">
                Experience
              </span>

              <h4 className="mb-2 text-xl font-bold">
                1+ Years Building
              </h4>

              <p className="text-sm leading-relaxed text-gray-500">
                Building React applications, responsive interfaces, financial
                dashboards, and interactive digital products.
              </p>
            </div>

            {/* Availability */}
            <div className="group rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg">

              <div className="mb-2 flex items-center gap-2">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Availability
                </span>

              </div>

              <h4 className="mb-2 text-xl font-bold">
                Open To Work
              </h4>

              <p className="text-sm leading-relaxed text-gray-500">
                Open to freelance projects, collaborations, internships, and
                frontend engineering opportunities.
              </p>
            </div>

            {/* Education */}
            <div className="group rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg sm:col-span-2">

              <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-gray-400">
                Education & Qualifications
              </span>

              <h4 className="mb-2 text-lg font-bold">
                Frontend Engineering Fellow — TalentPort
              </h4>

              <p className="text-sm leading-relaxed text-gray-500">
                Undergoing intensive professional frontend development
                training and residency at{" "}
                <span className="font-semibold text-black">
                  TalentPort
                </span>
                , with a focus on turning complex designs into production-ready
                applications, frontend architecture, and maintainable
                component systems.
              </p>
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-200" />

        {/* =======================================================
            BEYOND CODING
        ======================================================== */}
        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <h2 className="pt-1 text-xs font-black uppercase tracking-widest text-gray-400">
            Beyond Coding
          </h2>

          <div className="space-y-4 text-gray-600 md:col-span-2">

            <p className="leading-relaxed">
              Outside software development, I'm interested in financial
              markets, forex trading, artificial intelligence, fintech
              innovation, open-source learning, and continuous
              self-development.
            </p>

            <p className="leading-relaxed">
              My long-term vision is to build innovative digital products at
              the intersection of frontend engineering, artificial intelligence,
              and financial technology.
            </p>

          </div>
        </section>

        {/* =======================================================
            PHILOSOPHY
        ======================================================== */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <h2 className="pt-1 text-xs font-black uppercase tracking-widest text-gray-400">
            Philosophy
          </h2>

          <div className="space-y-8 md:col-span-2">

            {/* Philosophy card */}
            <div className="rounded-2xl border border-gray-200/40 bg-[#EEEDEA]/40 p-6 transition-all duration-500 hover:border-gray-300 hover:shadow-lg md:p-8">

              <p className="mb-4 text-lg font-medium leading-relaxed text-black">
                "I don't just build websites—I create digital experiences that
                solve problems, inspire confidence, and leave a lasting
                impression."
              </p>

              <p className="text-sm leading-relaxed text-gray-500">
                Every interface should be intuitive. Every interaction should
                feel effortless. Every line of code should contribute to a
                better user experience. I strive to create products that are
                fast, accessible, scalable, and visually refined.
              </p>

            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="text-sm font-medium text-gray-500">
                Let's build something exceptional together.
              </div>

              <Link
                to="/Contact"
                className="
                  inline-block
                  rounded-full
                  bg-black
                  px-5
                  py-3
                  text-center
                  text-xs
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
                Get in touch
              </Link>

            </div>

          </div>
        </section>

      </div>

      {/* =========================================================
          ANIMATION KEYFRAMES
      ========================================================== */}
      <style>{`
        @keyframes aboutFloatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(90px, 60px, 0) scale(1.15);
          }
        }

        @keyframes aboutFloatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-80px, 70px, 0) scale(1.12);
          }
        }

        @keyframes aboutFloatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(70px, -60px, 0) scale(1.1);
          }
        }

        @keyframes aboutSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aboutPulse {
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
};

export default About;