import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animations for text content
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      });

      // Scroll-triggered animations for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      });

      // Parallax effect for banner image
      gsap.to('.banner-image', {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Floating animation for banner
      gsap.to('.banner-image', {
        y: '+=15',
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      // Enhanced glow effect animation
      gsap.to('.banner-glow', {
        opacity: 0.15,
        scale: 1.1,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      // Button hover animations
      const primaryBtns = document.querySelectorAll('.btn-primary');
      const secondaryBtns = document.querySelectorAll('.btn-secondary');
      
      primaryBtns.forEach(button => {
        const gradientBg = button.querySelector('.gradient-bg');
        
        button.addEventListener('mouseenter', () => {
          gsap.fromTo(gradientBg,
            { backgroundPosition: '0% 0%' },
            { 
              backgroundPosition: '100% 0%',
              duration: 0.8,
              ease: 'none',
              repeat: -1
            }
          );
        });

        button.addEventListener('mouseleave', () => {
          gsap.killTweensOf(gradientBg);
          gsap.to(gradientBg, {
            backgroundPosition: '0% 0%',
            duration: 0.4,
            ease: 'power1.out'
          });
        });
      });

      secondaryBtns.forEach(button => {
        const gradientBg = button.querySelector('.gradient-bg');
        const text = button.querySelector('.gradient-text');
        
        button.addEventListener('mouseenter', () => {
          gsap.to(gradientBg, {
            opacity: 1,
            duration: 0.3
          });
          gsap.fromTo(gradientBg,
            { backgroundPosition: '0% 0%' },
            { 
              backgroundPosition: '100% 0%',
              duration: 0.8,
              ease: 'none',
              repeat: -1
            }
          );
          gsap.to(text, {
            color: 'white',
            duration: 0.3
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.killTweensOf(gradientBg);
          gsap.to(gradientBg, {
            opacity: 0,
            duration: 0.3
          });
          gsap.to(text, {
            color: 'transparent',
            duration: 0.3
          });
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-32 lg:py-40 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Introduction */}
          <div ref={contentRef} className="space-y-6 lg:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Nguyen Hoang Thong
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in modern web technologies.
              My focus is on creating elegant, efficient, and user-friendly solutions that make
              a real impact. With a strong foundation in both front-end and back-end development,
              I bring ideas to life through clean code and intuitive design.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/NguyenHoangThong_CV.pdf"
                target="_blank"
                className="btn-primary px-6 py-3 text-white rounded-lg relative overflow-hidden"
              >
                <span className="relative z-10">Resume</span>
                <div className="gradient-bg absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-[#42d392] via-[#647eff] to-[#42d392]"></div>
              </a>
              <Link 
                href="/courses"
                className="btn-secondary px-6 py-3 rounded-lg relative overflow-hidden border-2 border-[#42d392]"
              >
                <span className="relative z-10 gradient-text">My Courses</span>
                <div className="gradient-bg absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-[#42d392] via-[#647eff] to-[#42d392] opacity-0"></div>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-6">
              <Link 
                href="https://github.com/NguyenThong251" 
                target="_blank"
                className="text-2xl text-foreground/80 hover:text-[#42d392] transition-colors duration-300"
              >
                <FaGithub />
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=100049657233032" 
                target="_blank"
                className="text-2xl text-foreground/80 hover:text-[#42d392] transition-colors duration-300"
              >
                <FaFacebook />
              </Link>
             
              <Link 
                href="www.linkedin.com/in/hoàng-thông-a89a8327b" 
                target="_blank"
                className="text-2xl text-foreground/80 hover:text-[#42d392] transition-colors duration-300"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Right Column - Banner Image */}
          <div ref={imageRef} className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="banner-glow absolute -inset-4 bg-gradient-to-r from-[#42d392] to-[#647eff] opacity-20 blur-2xl rounded-full"></div>
              {/* <img 
                src="/thong-banner.svg" 
                alt="Thong Banner" 
                className="banner-image relative w-full h-auto drop-shadow-2xl"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              /> */}
              {/* <Image src="/thong-banner.svg" alt='banner' className="banner-image relative w-full h-auto drop-shadow-2xl"/> */}
              <div style={{ position: "relative", width: "100%", height: "600px" }}>
  <Image src="/thong-banner.svg" alt="Thong Banner" fill style={{ objectFit: "contain" }} />
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;