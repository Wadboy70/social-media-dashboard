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
			<h3 className = 'header__subTitle'>Total Followers: 23,004</h3>
			<hr/>
			<div className = 'theme header__changeTheme'>
				<h3 className = 'theme__mode'>Dark Mode</h3>
				<Switch 
					handleToggle = {() => setLightTheme(!lightTheme)} 
					isOn = {lightTheme}
				/>
			</div>
      </header>
	)
};


export default Header;
