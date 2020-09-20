import React, { useContext } from 'react';

import Switch from '../Switch/Switch';
import { ThemeContext } from "../../utils/ThemeContext";

import './Header.scss';

const Header = () =>{
	const [lightTheme, setLightTheme] = useContext(ThemeContext);
	console.log(lightTheme);
	return(
		<header className = 'header app__head'>
			<h1 className = 'header__title'>Social Media Dashboard</h1>
			<h2 className = 'header__subTitle'>Total Followers: 23,004</h2>
			<hr/>
			<div className = 'theme header__changeTheme'>
				<h2 className = 'theme__mode'>Dark Mode</h2>
				<Switch />
			</div>
      </header>
	)
}

export default Header;
