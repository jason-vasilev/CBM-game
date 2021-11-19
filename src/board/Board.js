import React from 'react';
import './index.css';
import Card from '../card/Card';

function Board() {
	const cards = [null, null, null, null, null, null, null, null, null];

	const isHappyCardPosition = Math.floor(Math.random() * cards.length);
	cards[isHappyCardPosition] = true;

	const onCardClick = (e) => {
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
		<section className="board">
			{cards.map((card, index) => {
				// eslint-disable-next-line react/no-array-index-key
				return <Card key={index} isHappy={card} onCardClick={onCardClick} />;
			})}
		</section>
	);
}

export default Board;
