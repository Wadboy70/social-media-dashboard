import React from 'react';

import MainCard from '../MainCard/MainCard';
import OverviewGroup from '../OverviewGroup/OverviewGroup';

import './Dashboard.scss';
import platformInfo from '../../utils/PlatformInfo';

const Dashboard = () =>{
	const PLATFORMS = Object.keys(platformInfo);
	
	return(
		<div className = 'dashboard app__dashboard'>
			<div className = 'main dashboard__mainCards'>
				{
					PLATFORMS.map((platform, index) => (
						<MainCard 
							platformInfo = {platformInfo[platform]}
							key = {index}
						/>
					))
				}
			</div>
			<div className = 'overview dashboard__overviewCards'>
				<h1>Overview - Today</h1>
				{
					PLATFORMS.map((platform, index) => (
						<OverviewGroup 
							platformInfo = {platformInfo[platform]}
							key = {index}
						/>
					))
				}
			</div>
     	</div>
	)
};


export default Dashboard;
