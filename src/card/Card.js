/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card(props) {
	return (
		<button
			onClick={props.onCardClick}
			type="button"
			className={`card${props.isHappy ? ' card--happy' : ''} ${props.isFaded ? ' card--faded' : ''}`}
		>
			<img src={props.src} alt="" />
		</button>
	);
}

Card.defaultProps = {
	isHappy: false,
	isFaded: false,
	src: 'http://placekitten.com/200/300',
};

Card.propTypes = {
	isHappy: PropTypes.bool,
	isFaded: PropTypes.bool,
	onCardClick: PropTypes.func.isRequired,
	src: PropTypes.string,
};

export default Card;
