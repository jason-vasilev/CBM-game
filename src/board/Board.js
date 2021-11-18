import React from 'react';
import './index.css';
import Card from '../card/Card';

function Board() {
	const cards = [null, null, null, null, null, null, null, null, null];

	const isHappyCardPosition = Math.floor(Math.random() * cards.length);
	cards[isHappyCardPosition] = true;

	return (
		<section className="board">
			{cards.map((card, index) => {
				// eslint-disable-next-line react/no-array-index-key
				return <Card key={index} isHappy={card} />;
			})}
		</section>
	);
}

export default Board;
