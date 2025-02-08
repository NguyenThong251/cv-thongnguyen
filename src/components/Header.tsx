"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        gsap.to(e.currentTarget, {
          y: -2,
          scale: 1.05,
          color: 'var(--color-primary)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', (e) => {
        gsap.to(e.currentTarget, {
          y: 0,
          scale: 1,
          color: 'var(--color-secondary)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  useEffect(() => {
    if (menuRef.current && menuItemsRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          height: 'auto',
          duration: 0.5,
          ease: 'power4.out'
        });
        gsap.from(menuItemsRef.current.children, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.out'
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power4.inOut'
        });
      }
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-[999]">
      <nav className="container mx-auto flex justify-between items-center px-4 py-5">
        <div className="animate-slide-in">
          <Link 
            href="/" 
            className="flex items-center group text-foreground hover:text-primary transition-colors"
          >
            <Logo />
          </Link>
        </div>

        {/* Desktop Menu */}
        {pathname !== "/courses" && ( <div className="hidden md:flex space-x-8 animate-fade-in">
          <Link href="#about" className="nav-link text-lg font-medium text-secondary">About</Link>
          <Link href="#projects" className="nav-link text-lg font-medium text-secondary">Projects</Link>
          <Link href="#skills" className="nav-link text-lg font-medium text-secondary">Skills</Link>
          <Link href="#contact" className="nav-link text-lg font-medium text-secondary">Contact</Link>
         
            <Link href="/courses" className="nav-link text-lg font-medium text-secondary">Course</Link>
        
        </div>  )}

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        {pathname == "/courses" && (  <a href="https://www.facebook.com/profile.php?id=100049657233032"  className="btn-primary px-6 py-2 text-white rounded-lg relative overflow-hidden">
        <span className="relative z-10"> 
        Liên hệ
          </span>
          <div className="gradient-bg absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-[#42d392] via-[#647eff] to-[#42d392]"></div>
        </a>)}
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden h-0"
        style={{ height: 0 }}
      >
       {pathname !== "/courses" && ( <div
          ref={menuItemsRef}
          className="container mx-auto px-4 py-4 flex flex-col space-y-4"
        >
          <Link href="#about" onClick={handleNavClick} className="nav-link text-lg font-medium text-secondary">About</Link>
          <Link href="#projects" onClick={handleNavClick} className="nav-link text-lg font-medium text-secondary">Projects</Link>
          <Link href="#skills" onClick={handleNavClick} className="nav-link text-lg font-medium text-secondary">Skills</Link>
          <Link href="#contact" onClick={handleNavClick} className="nav-link text-lg font-medium text-secondary">Contact</Link>
          
            <Link href="/courses" onClick={handleNavClick} className="nav-link text-lg font-medium text-secondary">Course</Link>
         
        </div> )}
      </div>
    </header>
  );
};

export default Header;
