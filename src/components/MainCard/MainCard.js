import React from 'react';

import { ReactComponent as Down } from '../../assets/icon-down.svg';
import { ReactComponent as Up } from '../../assets/icon-up.svg';

import './MainCard.scss'

const MainCard = ({
	platformInfo: {
		name,
		Logo,
		stats: {
			username, 
			statType, 
			count, 
			change
		}
	}}) =>{
		console.log(name)
	return(
		<div className = 'mainCard main__mainCard'>
			<div className = 'userName mainCard__userName'>
				<Logo className = 'userName__logo'/>
				<span className = 'userName__handle'>{`${(name !== 'YouTube') ? '@' : ''}${username}`}</span>
			</div>
			<div className = 'mainCard__count'>{ count }</div>
			<div className = 'mainCard__statType'>{ statType }</div>
			<div className = 'mainChange mainCard__mainChange'>
				<span className = 'mainChange__arrow'>
				{ (change >= 0) ? 
					<Up/> : 
					<Down/>
				}
				</span>
				
				<span className = 'mainChange__changeValue'>{change}</span>
			</div>

		</div>
	)
}

export default MainCard;
