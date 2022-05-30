import React from 'react';

const Footer = () => {
	return (
		<footer style={{ marginTop: '100px' }}>
			<p
				style={{
					fontSize: '14px',
					fontWeight: 500,
					lineHeight: '17px',
					letterSpacing: '0em',
					textAlign: 'center',
					color: '#828282',
				}}
			>
				created by{' '}
				<span
					style={{
						fontSize: '14px',
						fontWeight: 700,
						lineHeight: '17px',
						letterSpacing: '0em',
						textAlign: 'center',
						color: '#000',
					}}
				>
					Adhi
				</span>{' '}
				- devChallenges.io
			</p>
		</footer>
	);
};

export default Footer;
