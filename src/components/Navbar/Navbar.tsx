import React, { useState } from 'react';

interface NavbarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ showSidebar, toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="w-full px-4 py-3 bg-gray-900 text-white flex justify-between items-center shadow-md">
      <div className="text-lg font-bold">
        <button
          onClick={toggleSidebar}
          className="mr-6 text-xl focus:outline-none border border-red-500"
        >
          {showSidebar ? '✖' : '☰'}
        </button>
        My App
      </div>

      <div className="flex gap-1 items-center space-x-6">
        <a href="/" className="text-white hover:text-gray-400">Home</a>
        <a href="/about" className="text-white hover:text-gray-400">About</a>
        <a href="/services" className="text-white hover:text-gray-400">Services</a>
        <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className="text-white hover:text-gray-400 focus:outline-none"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};
