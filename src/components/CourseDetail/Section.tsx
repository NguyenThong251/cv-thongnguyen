import React from 'react';

interface SectionProps {
  title: string;
  content: string[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <section className="panel w-screen h-screen flex flex-col justify-center items-center p-8">
      <h2 className="sm:text-4xl text-xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">
        {title}
      </h2>
      <div className="space-y-4">
        {content.map((item, index) => (
          <p key={index} className="text-lg">{item}</p>
        ))}
      </div>
    </section>
  );
};

export default Section;