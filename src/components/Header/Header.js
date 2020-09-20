import React from 'react';

import Switch from '../Switch/Switch';

import './Header.scss'

const Header = () =>{
	return(
		<header>
			<h1>Social Media Dashboard</h1>
			<h2>Total Followers: 23,004</h2>
			<hr/>
			<div>
				<h2>Dark Mode</h2>
				<Switch/>
			</div>
      </header>
	)
}

export default Header;
