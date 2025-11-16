
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; isActive: boolean; }> = ({ href, children, onClick, isActive }) => (
  <a 
    href={href} 
    onClick={onClick} 
    className={`block sm:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}`}
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  }
  
  const navLinks = [
      { href: '#about', label: 'About'},
      { href: '#skills', label: 'Skills'},
      { href: '#projects', label: 'Projects'},
  ];

  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <a href="#">{PERSONAL_INFO.name}</a>
          </div>
          <div className="hidden sm:block">
             {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} isActive={activeLink === link.href.substring(1)}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-slate-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden mt-4">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu} isActive={activeLink === link.href.substring(1)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
