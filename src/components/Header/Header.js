import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='md:flex md:justify-between py-2 bg-red-100'>
            <div className='text-xl font-bold md:pl-10'>
                <h3 className='sm:text-center'>Coding School</h3>
            </div>
            <div className='md:flex space-x-4 md:pr-10 font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/statistic'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;