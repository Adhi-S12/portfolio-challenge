import React from 'react';
import styles from './ExperienceItem.module.css';

const ExperienceItem = ({ duration, role, desc }) => {
	return (
		<div className={styles.itemContainer}>
			<img src={process.env.PUBLIC_URL + '/assets/companyLogo.png'} alt="tcs logo" className={styles.imgContainer} />
			<div className={styles.experienceDetails}>
				<h3 className={styles.experienceDuration}>{duration}</h3>
				<h6 className={styles.experienceRole}>{role}</h6>
				<p className={styles.experienceDesc}>{desc}</p>
			</div>
		</div>
	);
};

export default ExperienceItem;
