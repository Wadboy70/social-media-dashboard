import React from 'react';

import OverviewCard from '../OverviewCard/OverviewCard';

import './OverviewGroup.scss'

const OverviewGroup = ({platformInfo: {name, metrics}}) =>{
	const metricArr = Object.keys(metrics);
	return(
		<div className = {`${name}_stats overview__${name}`}>
			{
				metricArr.map(metric => (
					<OverviewCard 
						metric = {metric.replace(/_/g, " ")} 
						value = {metrics[metric]}
						name = {name}
					/>
				))
			}
		</div>
	)
};

export default OverviewGroup;

