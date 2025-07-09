import React from 'react';
import profile from '../assets/images/jjacobo-1.webp';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown } from 'lucide-react'; // icon for scroll cue

const About = () => {
	return (
		<section id="about" className="relative font-mono min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-16 py-10">
			{/* Left content */}
			<div className="w-full md:w-2/3 md:pr-6 text-center md:text-left">
				<h1 className="text-lg sm:text-xl md:text-2xl mb-2">Hi, my name is</h1>
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1261A0] mb-4">
					Jefferson Jacobo
				</h2>
				<h3 className="text-xl sm:text-2xl md:text-3xl flex items-center justify-center md:justify-start gap-2 mb-6">
					<span id="typewritter" className="bg-[linear-gradient(to_right,_black_0%,_#1261A0_70%,_#1261A0_100%)] bg-clip-text text-transparent">
						<Typewriter
							words={[
								'A full-stack developer.',
								'Growth-Oriented Developer.',
								'Minimalist Coder.',
								'Code with Passion.',
							]}
							loop
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</h3>
				
				<p className="text-sm sm:text-base mb-4 leading-relaxed">
					I'm a Full-Stack Developer based in the Philippines. I have developed many types of
					websites and software — from mobile apps to booking systems to eCommerce platforms.
				</p>
				<p className="text-sm sm:text-base leading-relaxed">
					I have experience maintaining systems, building APIs, integrating features, and
					turning ideas into functional apps. I’ve worked with desktop (.NET/C#), mobile
					(Angular), and web (CodeIgniter 4) applications — and I’m always eager to learn new
					technologies to build scalable, modern solutions.
				</p>
			</div>
			
			{/* Right image */}
			<div className="w-full max-w-[240px] sm:max-w-[280px] md:w-1/4">
				<img
					src={profile}
					alt="Jefferson Jacobo"
					className="rounded-xl shadow-lg object-cover w-full h-auto"
				/>
			</div>
			
			{/* Scroll-down indicator */}
			<a
				href="#experience"
				className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
			>
				<ChevronDown className="w-6 h-6 animate-bounce text-[#1261A0] cursor-pointer" />
			</a>
		</section>
	);
};

export default About;
