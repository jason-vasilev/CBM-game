import React, { useState } from 'react';
import './index.css';
import Card from '../card/Card';

function Board() {
	const cards = [null, null, null, null, null, null, null, null, null];
	const isHappyCardPosition = Math.floor(Math.random() * cards.length);
	cards[isHappyCardPosition] = true;

	// eslint-disable-next-line no-unused-vars
	const [rounds, setRounds] = useState(0);
	const [isFaded, setFaded] = useState([]);

	const onCardClick = (e, index) => {
		const { target } = e;

		if (!target) { return; }

		const happyCard = target.classList.contains('card--happy');

		if (!happyCard) {
			setFaded((fadedIndex) => { return [...fadedIndex, index]; });
		} else if (rounds < 5) {
			setRounds(rounds + 1);
		}
	};

	return (
		<>
			<h2>{`${rounds} of 5`}</h2>

			<section className="board">
				{rounds < 5 && (
					<>
						{cards.map((card, index) => {
							return (
								<Card
									// eslint-disable-next-line react/no-array-index-key
									key={index}
									isHappy={card}
									isFaded={isFaded.indexOf(index) > -1}
									onCardClick={(e) => { onCardClick(e, index); }}
								/>
							);
						})}
					</>
				) }
			</section>
		</>
	);
}

export default Board;
