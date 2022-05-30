import React from 'react';
import styles from './ProjectItem.module.css';

import CardWrapper from '../layout/CardWrapper';

const ProjectItem = ({ hashtags, title, description }) => {
	return (
		<CardWrapper className={styles.projectItemContainer}>
			<img src="https://via.placeholder.com/200.png" alt="project 1" className={styles.projectImage} />
			<div className={styles.projectDetails}>
				<p className={styles.projectHashtags}>{hashtags}</p>
				<h3 className={styles.projectTitle}>{title}</h3>
				<p className={styles.projectDescription}>{description}</p>
				<div className={styles.projectBtnContainer}>
					<button className={styles.demoBtn}>Demo</button>
					<button className={styles.codeBtn}>Code</button>
				</div>
			</div>
		</CardWrapper>
	);
};

export default ProjectItem;
