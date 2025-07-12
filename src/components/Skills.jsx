import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme.jsx';

const isDark = 'dark' ? true : false;
console.log(isDark);

const categories = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Mobile',
  'Tools',
  'Deployment',
  'AI',
];

const Skills = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    {
      name: 'JavaScript',
      category: 'Languages',
      icon: 'devicon-javascript-plain colored',
    },
    {
      name: 'TypeScript',
      category: 'Languages',
      icon: 'devicon-typescript-plain colored',
    },
    { name: 'C#', category: 'Languages', icon: 'devicon-csharp-plain colored' },
    {
      name: 'C++',
      category: 'Languages',
      icon: 'devicon-cplusplus-plain colored',
    },
    { name: 'HTML', category: 'Frontend', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', category: 'Frontend', icon: 'devicon-css3-plain colored' }, // optional
    {
      name: 'React',
      category: 'Frontend',
      icon: 'devicon-react-original colored',
    },
    {
      name: 'Angular',
      category: 'Frontend',
      icon: 'devicon-angularjs-plain colored',
    },
    {
      name: 'Ionic',
      category: 'Mobile',
      icon: 'devicon-ionic-original colored',
    },
    {
      name: 'Tailwind',
      category: 'Frontend',
      icon: 'devicon-tailwindcss-plain colored',
    },
    {
      name: 'Bootstrap',
      category: 'Frontend',
      icon: 'devicon-bootstrap-plain colored',
    },
    {
      name: 'JQuery',
      category: 'Frontend',
      icon: 'devicon-jquery-plain colored',
    },
    { name: 'Vite', category: 'Tools', icon: 'devicon-vitejs-plain colored' },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: 'devicon-nodejs-plain colored',
    },
    { name: 'PHP', category: 'Backend', icon: 'devicon-php-plain colored' },
    {
      name: 'Laravel',
      category: 'Backend',
      icon: 'devicon-laravel-plain colored',
    },
    {
      name: 'CodeIgniter 4',
      category: 'Backend',
      icon: 'devicon-codeigniter-plain colored',
    }, // ⚠️ May not exist — fallback to image if needed
    { name: 'MySQL', category: 'Backend', icon: 'devicon-mysql-plain colored' },
    {
      name: 'Firebase',
      category: 'Deployment',
      icon: 'devicon-firebase-plain colored',
    },
    {
      name: 'GitHub',
      category: 'Tools',
      icon:
        theme === 'dark'
          ? 'devicon-github-original' // white icon
          : 'devicon-github-original colored', // black icon
    },
    {
      name: 'VS Code',
      category: 'Tools',
      icon: 'devicon-vscode-plain colored',
    },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative font-mono min-h-[calc(100vh-64px)] px-4 sm:px-6 md:px-16 py-16 text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-[#1261A0]">
        Skills
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`skills-tab px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm text-black ${
              activeCategory === category
                ? 'bg-[#1261A0] text-white'
                : 'bg-transparent border-white/30 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Skills */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4 animate-slide-up">
        {filteredSkills.map((skill, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center justify-center rounded-md border border-border p-3 aspect-square shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 animate-fade-in overflow-hidden"
            style={{ animationDelay: `${300 + i * 50}ms` }}
          >
            {/* Icon */}
            <div className="text-3xl flex items-center justify-center transition-all duration-300 sm:group-hover:scale-75 sm:group-hover:opacity-10">
              <i className={`${skill.icon} text-white`}></i>
            </div>

            {/* Label hover */}
            <div className="mt-1 text-center sm:absolute sm:inset-0 sm:flex sm:items-center sm:justify-center sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300 sm:transform sm:group-hover:scale-105">
              <span className="skill-name text-black font-medium text-sm sm:text-xs px-1 py-0.5 sm:py-1 bg-background/80 backdrop-blur-sm rounded-md sm:w-auto sm:mx-2 w-full">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
