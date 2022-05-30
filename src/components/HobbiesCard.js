import React from 'react';
import CardWrapper from '../layout/CardWrapper';
import styles from './HobbiesCard.module.css';
import HobbyItem from './HobbyItem';

const hobbyData = [
	{ desc: 'Quisque feugiat malesuada molestie.', title: 'Gaming' },
	{ desc: 'Quisque feugiat malesuada molestie.', title: 'Cooking' },
	{ desc: 'Quisque feugiat malesuada molestie.', title: 'biking' },
];

const HobbiesCard = ({ className }) => {
	return (
		<CardWrapper className={`${styles.hobbiesContainer} ${className}`}>
			<h3 className={styles.hobbiesTitle}>Hobbies</h3>
			<div className="hobbyList">
				{hobbyData.map((hobby) => {
					return <HobbyItem desc={hobby.desc} title={hobby.title} />;
				})}
			</div>
		</CardWrapper>
	);
};

export default HobbiesCard;
