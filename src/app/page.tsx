// import Head from 'next/head';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
     
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}