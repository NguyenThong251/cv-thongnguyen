'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface CourseCard {
  id: number;
  title: string;
  image: string;
  description: string;
  level: string;
}

const courses: CourseCard[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    image: "/courses/course1.jpg",
    description: "Learn HTML, CSS, and JavaScript Pro ",
    level: "Beginner"
  },
  // Add more courses as needed
];

const Course = () => {
  const courseRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title with rotation and skew
      gsap.fromTo(
        '.course-title',
        { 
          opacity: 0,
          y: 50,
          rotation: -10,
          skewX: 10
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          skewX: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: '.course-title',
            start: 'top 80%',
          },
        }
      );

      // Animate cards with stagger effect and parallax
      gsap.fromTo(
        '.course-card',
        { 
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: -5,
          skewY: 5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          skewY: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.courses-grid',
            start: 'top 80%',
          },
        }
      );

      // Hover animation for cards with color change and glow
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              rotation: 2,
              skewX: 2,
              backgroundColor: '#f3f4f6',
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(card.querySelector('img'), {
              scale: 1.1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotation: 0,
              skewX: 0,
              backgroundColor: '#ffffff',
              duration: 0.3,
              ease: 'power2.out',
            });
            gsap.to(card.querySelector('img'), {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });

      // Parallax effect for images
      gsap.utils.toArray<HTMLElement>('.course-card').forEach((card) => {
        const image = card.querySelector('img');
        gsap.fromTo(
          image,
          { y: -20 },
          {
            y: 20,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, courseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={courseRef} className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 mt-20">
        <h2 className="course-title text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">
          My Courses
        </h2>
        <div className="courses-grid grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="course-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden ">
                {/* <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                /> */}
                <Image
  src={course.image}
  alt={course.title}
  fill
  className="object-cover w-full h-full !-translate-y-1 transition-transform duration-300 hover:scale-110"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
                <div className="mt-4">
                  {/* <Link href={`/courses/${course.id}`} className="inline-block px-6 py-2 text-white rounded-full bg-gradient-to-r from-[#42d392] to-[#647eff] hover:from-[#647eff] hover:to-[#42d392] transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">View Course</span>
                    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </Link> */}
                  <Link href={`/courses/${course.id}`} className="relative inline-block px-6 py-2 text-white rounded-full bg-gradient-to-r from-[#42d392] to-[#84d0f3] transition-all duration-300 ease-linear hover:bg-[linear-gradient(to_right,#647eff,#42d392)]">
  <span className="relative z-10">View Course</span>
  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 duration-300 transition-opacity  ease-linear"></div>
</Link>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;