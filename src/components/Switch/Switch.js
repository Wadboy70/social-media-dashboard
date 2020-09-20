import React from 'react';

import './Switch.scss'

const Switch = () =>{
	//figure how to run a function when the checkbox is changed :)
	return(
		<label className = 'switch'>
			<input type = 'checkbox' />
			<span className = 'slider round'></span>
		</label>
	)
}

export default Switch;
