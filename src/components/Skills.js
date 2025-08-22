import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressBar = styled.div`
  width: 60px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 3px;
`;

const ProgressText = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  min-width: 30px;
  text-align: right;
`;

const Icon = styled.div`
  font-size: 1.2rem;
  opacity: 0.8;
`;

const Skills = ({ onSectionChange }) => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TailwindCss', level: 100 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Three.js', level: 80 },
        { name: 'Bootstrap 5', level: 100 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Php', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'MySQL', level: 95 },
        { name: 'API Integration', level: 90 },
        { name: 'Laravel', level: 75 }
      ]
    },
    {
      title: 'Design & Tools',
      icon: '🎯',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'WordPress', level: 95 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Shopify', level: 80 },
        { name: 'Webflow', level: 70 },
        { name: 'Canva', level: 100 }
      ]
    },
    {
      title: 'Other Skills',
      icon: '🚀',
      skills: [
        { name: 'Framer Motion', level: 90 },
        { name: 'Styled Components', level: 95 },
        { name: 'CPanel', level: 85 },
        { name: 'Elementor Pro', level: 95 },
        { name: 'Divi', level: 70 },
        { name: 'FTP', level: 80 }
      ]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </SectionTitle>

        <SkillsGrid
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CategoryTitle>
                <Icon>{category.icon}</Icon>
                {category.title}
              </CategoryTitle>
              
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, x: 0 }
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>
                      <ProgressBar>
                        <ProgressFill
                          initial={{ width: 0 }}
                          animate={controls}
                          variants={{
                            visible: { width: `${skill.level}%` }
                          }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                        />
                      </ProgressBar>
                      <ProgressText>{skill.level}%</ProgressText>
                    </SkillLevel>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
