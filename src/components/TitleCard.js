import React from 'react';
import CardWrapper from '../layout/CardWrapper';

const style = {
	padding: '22px',
	backgroundColor: '#FFF',
	borderRadius: '12px',
	fontFamily: 'Montserrat',
	fontSize: '18px',
	fontWeight: 500,
	lineHeight: '22px',
	letterSpacing: '0em',
	textAlign: 'left',
	marginBottom: '40px',
};

const TitleCard = ({ title, className }) => {
	return (
		<CardWrapper style={style} className={className}>
			{title}
		</CardWrapper>
	);
};

export default TitleCard;
