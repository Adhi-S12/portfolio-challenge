import React from 'react';
import styles from './SkillsCard.module.css';
import CardWrapper from '../layout/CardWrapper';

const SkillsCard = ({ data, className }) => {
	return (
		<CardWrapper className={`${styles.skillCard} ${className}`}>
			<h2 className={styles.Title}>Front-End</h2>
			<div className={styles.skillsContainer}>
				{data.map((item) => {
					return <SkillBar title={item.title} percent={item.percent} />;
				})}
			</div>
		</CardWrapper>
	);
};

const SkillBar = ({ title, percent }) => {
	const percentWidth = 100 + percent;
	return (
		<div className={styles.skill}>
			<h3 className={styles.skillTitle}>{title}</h3>
			<div className={styles.skillBar}>
				<div className={styles.skillLevel} style={{ width: percentWidth }} />
			</div>
		</div>
	);
};

export default SkillsCard;
