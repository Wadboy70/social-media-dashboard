import React from 'react';

import './Switch.scss'

const Switch = () =>{
	return(
		<label className = 'switch'>
			<input type = 'checkbox'/>
			<span className = 'slider round'></span>
		</label>
	)
}

export default Switch;
