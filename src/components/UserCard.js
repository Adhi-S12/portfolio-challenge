import React from 'react';
import styles from './UserCard.module.css';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import CardWrapper from '../layout/CardWrapper';

const UserCard = ({ className }) => {
	return (
		<CardWrapper className={className}>
			<article className={styles.userDetailsContainer}>
				<div className={styles.userimgContainer}>
					<img
						src={process.env.PUBLIC_URL + '/assets/user-img-placeholder.png'}
						alt="placeholder"
						className={styles.userImage}
					/>
				</div>
				<div className={styles.userDetails}>
					<div className={styles.userPrimaryDetails}>
						<div className={styles.userDetailsPersonal}>
							<h2 className={styles.userDetailsName}>Adhipathi</h2>
							<p className={styles.userDetailsRole}>Full-stack developer</p>
						</div>
						<div className={styles.userDetailsContact}>
							<div className={styles.userDetailsContactItem}>
								<AiTwotoneMail style={{ fontSize: '16px', marginRight: '10px' }} />
								adhipathi12@gmail.com
							</div>
							<div className={styles.userDetailsContactItem}>
								<AiFillPhone style={{ fontSize: '16px', marginRight: '10px' }} />
								(+91) 96**65**42
							</div>
						</div>
					</div>

					<div className={styles.userSecondaryDetails}>
						<p className={styles.userDetailsDescription}>
							Self-motivated developer, who is willing to learn and create outstanding web applications.
							<br />
							<br />
							Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.{' '}
						</p>
					</div>
				</div>
			</article>
		</CardWrapper>
	);
};

export default UserCard;
