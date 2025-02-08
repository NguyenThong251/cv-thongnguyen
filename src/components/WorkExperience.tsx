import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type WorkExperienceType = {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export default function WorkExperience() {
  const workRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (workRef.current) {
      gsap.from(workRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  const workData: WorkExperienceType[] = [
    {
      company: 'DigiMe CO., LTD',
      role: 'GIS Data Processing',
      period: 'Sep, 2022 - June, 2024',
      location: 'HCMC, VietNam',
      responsibilities: [
        'Developed software solutions for geospatial data processing, improving data accuracy and efficiency',
        'Worked with various data formats (GeoTIFF, Shapefile, PNG, JPG) and GIS tools to extract and visualize information',
        'Gained experience in training AI models for object detection using YOLO, applying deep learning techniques to map-based datasets.'
      ]
    },
    {
      company: 'Softworld Technology',
      role: 'Full-Stack Developer Intern',
      period: 'Jul 2023 – Oct 2023',
      location: 'HCMC, VietNam',
      responsibilities: [
        'Developed and maintained web applications using Next.js, React, and Laravel',
        'Implemented RESTful APIs and optimized backend performance',
        'Gained hands-on experience in database management, authentication, and cloud deployment',
        'Researched and implemented AI-powered applications using LangChain, integrating LLMs (Large Language Models) for chatbot development and automation tasks.'
      ]
    },
    {
      company: 'MindX Technology',
      role: 'Programming Instructor',
      period: 'Nov 2023 – Present',
      location: 'HCMC, VietNam',
      responsibilities: [
        'Taught programming courses on Python, JavaScript, and Web Development to students aged 6-18',
        'Designed and delivered hands-on projects in Scratch, GameMaker, and Robotics',
        'Mentored students in problem-solving and algorithmic thinking.'
      ]
    },
    {
      company: 'SteamZone',
      role: 'EdTech Engineer & Instructor',
      period: 'Nov 2024 – Feb 2025',
      location: 'HCMC, VietNam',
      responsibilities: [
        'Developed and programmed IoT model devices using C++, enhancing automation and real-time data processing',
        'Provided technical support for the installation and troubleshooting of CNC machines, 3D printers, and robotic systems',
        'Designed and programmed robotic applications using JavaScript and Python, optimizing functionality and performance',
        'Taught advanced computer science at the primary level, incorporating hands-on STEM activities to inspire creativity and problem-solving skills in young learners.'
      ]
    }
  ];

  return (
    <section ref={workRef} className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
     
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">
        Work Experience
        </h2>
        
        
        {workData.map((work, index) => (
          <div key={index} className="banner-glow  -inset-4 bg-gradient-to-r from-[#42d392] to-[#647eff] rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{work.company}</h3>
                <p className="text-gray-600 dark:text-gray-100">{work.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-100 dark:text-gray-400">{work.period}</p>
                <p className="text-sm text-gray-100 dark:text-gray-400">{work.location}</p>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-100 dark:text-gray-300">
              {work.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}