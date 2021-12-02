/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Card(props) {
	console.log(props.isFaded);

	return (
		<button
			onClick={props.onCardClick}
			type="button"
			className={`card${props.isHappy ? ' card--happy' : ''} ${props.isFaded ? ' card--faded' : ''}`}
		>
			<img src="https://google.com/" alt="" />
		</button>
	);
}

Card.defaultProps = {
	isHappy: false,
	isFaded: false,
};

Card.propTypes = {
	isHappy: PropTypes.bool,
	isFaded: PropTypes.bool,
	onCardClick: PropTypes.func.isRequired,
};

export default Card;
