import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-lg font-bold p-6">
      <div className="flex items-center">
        <img src="/maqoba.jpg" alt="Maqoba Jiyane" className="w-8 h-8 rounded-full mr-2" />
        <Link to="/" className="text-gray-800 text-lg">
          Maqoba Jiyane
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li><Link className="text-gray-800" to="/">Home</Link></li>
        <li><Link className="text-gray-800" to="/projects">Projects</Link></li>
        <li><Link className="text-gray-800" to="/about">About Me</Link></li>
        <li><Link className="text-gray-800" to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
