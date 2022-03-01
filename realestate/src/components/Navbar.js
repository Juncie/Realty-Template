import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

import Logo from '../assets/Logo.js';

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY > 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	return (
		<nav className={navbar ? 'navbar active' : 'navbar'}>
			<Link to='/' className='logo-link'>
				<img src={Logo} alt='Realtor-Logo' />
			</Link>
			<ul>
				<Link className='nav-links' to='/'>
					Buy
				</Link>

				<Link className='nav-links' to='/about'>
					Sell
				</Link>

				<Link className='nav-links' to='/contact'>
					Rent
				</Link>
			</ul>
		</nav>
	);
}

export default Navbar;
