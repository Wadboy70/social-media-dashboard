import React from 'react';

import './OverviewCard.scss'

const OverviewCard = ({metric, value, name}) =>{
	return(
		<div className = {`${name}_stats__`}>
			<span>{metric}:</span>
			<span>{value}</span>
		</div>
	)
}

export default OverviewCard;
