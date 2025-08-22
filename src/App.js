import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';


const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled(motion.main)`
  position: relative;
  z-index: 1;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('7eVYMIT2jnCvsNxtf'); // Replace with your EmailJS public key
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AppContainer>
      <Background3D currentSection={currentSection} />
      <Header onSectionChange={handleSectionChange} />
      <MainContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero onSectionChange={handleSectionChange} />
        <About onSectionChange={handleSectionChange} />
        <Skills onSectionChange={handleSectionChange} />
        <Projects onSectionChange={handleSectionChange} />
        <Contact onSectionChange={handleSectionChange} />
      </MainContent>
      <CustomCursor />
    </AppContainer>
  );
}

export default App;
