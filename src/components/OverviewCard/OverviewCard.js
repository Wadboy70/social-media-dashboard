import React from 'react';

import ChangeArrow from '../ChangeArrow/ChangeArrow';

import './OverviewCard.scss'

const OverviewCard = ({metric: {name, count, change}, Logo}) =>{
	return(
		<div className = 'overviewCard overviewGroup__overviewCard'>
			<h4 className = 'overviewCard__name'>{name}:</h4>
			<h5 className = 'overviewCard__count'>{count}</h5>
			<Logo className = 'overviewCard__logo'/>
			<ChangeArrow 
				className = 'overviewCard__change'
				change = {change}
				unit = '%'
			/>
		</div>
	)
}

export default OverviewCard;
