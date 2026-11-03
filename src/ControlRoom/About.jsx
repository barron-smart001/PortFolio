// import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F5] px-6 py-16 text-black md:px-12">

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
              , a frontend developer based in Akwa Ibom, Nigeria. I build
              thoughtful web products that pair polished, responsive
              interfaces with useful functionality.
            </p>

            <p>
              My work spans fintech, hospitality, social platforms,
              e-commerce, and education. I've built products including
              TradeFrame, a trading journal; Skyview Hotels, a booking and
              property-management platform; and TrueConnect, a verified
              relationship platform.
            </p>

            <p>
              Across these projects, I've worked with React and Next.js,
              TypeScript, Supabase, and Paystack—building responsive
              experiences and connecting them to authentication, data, and
              payment flows.
            </p>

            <p>
              I enjoy taking a product from its core idea to a clear,
              maintainable interface, paying attention to reusable components,
              thoughtful interactions, and the details that make a product
              easier to use.
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
              I'm drawn to products that make complex tasks easier—from
              understanding trading performance and personal finances to
              finding a hotel or organizing student resources.
            </p>

            <p className="leading-relaxed">
              I turn those ideas into practical web experiences, balancing
              clear interfaces with the integrations and product flows people
              need to get things done.
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
                  "State Management",
                  "Authentication & Data Integration",
                  "Payment Integration",
                  "Dashboard & Data Visualization",
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
                    "Next.js",
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "Tailwind CSS",
                    "React Router",
                    "Vite",
                    "Supabase",
                    "Paystack",
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
                Project Experience
              </span>

              <h4 className="mb-2 text-xl font-bold">
                Across Multiple Industries
              </h4>

              <p className="text-sm leading-relaxed text-gray-500">
                From fintech and hospitality to social platforms, e-commerce,
                and education, I build products around real user needs.
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
  Frontend Development Training — Start Innovation Hub
</h4>

<p className="text-sm leading-relaxed text-gray-500">
  Successfully completed intensive frontend development training at{" "}
  <span className="font-semibold text-black">
    Start Innovation Hub, Uyo
  </span>
  , gaining practical experience in building modern, responsive web
  applications using React.js, TypeScript, and Next.js. Continuing to
  strengthen my engineering skills through independent learning,
  hands-on projects, and exploration of backend development.
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

      <style>{`
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