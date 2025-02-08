'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time updates and AI-powered recommendations',
      image: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/coding-better-composables_WH_800x424px.webp?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=YbFGUWf6aaZWdf00g%2F1ok3ueqxqzz%2BywllZYKXbhfKLcqNABYRI8dfXTu9lVY%2FNwwT5oQCbZqHJSO7yPCd7MwOKhjBsyoixtsjDERUvBxYlOwlmTzV3SH84n08Jx3sgnBwNEdvQnNPXHb9Fkul0NuxelZM9olhYd2C9v2mG8fOD35xaXEAx3qLY%2FSHjEwHGEFk%2FpyHuroAYGXwHKDhmKc7L2W6%2BtGouG5COzT3ypbZTSIKTCFCHkJlcJ9qV3C4qvpCoW8iL8MUzD2s1ctCFzyljO4%2BHD5xGAhpx%2BbYDjxXDvVkTsvdt1FRMlpfvk94k6ZWWUDXl%2Ff9gK%2F%2B0wh1UxCA%3D%3D',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/NguyenThong251'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization',
      image: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/coding-better-composables_WH_800x424px.webp?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=YbFGUWf6aaZWdf00g%2F1ok3ueqxqzz%2BywllZYKXbhfKLcqNABYRI8dfXTu9lVY%2FNwwT5oQCbZqHJSO7yPCd7MwOKhjBsyoixtsjDERUvBxYlOwlmTzV3SH84n08Jx3sgnBwNEdvQnNPXHb9Fkul0NuxelZM9olhYd2C9v2mG8fOD35xaXEAx3qLY%2FSHjEwHGEFk%2FpyHuroAYGXwHKDhmKc7L2W6%2BtGouG5COzT3ypbZTSIKTCFCHkJlcJ9qV3C4qvpCoW8iL8MUzD2s1ctCFzyljO4%2BHD5xGAhpx%2BbYDjxXDvVkTsvdt1FRMlpfvk94k6ZWWUDXl%2Ff9gK%2F%2B0wh1UxCA%3D%3D',
      tech: ['React', 'Node.js', 'D3.js'],
      link: 'https://github.com/NguyenThong251'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered language translation and sentiment analysis',
      image: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/coding-better-composables_WH_800x424px.webp?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=YbFGUWf6aaZWdf00g%2F1ok3ueqxqzz%2BywllZYKXbhfKLcqNABYRI8dfXTu9lVY%2FNwwT5oQCbZqHJSO7yPCd7MwOKhjBsyoixtsjDERUvBxYlOwlmTzV3SH84n08Jx3sgnBwNEdvQnNPXHb9Fkul0NuxelZM9olhYd2C9v2mG8fOD35xaXEAx3qLY%2FSHjEwHGEFk%2FpyHuroAYGXwHKDhmKc7L2W6%2BtGouG5COzT3ypbZTSIKTCFCHkJlcJ9qV3C4qvpCoW8iL8MUzD2s1ctCFzyljO4%2BHD5xGAhpx%2BbYDjxXDvVkTsvdt1FRMlpfvk94k6ZWWUDXl%2Ff9gK%2F%2B0wh1UxCA%3D%3D',
      tech: ['Python', 'TensorFlow', 'WebSocket'],
      link: 'https://github.com/NguyenThong251'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with smooth animations and modern design',
      image: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/coding-better-composables_WH_800x424px.webp?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=YbFGUWf6aaZWdf00g%2F1ok3ueqxqzz%2BywllZYKXbhfKLcqNABYRI8dfXTu9lVY%2FNwwT5oQCbZqHJSO7yPCd7MwOKhjBsyoixtsjDERUvBxYlOwlmTzV3SH84n08Jx3sgnBwNEdvQnNPXHb9Fkul0NuxelZM9olhYd2C9v2mG8fOD35xaXEAx3qLY%2FSHjEwHGEFk%2FpyHuroAYGXwHKDhmKc7L2W6%2BtGouG5COzT3ypbZTSIKTCFCHkJlcJ9qV3C4qvpCoW8iL8MUzD2s1ctCFzyljO4%2BHD5xGAhpx%2BbYDjxXDvVkTsvdt1FRMlpfvk94k6ZWWUDXl%2Ff9gK%2F%2B0wh1UxCA%3D%3D',
      tech: ['Next.js', 'GSAP', 'Tailwind CSS'],
      link: 'https://github.com/NguyenThong251'
    },
    {
      id: 5,
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/coding-better-composables_WH_800x424px.webp?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=YbFGUWf6aaZWdf00g%2F1ok3ueqxqzz%2BywllZYKXbhfKLcqNABYRI8dfXTu9lVY%2FNwwT5oQCbZqHJSO7yPCd7MwOKhjBsyoixtsjDERUvBxYlOwlmTzV3SH84n08Jx3sgnBwNEdvQnNPXHb9Fkul0NuxelZM9olhYd2C9v2mG8fOD35xaXEAx3qLY%2FSHjEwHGEFk%2FpyHuroAYGXwHKDhmKc7L2W6%2BtGouG5COzT3ypbZTSIKTCFCHkJlcJ9qV3C4qvpCoW8iL8MUzD2s1ctCFzyljO4%2BHD5xGAhpx%2BbYDjxXDvVkTsvdt1FRMlpfvk94k6ZWWUDXl%2Ff9gK%2F%2B0wh1UxCA%3D%3D',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      link: 'https://github.com/NguyenThong251'
    },
    { id: 6,
      title: 'Project 3',
      description: 'Description of project 3',
      tech: ['Vue.js', 'Express', 'PostgreSQL'],
      image: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/coding-better-composables_WH_800x424px.webp?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=YbFGUWf6aaZWdf00g%2F1ok3ueqxqzz%2BywllZYKXbhfKLcqNABYRI8dfXTu9lVY%2FNwwT5oQCbZqHJSO7yPCd7MwOKhjBsyoixtsjDERUvBxYlOwlmTzV3SH84n08Jx3sgnBwNEdvQnNPXHb9Fkul0NuxelZM9olhYd2C9v2mG8fOD35xaXEAx3qLY%2FSHjEwHGEFk%2FpyHuroAYGXwHKDhmKc7L2W6%2BtGouG5COzT3ypbZTSIKTCFCHkJlcJ9qV3C4qvpCoW8iL8MUzD2s1ctCFzyljO4%2BHD5xGAhpx%2BbYDjxXDvVkTsvdt1FRMlpfvk94k6ZWWUDXl%2Ff9gK%2F%2B0wh1UxCA%3D%3D',
      link: 'https://github.com/NguyenThong251'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clone cards for infinite scroll
      if (trackRef.current) {
        const cards = trackRef.current.querySelectorAll('.project-card');
        const cardsArray = Array.from(cards);
        const clonedCards = cardsArray.slice(0, 2).map(card => card.cloneNode(true));
        clonedCards.forEach(card => trackRef.current?.appendChild(card));
      }

      // Create smooth infinite scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
        }
      });

      // Animate the track
      tl.to(trackRef.current, {
        x: '-50%',
        ease: 'none',
      });

      // Animate individual cards
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        // Scale and rotation animation
        gsap.to(card, {
          scale: 1,
          rotation: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top center+=100',
            end: 'bottom center-=100',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        });

        // Parallax effect for card content
        gsap.to(card.querySelector('.card-content'), {
          y: '-20%',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        });

        // Hover animation
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
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">
          Featured Projects
        </h2>
        
        <div 
          ref={trackRef}
          className="flex gap-8 transform-gpu will-change-transform"
          style={{ width: 'fit-content' }}
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card w-[300px] md:w-[400px] bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transform scale-95 rotate-2 opacity-90 transition-all duration-300"
            >
              <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="card-content p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-foreground/70">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-[#42d392]/10 text-[#42d392] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#42d392] to-[#647eff] rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Projects;