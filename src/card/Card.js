import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card(props) {
	const {
		onCardClick, isHappy, src,
	} = props;

	const [isFaded, setFaded] = useState(false);

	const onClickHandle = () => {
		if (isHappy) {
			onCardClick();
		} else {
			setFaded(true);
		}
	};

	return (
		<button
			onClick={onClickHandle}
			type="button"
			aria-label="Card"
			className={`card${isHappy ? ' card--happy' : ''} ${isFaded ? ' card--faded' : ''}`}
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL + src})` }}
		/>
	);
}

Card.defaultProps = {
	isHappy: false,
	src: 'http://placekitten.com/200/300',
};

Card.propTypes = {
	isHappy: PropTypes.bool,
	onCardClick: PropTypes.func.isRequired,
	src: PropTypes.string,
};

export default Card;
