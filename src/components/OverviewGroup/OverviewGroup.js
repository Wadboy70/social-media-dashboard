import React from 'react';

import OverviewCard from '../OverviewCard/OverviewCard';

import './OverviewGroup.scss'

const OverviewGroup = ({platformInfo: {metrics, Logo}}) =>{
	return(
		<div className = {`overviewGroup overview__overviewGroup`}>
			{
				metrics.map((metric, key) => (
					<OverviewCard 
						key = {key}
						metric = {metric}
						Logo = {Logo}
					/>
				))
			}
		</div>
	)
};

export default OverviewGroup;

