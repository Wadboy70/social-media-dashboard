import React, { useContext } from 'react';

import Switch from '../Switch/Switch';
import { ThemeContext } from "../../utils/ThemeContext";

import './Header.scss';

const Header = () =>{
	const [lightTheme, setLightTheme] = useContext(ThemeContext);
	return(
		<header className = 'header app__head'>
			<div className = 'titleBox header__titleBox'>
				<div className = 'titleBox__topBG'/>
				<h1 className = 'titleBox__title'>Social Media Dashboard</h1>
				<h3 className = 'titleBox__subTitle'>Total Followers: 23,004</h3>
				<hr/>
			</div>
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
