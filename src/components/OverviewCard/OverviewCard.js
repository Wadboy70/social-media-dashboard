import React from 'react';

import { ReactComponent as Down } from '../../assets/icon-down.svg';
import { ReactComponent as Up } from '../../assets/icon-up.svg';

import './OverviewCard.scss'

const OverviewCard = ({metric: {name, count, change}, Logo}) =>{
	return(
		<div className = 'stats'>
			<span>{name}:</span>
			<span>{count}</span>
			<Logo/>
			<span> 
				{
					change >= 0 ? 
					<Up/> : 
					<Down/>
				} 
				{change}
			</span>
		</div>
	)
}

export default OverviewCard;
