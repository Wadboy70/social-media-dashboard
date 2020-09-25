import React from 'react';

import { ReactComponent as Down } from '../../assets/icon-down.svg';
import { ReactComponent as Up } from '../../assets/icon-up.svg';

import './ChangeArrow.scss'

const ChangeArrow = ({className, change, unit}) =>{
	return(
		<div className = {`${className} arrow`}>
			<span className = 'point'>
				{ (change >= 0) ? 
					<Up/> : 
					<Down/>
				}
			</span>	
			<h6 className = {`${change >= 0 ? 'arrow--green' : 'arrow--red'}`}>		
				<span className = 'changeValue'>{change > 0 ? change : change*-1}</span>
				<span className = 'unit'>{unit}</span>
			</h6>
		</div>
	)
}

export default ChangeArrow;
