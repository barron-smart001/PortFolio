import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("xoeakvnd");

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
            animate-[contactFloatOne_12s_ease-in-out_infinite]
          "
        />

        {/* Right glow */}
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
            animate-[contactFloatTwo_15s_ease-in-out_infinite]
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
            animate-[contactFloatThree_18s_ease-in-out_infinite]
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
            animate-[contactSpin_26s_linear_infinite]
          "
        />

        {/* Floating dots */}
        <span
          className="
            absolute
            left-[15%]
            top-[25%]
            h-2
            w-2
            rounded-full
            bg-[#1D4ED8]/30
            animate-[contactPulse_5s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            right-[20%]
            top-[55%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#1D4ED8]/25
            animate-[contactPulse_7s_ease-in-out_infinite]
          "
        />

        <span
          className="
            absolute
            bottom-[20%]
            left-[10%]
            h-1.5
            w-1.5
            rounded-full
            bg-[#1D4ED8]/20
            animate-[contactPulse_6s_ease-in-out_infinite]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
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

            CONNECT
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6 max-w-3xl">
  Let's Build Something{" "}
  <span className="text-[#1D4ED8]">
    Exceptional Together.
  </span>
</h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            Have an interesting project, a full-time opportunity, or want to
            discuss engineering, FinTech, or a new idea? Send me a message and
            I'll get back to you.
          </p>

        </header>

        {/* =======================================================
            CONTENT
        ======================================================== */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-5 md:gap-12">

          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}
          <div className="space-y-8 md:col-span-2">

            {/* Email */}
            <div className="group">

              <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-gray-400">
                Direct Mail
              </h3>

              <a
                href="mailto:abasifrekesmart@gmail.com"
                className="
                  break-words
                  text-base
                  font-semibold
                  text-black
                  transition-colors
                  duration-300
                  hover:text-[#1D4ED8]
                  sm:text-lg
                "
              >
                abasifrekesmart@gmail.com
              </a>

            </div>

            {/* Location */}
            <div>

              <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-gray-400">
                Location
              </h3>

              <p className="text-base font-medium text-gray-600">
                Nigeria
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-400">
                Available for international remote contracts
              </p>

            </div>

            {/* Networks */}
            <div>

              <h3 className="mb-3 text-xs font-black uppercase tracking-widest text-gray-400">
                Professional Networks
              </h3>

              <ul className="space-y-3 text-base font-semibold">

                <li>
                  <a
                    href="https://github.com/Barronmonday02-collab"
                    className="
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-gray-600
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-black
                    "
                  >
                    GitHub
                    <span className="text-xs">↗</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-gray-600
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-black
                    "
                  >
                    LinkedIn
                    <span className="text-xs">↗</span>
                  </a>
                </li>

              </ul>

            </div>

          </div>

          {/* =====================================================
              CONTACT FORM
          ====================================================== */}
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
              hover:border-gray-300
              hover:shadow-xl
              md:col-span-3
              md:p-8
            "
          >

            {/* Card glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-48
                w-48
                rounded-full
                bg-[#1D4ED8]/[0.05]
                blur-3xl
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* =================================================
                SUCCESS STATE
            ================================================== */}
            {state.succeeded ? (

              <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center text-center">

                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-green-50
                    text-2xl
                    text-green-600
                    shadow-sm
                    animate-[contactSuccess_0.6s_ease-out]
                  "
                >
                  ✓
                </div>

                <h2 className="text-2xl font-black tracking-tight">
                  Message Sent.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  Thanks for reaching out. Your message has been delivered
                  successfully. I'll get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={reset}
                  className="
                    mt-6
                    rounded-full
                    border
                    border-gray-200
                    px-5
                    py-2.5
                    text-xs
                    font-semibold
                    text-gray-600
                    transition-all
                    duration-300
                    hover:border-gray-300
                    hover:bg-[#FAF9F5]
                    hover:text-black
                  "
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              /* =================================================
                  FORM
              ================================================== */
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-5"
              >

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#FAF9F5]
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#1D4ED8]
                      focus:ring-1
                      focus:ring-[#1D4ED8]
                    "
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />

                </div>

                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#FAF9F5]
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#1D4ED8]
                      focus:ring-1
                      focus:ring-[#1D4ED8]
                    "
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />

                </div>

                {/* Subject */}
                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Inquiry Type
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue="General Inquiry"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#FAF9F5]
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-gray-700
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#1D4ED8]
                      focus:ring-1
                      focus:ring-[#1D4ED8]
                    "
                  >
                    <option value="General Inquiry">
                      General Inquiry
                    </option>

                    <option value="Full-Time / Contract Role">
                      Full-Time / Contract Role
                    </option>

                    <option value="Project Collaboration">
                      Project Collaboration
                    </option>

                    <option value="Freelance Project">
                      Freelance Project
                    </option>
                  </select>

                </div>

                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-gray-200
                      bg-[#FAF9F5]
                      px-4
                      py-3
                      text-sm
                      leading-6
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-400
                      focus:border-[#1D4ED8]
                      focus:ring-1
                      focus:ring-[#1D4ED8]
                    "
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-xs text-red-500"
                  />

                </div>

                {/* General error */}
                {state.errors && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-5 text-red-600">
                    Something went wrong while sending your message. Please
                    check the fields and try again.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="
                    w-full
                    rounded-xl
                    bg-black
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
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    disabled:hover:translate-y-0
                  "
                >
                  {state.submitting
                    ? "Sending Message..."
                    : "Send Message"}
                </button>

                <p className="text-center text-[11px] leading-5 text-gray-400">
                  Your message will be delivered directly to my inbox.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>

      {/* =========================================================
          ANIMATION KEYFRAMES
      ========================================================== */}
      <style>{`
        @keyframes contactFloatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(90px, 60px, 0) scale(1.15);
          }
        }

        @keyframes contactFloatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-90px, 80px, 0) scale(1.12);
          }
        }

        @keyframes contactFloatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(70px, -60px, 0) scale(1.1);
          }
        }

        @keyframes contactSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes contactPulse {
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

        @keyframes contactSuccess {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(15px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
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