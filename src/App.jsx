import React from 'react';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import ResumeDownload from './components/ResumeDownload';
import Links from './components/Links';
import Navbar from "./layout/Navbar";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import About from './sections/About';

const App = () => {
  return (
    <div className="font-mono bg-black text-green-400">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Education />
      <ResumeDownload />
      <Links />
      <Contact />
    </div>
  );
};

export default App;
