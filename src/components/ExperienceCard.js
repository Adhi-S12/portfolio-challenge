import React from 'react';
import styles from './ExperienceCard.module.css';

import CardWrapper from '../layout/CardWrapper';
import ExperienceItem from './ExperienceItem';

const experienceData = [
	{
		duration: 'Nov 2106 - May 2020',
		role: 'Full-stack developer',
		desc: 'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
	},
];

const ExperienceCard = ({ className }) => {
	return (
		<CardWrapper className={className}>
			<h3 className={styles.sectionTitle}>Experiences</h3>
			{experienceData.map((experience) => {
				return <ExperienceItem duration={experience.duration} role={experience.role} desc={experience.desc} />;
			})}
		</CardWrapper>
	);
};

export default ExperienceCard;
