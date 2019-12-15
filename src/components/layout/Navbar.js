import React from 'react';
import PropTypes from 'prop-types';
import {Link, HashRouter} from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <HashRouter basename='/'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </HashRouter>
        </nav>
    );
};

Navbar.defaultProps = {
    title: 'GitHub Profile Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


export default Navbar
