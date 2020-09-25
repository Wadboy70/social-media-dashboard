import React from 'react';

import ChangeArrow from '../ChangeArrow/ChangeArrow';

import './OverviewCard.scss'

const OverviewCard = ({metric: {name, count, change}, Logo}) =>{
	return(
		<div className = 'overviewCard overviewGroup__overviewCard'>
			<div className = 'cardCol overviewCard__cardCol'>
				<h4 className = 'cardCol__name'>{name}</h4>
				<h5 className = 'cardCol__count'>{count}</h5>				
			</div>
			<div className = 'cardCol overviewCard__cardCol'>
				<Logo className = 'cardCol__logo'/>
				<ChangeArrow 
					className = 'cardCol__change'
					change = {change}
					unit = '%'
				/>
			</div>
		</div>
	)
}

export default OverviewCard;
