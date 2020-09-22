import React from 'react';

import './Switch.scss'

const Switch = ({handleToggle, isOn}) =>{
	//figure how to run a function when the checkbox is changed :)
	return(
		<label className = 'switch'>
			<input type = 'checkbox' 
				checked = {isOn}
				onChange = {handleToggle}
			/>
			<span className = 'slider round'></span>
		</label>
	)
}

export default Switch;
