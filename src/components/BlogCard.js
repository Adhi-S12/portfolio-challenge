import React from 'react';
import styles from './BlogCard.module.css';
import CardWrapper from '../layout/CardWrapper';

const BlogCard = ({ className }) => {
	return (
		<CardWrapper className={`${className} ${styles.blogCard}`}>
			<div className={styles.leftSide}>
				<p className={styles.blogHeader}>Blog</p>
				<h2 className={styles.blogTitle}>How to organize your CSS</h2>
				<p className={styles.blogDescription}>
					In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat
					nisl, a luctus mi.
				</p>
				<p className={styles.blogDescription}>
					Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
				</p>
				<a href="#" className={styles.blogLink}>
					dev.to
				</a>
			</div>
			<div className={styles.rightSide}>
				<img src="https://place-hold.it/450x350" alt="blog image" className={styles.blogImage} />
			</div>
		</CardWrapper>
	);
};

export default BlogCard;
