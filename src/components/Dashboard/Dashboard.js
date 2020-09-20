import React from 'react';

import MainCard from '../MainCard/MainCard';
import OverviewCard from '../OverviewCard/OverviewCard';

import './Dashboard.scss';
import platformInfo from '../../utils/PlatformInfo';

const Dashboard = () =>{
	const PLATFORMS = Object.keys(platformInfo);
	
	return(
		<div className = 'dashboard app__dashboard'>
			<div className = 'mainCards dashboard__mainCards'>
				{
					PLATFORMS.map(platform => (
						<MainCard platformInfo = {platformInfo[platform]}/>
					))
				}
			</div>
			<div className = 'overview dashboard__overviewCards'>
				{
					PLATFORMS.map(platform => (
						<div className = {`${platform} overview__${platform}`}>
							{
								platformInfo[platform].metric?.map(metric =>(
									<OverviewCard metricInfo = {metric}/>
								))
							}
						</div>
					))
				}
			</div>
     	</div>
	)
};


export default Dashboard;
