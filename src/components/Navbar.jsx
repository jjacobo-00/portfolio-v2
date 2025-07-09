import React, { useState } from 'react';
import logo from '../assets/logos/logo.svg';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.jsx';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (
        <nav className="transition-colors duration-300 w-full">
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-15 py-4">
                <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer transform transition-transform duration-200 hover:scale-125" />
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-6 font-medium">
                    <li>
                        <a href="#about" className="hover:text-blue-500 cursor-pointer">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-blue-500 cursor-pointer">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-blue-500 cursor-pointer">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-blue-500 cursor-pointer">
                            Skills
                        </a>
                    </li>
                    
                    {/* Desktop Theme Toggle */}
                    <li className="hidden md:block">
                        <button
                            className="p-2 rounded-md hover:bg-gray-100 hover:text-white dark:hover:bg-[#1261A0] transition-colors"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-inherit" />
                            ) : (
                                <Moon className="w-5 h-5 text-inherit" />
                            )}
                        </button>
                    </li>
                </ul>
                
                {/* Mobile Controls: Theme Toggle + Hamburger */}
                <div className="flex items-center space-x-4 md:hidden">
                    {/* Mobile Theme Toggle */}
                    <button
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#1261A0] transition-colors"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5 text-inherit" />
                        ) : (
                            <Moon className="w-5 h-5 text-inherit" />
                        )}
                    </button>
                    
                    {/* Hamburger Button */}
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 py-4 font-medium bg-white dark:bg-gray-900">
                    <li className="hover:text-blue-500 cursor-pointer">Experience</li>
                    <li className="hover:text-blue-500 cursor-pointer">Projects</li>
                    <li className="hover:text-blue-500 cursor-pointer">Skills</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
