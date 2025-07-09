import React from 'react';

const testProjects = [
	{
		title: 'Recipedia',
		description: 'A recipe search and filter app built with React, Tailwind, and dummy JSON API.',
		tech: ['React', 'Javascript', 'Tailwind', 'Vite', 'Dummy JSON API'],
		link: 'https://recipedia-gold.vercel.app/',
	},
	{
		title: 'To Do',
		description: 'A minimalist to-do app that allows users to add, edit, and delete tasks. Built with React, Tailwind CSS, and Vite for a fast and responsive experience.',
		tech: ['React', 'Javascript', 'Tailwind', 'Vite'],
		link: 'https://todo-pi-ten.vercel.app/',
	},
	{
		title: 'Portfolio V2',
		description: 'My updated developer portfolio made using Vite, Tailwind, and React.',
		tech: ['React', 'Javascript', 'Tailwind', 'Vite'],
		link: '#',
	},
];

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative font-mono min-h-[calc(100vh-64px)] px-4 sm:px-6 md:px-16 py-16 text-black dark:text-white"
		>
			<h2 className="text-3xl font-bold mb-12 text-center text-[#1261A0]">Projects</h2>
			
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{testProjects.map((project, index) => (
					<a
						key={index}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="block bg-white rounded-lg p-6 transition-transform transform hover:scale-105"
						style={{
							boxShadow:
								'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
						}}
					>
						<h3 className="text-xl font-semibold text-[#1261A0] mb-2">
							{project.title}
						</h3>
						<p className="text-sm text-black mb-3">{project.description}</p>
						<div className="flex flex-wrap gap-2 text-xs text-white">
							{project.tech.map((tech, idx) => (
								<span
									key={idx}
									className="bg-[#1261A0] px-2 py-1 rounded"
								>
            {tech}
          </span>
							))}
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Projects;
