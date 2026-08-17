import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) =>
    isActive(path)
      ? "bg-white px-4 py-2 rounded-full shadow-sm text-black font-semibold transition-all w-full md:w-auto text-center"
      : "px-4 py-2 text-gray-600 hover:text-black font-medium transition-colors w-full md:w-auto text-center";

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Project', label: 'Projects' },
    { path: '/Contact', label: 'Contact' },
  ];

  // Keep the CV path in one place
  const cvPath = "/Abasifreke_Monday_CV.pdf";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-100 bg-[#FAF9F5] px-6 py-4 md:px-12">

        {/* Logo / Name */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1D4ED8] text-lg font-extrabold text-white">
            A
          </span>

          <h1 className="text-lg font-extrabold tracking-tight text-black">
            Abasifreke Monday
          </h1>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <ul className="hidden items-center gap-2 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={linkStyle(link.path)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-6 md:flex">

          {/* Availability */}
          <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span>Open to work</span>
          </div>

          {/* CV */}
          <a
            href={cvPath}
            download="Abasifreke_Monday_CV.pdf"
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              bg-black
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-gray-800
              hover:shadow-md
              active:scale-95
            "
          >
            Résumé

            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </a>

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <div className="flex items-center gap-2 md:hidden">

          <span className="animate-pulse text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {isOpen ? "Close" : "Menu"}
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              relative
              rounded-full
              border
              border-gray-200/80
              bg-white
              p-2.5
              text-gray-600
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:text-black
              active:scale-95
              focus:outline-none
            "
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >

            {!isOpen && (
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1D4ED8]" />
              </span>
            )}

            {isOpen ? (
              <svg
                className="h-5 w-5 rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>

      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          className="
            fixed
            inset-x-0
            top-[69px]
            z-40
            flex
            flex-col
            gap-6
            border-b
            border-gray-200
            bg-[#FAF9F5]
            px-6
            py-6
            shadow-md
            md:hidden
          "
        >

          {/* Navigation Links */}
          <ul className="flex flex-col gap-2 text-base">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="flex w-full"
              >
                <Link
                  to={link.path}
                  className={`${linkStyle(link.path)} block py-3`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="border-gray-200" />

          {/* Mobile Actions */}
          <div className="flex flex-col items-center gap-4">

            {/* Availability */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span>Open to work</span>
            </div>

            {/* Mobile CV */}
            <a
              href={cvPath}
              download="Abasifreke_Monday_CV.pdf"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-1.5
                rounded-full
                bg-black
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-gray-800
                hover:shadow-md
                active:scale-95
              "
              onClick={() => setIsOpen(false)}
            >
              Résumé

              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </a>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;