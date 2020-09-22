import React from 'react';
import ChangeArrow from '../ChangeArrow/ChangeArrow';

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
			<div className = {`${name}Border mainCart__border`}/>
			<h4 className = 'userName mainCard__userName'>
				<Logo className = 'userName__logo'/>
				<span className = 'userName__handle'>{`${(name !== 'YouTube') ? '@' : ''}${username}`}</span>
			</h4>
			<h5 className = 'mainCard__count'>{ count }</h5>
			<h4 className = 'mainCard__statType'>{ statType }</h4>
			<ChangeArrow 
				className = 'mainChange mainCard__mainChange'
				change = {change}
				unit = ' Today'
			/>

		</div>
	)
}

export default MainCard;
