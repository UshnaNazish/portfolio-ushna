import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../images/naeemfoods.png';
import image2 from '../images/portfolio.png';
import image3 from '../images/dashboard.png';
import image4 from '../images/web610fun.png';
import image5 from '../images/lvdagency.png';
import image6 from '../images/venture.png';

const ProjectsSection = styled.section`
  min-height: auto; /* ✅ allow flexible height */
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  position: relative;
  opacity: 1;

  @media (max-width: 768px) {
    opacity: 1;
  }

  @media (max-width: 480px) {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* ✅ smaller min width */
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    opacity: 1;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* ✅ single column on phones */
    gap: 1rem;
    opacity: 1;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;

  @media (max-width: 480px) {
    height: 150px; /* ✅ smaller image on phones */
    opacity: 1;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const ProjectContent = styled.div`
  padding: 1.25rem;

  @media (max-width: 480px) {
    
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.2);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ProjectLink = styled(motion.a)`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }
  }

  &.secondary {
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const Projects = ({ onSectionChange }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with WordPress, WooCommerce, and custom plugins...',
      tech: ['WordPress', 'ElementorPro', 'WooCommerce', 'MailChimp', 'Wp Form 7', 'Light Speed Cache'],
      image: image1,
      liveUrl: 'https://naeemfoods.cc/',
    },
    {
      id: 2,
      title: '3D Portfolio Website',
      description: 'An interactive 3D portfolio website using Three.js, TailwindCss, JavaScript, Motion.dev and React.js ...',
      tech: ['React.js', 'Three.js', 'Framer Motion', 'TailwindCss', 'Styled Components', 'Node.js', 'JavaScript', 'JSX'],
      image: image2,
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application built with TailwindCss, JavaScript, PHP, MySQL ...',
      tech: ['TailwindCSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL', 'Php Mailer', 'Stripe', 'FontAwesome'],
      image: image3,
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'WEB610 Fun',
      description: 'A creative and dynamic web experience featuring interactive animations, and modern web technologies to deliver an engaging UI...',
      tech: ['JavaScript', 'JQuery', 'Node.js', 'Three.js', 'BootStrap','3d Particles', 'Canvas', 'Microsoft Clarity'],
      image: image4,
      liveUrl: 'https://www.web610.fun/',
    },
    {
      id: 5,
      title: 'Lehigh Valley Digital',
      description: 'A responsive and SEO-optimized website for a digital agency, built with clean, maintainable code and modern web practices.',
      tech: ['BootStrap', 'JavaScript', 'JQuery', 'Three.js', 'PHP', 'MySQL', 'Microsoft Bookings', 'Microsoft Clarity'],
      image: image5,
      liveUrl: 'https://www.lvd.agency/',
    },
    {
      id: 6,
      title: 'Venture X',
      description: 'A responsive and intuitive multi-location workspace site, built with clean HTML, CSS, JavaScript, and seamless UX for FAQs, booking, and membership offerings.',
      tech: ['HTML5', 'CSS3', 'BootStrap', 'JavaScript', 'Google Maps API', 'Microsoft Clarity'],
      image: image6,
      liveUrl: 'https://vxlv.network/',
    }
  ];

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </SectionTitle>

        <ProjectsGrid
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                
                <ProjectLinks>
                  <ProjectLink
                    href={project.liveUrl}
                    className="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
