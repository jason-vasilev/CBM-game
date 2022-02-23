import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import CardCredit from './CardCredit';

function Card(props) {
	const {
		onCardClick,
		isHappy,
		src,
		author,
		authorUrl,
		seeCredits,
	} = props;

	const [isFaded, setFaded] = useState(false);

	const onClickHandle = (event) => {
		event.stopPropagation();
		if (isHappy) {
			onCardClick();
		} else {
			setFaded(true);
		}
	};

	return (
		<div className="card__wrapper">
			<button
				onClick={onClickHandle}
				type="button"
				aria-label="Card"
				className={`card${isHappy ? ' card--happy' : ''} ${isFaded ? ' card--faded' : ''}`}
				style={{ backgroundImage: `url(${process.env.PUBLIC_URL + src})` }}
			/>
			{author && (
				<CardCredit author={author} authorUrl={authorUrl} seeCredits={seeCredits} />
			)}
		</div>
	);
}

Card.defaultProps = {
	isHappy: false,
	seeCredits: false,
	src: 'http://placekitten.com/200/300',
	author: '',
	authorUrl: '',
};

Card.propTypes = {
	isHappy: PropTypes.bool,
	seeCredits: PropTypes.bool,
	onCardClick: PropTypes.func.isRequired,
	src: PropTypes.string,
	author: PropTypes.string,
	authorUrl: PropTypes.string,
};

export default Card;
