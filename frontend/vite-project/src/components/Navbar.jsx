import React, { useState, useEffect } from 'react';
import { Moon, Sun, Search, Menu } from 'lucide-react'; // Import Menu for the hamburger icon
import Login from './Login';
const navItems = {
    Home: '/',
    Course: '/course',
    About: '/about',
    Contact: '/contact',
};

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div
            className={`
        navbar fixed top-0 left-0 right-0 z-50
        px-6 py-4                     {/* Increased padding for larger size */}
        transition-all duration-300 ease-in-out
        ${scrolled
                    ? 'bg-base-200/90 backdrop-blur-md shadow-xl' : 'bg-base-100 shadow-md'
                }
      `}
        >
            {/* Navbar Start Section (Logo and Mobile Menu) */}
            <div className="navbar-start flex items-center">
                <div className="lg:hidden dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost text-base-content hover:bg-base-300 focus:outline-none" // Improved colors for ghost button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <Menu className="w-6 h-6" /> {/* Lucide icon for hamburger */}
                    </div>
                    <ul
                        tabIndex={0}
                        className={`
              menu menu-sm dropdown-content z-[1] p-2
              shadow-lg bg-base-100 rounded-box w-52
              transform origin-top-left
              ${isDropdownOpen ? 'block animate-fade-in' : 'hidden'} // Animate dropdown
            `}
                    >
                        {Object.entries(navItems).map(([label, href]) => (
                            <li key={label}>
                                <a href={href} className="text-base-content hover:bg-base-200 py-2 px-4 rounded-md">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-primary hover:bg-transparent"> {/* Larger, bolder logo */}
                    MySite
                </a>
            </div>

            {/* Navbar Center Section (Desktop Navigation) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2"> {/* Added space between items */}
                    {Object.entries(navItems).map(([label, href]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="text-base-content text-lg font-medium hover:bg-base-200 px-4 py-2 rounded-lg transition duration-200" // Larger, bolder nav links
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end flex items-center space-x-3 md:space-x-4"> {/* Increased spacing */}
                {/* Search Form */}
                <form onSubmit={handleSearch} className="flex items-center gap-1">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="
              input input-bordered input-md            {/* Larger input field */}
              w-28 sm:w-36 md:w-48 lg:w-64
              bg-base-200 text-base-content
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="btn btn-ghost btn-circle text-base-content hover:bg-base-300">
                        <Search className="w-5 h-5" /> {/* Slightly larger search icon */}
                    </button>
                </form>

                {/* Theme Toggle Button */}
                <button
                    onClick={() => setDarkMode(prev => !prev)}
                    className="btn btn-ghost btn-circle text-base-content hover:bg-base-300 focus:outline-none" // Improved button styling
                    aria-label="Toggle Theme"
                >
                    {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-blue-600" />} {/* Larger, colored icons */}
                </button>
                <button
                    className="
    btn btn-primary btn-md
    rounded-full px-6 transition duration-200
    hover:scale-105 transform
    hidden sm:flex
  "
                    onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                    Login
                </button>
                <Login />

            </div>
        </div>
    );
}

export default Navbar;