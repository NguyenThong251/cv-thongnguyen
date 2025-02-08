import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import Image from 'next/image';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Define all skills with their categories
const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: 'TypeScript', icon: '/skills/typescript.svg' },
      { name: 'Python', icon: '/skills/python.svg' },
      { name: 'Java', icon: '/skills/java.svg' },
      { name: 'C/C++', icon: '/skills/c-plusplus.svg' },
      { name: 'PHP', icon: '/skills/php.svg' },
      { name: 'Solidity', icon: '/skills/solidity.svg' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: '/skills/html5.svg' },
      { name: 'CSS3', icon: '/skills/css_old.svg' },
      { name: 'React', icon: '/skills/react.svg' },
      { name: 'Next.js', icon: '/skills/nextjs.svg' },
      { name: 'Vue', icon: '/skills/vue.svg' },
      { name: 'Nuxt.js', icon: '/skills/nuxt.svg' },
      { name: 'Angular', icon: '/skills/angular.svg' },
      { name: 'Tailwind', icon: '/skills/tailwindcss.svg' },
      { name: 'Bootstrap', icon: '/skills/bootstrap.svg' },
      { name: 'Sass', icon: '/skills/sass.svg' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: '/skills/nodejs.svg' },
      { name: 'Laravel', icon: '/skills/laravel.svg' },
      { name: 'MySQL', icon: '/skills/mysql.svg' },
      { name: 'MongoDB', icon: '/skills/mongodb.svg' },
      { name: 'WordPress', icon: '/skills/wordpress.svg' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', icon: '/skills/git.svg' },
      { name: 'GitHub', icon: '/skills/github.svg' },
      { name: 'GitLab', icon: '/skills/gitlab.svg' },
      { name: 'Docker', icon: '/skills/docker.svg' },
     
    ],
  },
  {
    title: 'Design & Others',
    skills: [
      { name: 'Figma', icon: '/skills/figma.svg' },
      { name: 'Photoshop', icon: '/skills/photoshop.svg' },
      { name: 'Illustrator', icon: '/skills/illustrator.svg' },
      
    ],
  },
];

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill categories
      const categories = gsap.utils.toArray<HTMLElement>('.skill-category');
      categories.forEach((category, index) => {
        gsap.from(category, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: category,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      });

      // Animate individual skill items within each category
      categories.forEach((category) => {
        const items = gsap.utils.toArray<HTMLElement>(category.querySelectorAll('.skill-item'));
        gsap.from(items, {
          scale: 0.8,
          // opacity: 10,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: category,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        });
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
       
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">
        Skills & Technologies
        </h2>
        <div className="space-y-20">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-8 text-white/90 flex items-center">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item group flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="relative w-12 h-12 mb-3 transform group-hover:rotate-3 transition-transform duration-300">
                      {/* <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                      /> */}
                       <img
                        src={skill.icon}
                        alt={skill.name}
                     
                        className="object-contain filter brightness-100  group-hover:brightness-110 transition-all duration-300"
                      />
                    
                    </div>
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;