import React from 'react';
import styles from './HobbyItem.module.css';

const HobbyItem = ({ title, desc }) => {
	return (
		<article className={styles.hobbyItemContainer}>
			<img src="https://place-hold.it/350x150" alt="hobby 1" className={styles.hobbyImage} />
			<h3 className={styles.hobbyTitle}>{title}</h3>
			<p className={styles.hobbyDesc}>{desc}</p>
		</article>
	);
};

export default HobbyItem;
