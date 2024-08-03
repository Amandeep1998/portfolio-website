// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Redux',
    'TypeScript',
    'RESTful APIs',
    'Webpack',
    'Babel',
    'Git',
    'Responsive Design',
    'SASS/SCSS',
    'Bootstrap/Tailwind CSS',
    'Styled Components',
    'Material UI',
    'Ant Design',
    'Formik',
    'Next.js',
    'Java',
    'Node.js',
    'MongoDB',
    'moment-js',
    'express.js',
    'mongoose',
    'C++',
    'C',
    'jQuery',
    'Python',
    'MySQL'
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;