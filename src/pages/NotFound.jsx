import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-black dark:bg-zinc-950 dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! La página que buscas no fue encontrada.</p>
      <NavLink
        to="/"
        className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
      >
        Volver al Inicio
      </NavLink>
    </div>
  );
};

export default NotFound;
