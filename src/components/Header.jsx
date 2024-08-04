import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleSidebar }) => (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <FaBars className="block md:hidden cursor-pointer" onClick={toggleSidebar} />
    </header>
);

export default Header;
