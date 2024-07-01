

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li><Link className="text-white" to="/">Home</Link></li>
        <li><Link className="text-white" to="/projects">Projects</Link></li>
        <li><Link className="text-white" to="/about">About Me</Link></li>
        <li><Link className="text-white" to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
