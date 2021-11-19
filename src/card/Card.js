import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Card(props) {
	return (
		// eslint-disable-next-line react/destructuring-assignment
		<button onClick={props.onCardClick} type="button" className={`card${props.isHappy ? ' card--happy' : ''}`}>
			<img src="https://google.com/" alt="" />
		</button>
	);
}

Card.defaultProps = {
	isHappy: false,
};

Card.propTypes = {
	isHappy: PropTypes.bool,
	onCardClick: PropTypes.func.isRequired,
};

export default Card;
