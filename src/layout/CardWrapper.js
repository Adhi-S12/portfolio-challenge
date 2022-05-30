import React from 'react';
import styles from './CardWrapper.module.css';

const CardWrapper = ({ children, className, style }) => {
	return (
		<div className={`${styles.wrapper} ${className}`} style={style}>
			{children}
		</div>
	);
};

export default CardWrapper;
