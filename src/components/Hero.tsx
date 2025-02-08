'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation sequence
      // const tl = gsap.timeline();
      const tl = gsap.timeline({
        onComplete: () => {
          const loader = document.querySelector(".loader") as HTMLElement;
          if (loader) {
            loader.style.display = "none"; // Ẩn loader sau khi animation xong
          }
        },
      });

      // Reveal clips
      tl.from('.clip-top, .clip-bottom', {
        height: '50vh',
        duration: 2,
        ease: 'power4.inOut',
        delay: 0.5,
      });

      // Move text to center
      tl.to('.marquee', {
        top: '50%',
        duration: 3.5,
        ease: 'power4.inOut',
      }, '-=2');

      // Slide text from sides
      tl.from('.clip-top .marquee, .clip-bottom .marquee', {
        left: '100%',
        duration: 5,
        ease: 'power4.inOut',
      }, '-=3.5');

      tl.from('.clip-center .marquee', {
        left: '-50%',
        duration: 5,
        ease: 'power3.inOut',
      }, '-=5');

      // Hide clips
      tl.to('.clip-top', {
        clipPath: 'inset(0 0 100% 0)',
        duration: 2,
        ease: 'power4.inOut',
      }, '+=1');

      tl.to('.clip-bottom', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 2,
        ease: 'power4.inOut',
      }, '-=2');

      // Fade out text
      tl.to('.clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      }, '-=1');

      // Show main content
      tl.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Intro Animation */}
      <div className="loader absolute inset-0 z-50">
        <div className="loader-clip clip-top bg-black">
          <div className="marquee">
            <div className="marquee-container">
              <span>Nguyen</span>
              <span>Hoang</span>
              <span>Thong</span>
              <span>Dev</span>
              <span>Dev</span>
            </div>
          </div>
        </div>
        <div className="clip-center">
          <div className="marquee">
            <div className="marquee-container">
              <span>Nguyen</span>
              <span>Hoang</span>
              <span>Thong</span>
              <span>Dev</span>
              <span>Dev</span>
            </div>
          </div>
        </div>
        <div className="loader-clip clip-bottom bg-black">
          <div className="marquee">
            <div className="marquee-container">
              <span>Nguyen</span>
              <span>Hoang</span>
              <span>Thong</span>
              <span>Dev</span>
              <span>Dev</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center  bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl">I am a full stack web developer</p>
      </div>
    </section>
  );
};

export default Hero;