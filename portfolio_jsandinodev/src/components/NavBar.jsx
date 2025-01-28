import React from 'react'

export const NavBar = () => {
    
    return (
        <header className="flex justify-center items-center py-5 w-full mx-auto fixed">
            <nav className="flex flex-row gap-x-8">
                <a href="#top" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</a>
                <a href="#experience" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Experience</a>
                <a href="#projects" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
                <a href="#about" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
                <a href="#contact" className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a>
            </nav>
        </header>
    )
}
