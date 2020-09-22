import React from 'react';

import OverviewCard from '../OverviewCard/OverviewCard';

import './OverviewGroup.scss'

const OverviewGroup = ({platformInfo: {name, metrics, Logo}}) =>{
	return(
		<div className = {`${name}_stats overview__${name}`}>
			{
				metrics.map(metric => (
					<OverviewCard 
						metric = {metric}
						Logo = {Logo}
					/>
				))
			}
		</div>
	)
};

export default OverviewGroup;

