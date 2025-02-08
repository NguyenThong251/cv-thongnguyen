'use client'

import { useEffect, useRef } from 'react'
// import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// interface CourseCard {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   level: string;
// }

// const courses: CourseCard[] = [
//   {
//     id: 1,
//     title: "Web Development Fundamentals",
//     image: "/images/courses/web-dev.jpg",
//     description: "Learn HTML, CSS, and JavaScript basics",
//     level: "Beginner"
//   },
//   {
//     id: 2,
//     title: "React Masterclass",
//     image: "/images/courses/react.jpg",
//     description: "Advanced React concepts and best practices",
//     level: "Advanced"
//   },
//   {
//     id: 3,
//     title: "Full Stack Development",
//     image: "/images/courses/fullstack.jpg",
//     description: "Build complete web applications",
//     level: "Intermediate"
//   },
//   // Add more courses as needed
// ];

const Course = () => {
  const courseRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title
      gsap.fromTo(
        '.course-title',
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.course-title',
            start: 'top 80%',
          },
        }
      );

      // Animate cards with stagger effect
      gsap.fromTo(
        '.course-card',
        { 
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: '.courses-grid',
            start: 'top 80%',
          },
        }
      );

      // Hover animation for cards
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });
    }, courseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={courseRef} className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="course-title text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#f1f093] to-[#76d476]">
          {/* Featured Courses */}
          Comming Soon
        </h2>
        {/* <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="course-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
                <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Course;
