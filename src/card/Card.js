import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Card(props) {
	const handleClick = (e) => {
		const { target } = e;

		if (!target) {
			return;
		}

		const happyCard = target.classList.contains('card--happy');

		if (!happyCard) {
			target.classList.add('card--faded');
		} else {
			console.log('YES');
		}
	};

	return (
		// eslint-disable-next-line react/destructuring-assignment
		<button onClick={handleClick} type="button" className={`card${props.isHappy ? ' card--happy' : ''}`}>
			<img src="https://google.com/" alt="" />
		</button>
	);
}

Card.defaultProps = {
	isHappy: false,
};

Card.propTypes = {
	isHappy: PropTypes.bool,
};

export default Card;
