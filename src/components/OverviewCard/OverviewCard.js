import React from 'react';

import { ReactComponent as Down } from '../../assets/icon-down.svg';
import { ReactComponent as Up } from '../../assets/icon-up.svg';

import './OverviewCard.scss'

const OverviewCard = ({metric: {name, count, change}, Logo}) =>{
	return(
		<div className = 'overviewCard overviewGroup__overviewCard'>
			<div className = 'overviewCard__name'>{name}:</div>
			<div className = 'overviewCard__count'>{count}</div>
			<Logo className = 'overviewCard__logo'/>
			<div className = 'overviewCard__change'> 
				<span className = 'overviewCard__arrow'>
					{
						change >= 0 ? 
						<Up/> : 
						<Down/>
					} 
				</span>
				<span className = 'overviewCard__changeValue'>
					{change}
				</span>
			</div>
		</div>
	)
}

export default OverviewCard;
