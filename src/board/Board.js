import React, { useState } from 'react';
import './index.css';
import Card from '../card/Card';

function Board() {
	const cards = [null, null, null, null, null, null, null, null, null];
	const isHappyCardPosition = Math.floor(Math.random() * cards.length);
	cards[isHappyCardPosition] = true;

	// eslint-disable-next-line no-unused-vars
	const [rounds, roundsCounter] = useState(0);

	const onCardClick = (e) => {
		const { target } = e;

		if (!target) { return; }

		const happyCard = target.classList.contains('card--happy');

		if (!happyCard) {
			target.classList.add('card--faded');
		} else if (rounds < 5) {
			const targetSiblings = Array.from(target.parentElement.children);

			targetSiblings.forEach((sibling) => {
				if (sibling.classList.contains('card--faded')) {
					sibling.classList.remove('card--faded');
				}
			});

			roundsCounter(rounds + 1);
		}
	};

	return (
		<>
			<h2>{`${rounds} of 5`}</h2>

			<section className="board">
				{rounds < 5 && (
					<>
						{cards.map((card, index) => {
							// eslint-disable-next-line react/no-array-index-key
							return <Card key={index} isHappy={card} onCardClick={onCardClick} />;
						})}
					</>
				) }
			</section>
		</>
	);
}

export default Board;
