import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="/projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Proyectos
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Sobre mí
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;