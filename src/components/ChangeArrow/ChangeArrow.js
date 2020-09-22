import React from 'react';

import { ReactComponent as Down } from '../../assets/icon-down.svg';
import { ReactComponent as Up } from '../../assets/icon-up.svg';

import './ChangeArrow.scss'

const ChangeArrow = ({className, change, unit}) =>{
	return(
		<h6 className = {`${change >= 0 ? 'arrow--green' : 'arrow--red'} ${className}`}>
			<span className = 'arrow'>
				{ (change >= 0) ? 
					<Up/> : 
					<Down/>
				}
				</span>			
			<span className = 'changeValue'>{change}</span>
			<span className = 'unit'>{unit}</span>
		</h6>
	)
}

export default ChangeArrow;
