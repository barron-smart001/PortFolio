import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // State to manage mobile menu open/close toggle
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) =>
    isActive(path)
      ? "bg-white px-4 py-2 rounded-full shadow-sm text-black font-semibold transition-all w-full md:w-auto text-center"
      : "px-4 py-2 text-gray-600 hover:text-black font-medium transition-colors w-full md:w-auto text-center";

  // Array of links to avoid repeating code blocks
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/About', label: 'About' },
    { path: '/Project', label: 'Projects' },
    { path: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-12 py-4 sticky top-0 bg-[#FAF9F5] border-b border-gray-100 z-50">
        
        {/* Logo / Name Section */}
        <div className="flex items-center gap-3">
          <span className="bg-[#1D4ED8] text-white font-extrabold text-lg w-9 h-9 flex items-center justify-center rounded-lg">
            A
          </span>
          <h1 className="text-black font-extrabold text-lg tracking-tight">
            Ahbaz Monday
          </h1>
        </div>                

        {/* Desktop Navigation Links (Hidden on small screens, shown on md and up) */}
        <ul className="hidden md:flex items-center gap-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={linkStyle(link.path)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
 
        {/* Availability & Action Buttons (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6"> 
          <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Open to work</span>
          </div>  
          
          <a 
            href="/ahbaz-monday-resume.pdf" 
            download="Ahbaz_Monday_Resume.pdf"
            className="bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-gray-800 transition-colors"
          >
            Résumé
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle Button (Shown on small screens, hidden on md) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Menu Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Conditional Mobile Menu Dropdown Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[69px] bg-[#FAF9F5] border-b border-gray-200 z-40 px-6 py-6 flex flex-col gap-6 shadow-md transition-all duration-300">
          <ul className="flex flex-col gap-2 text-base">
            {navLinks.map((link) => (
              <li key={link.path} className="w-full flex">
                <Link 
                  to={link.path} 
                  className={`${linkStyle(link.path)} py-3 block`}
                  onClick={() => setIsOpen(false)} // Close menu when link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="border-gray-200" />

          {/* Mobile Status & Resume Action */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Open to work</span>
            </div>

            <a 
              href="/ahbaz-monday-resume.pdf" 
              download="Ahbaz_Monday_Resume.pdf"
              className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-1.5 hover:bg-gray-800 transition-colors w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Résumé
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
