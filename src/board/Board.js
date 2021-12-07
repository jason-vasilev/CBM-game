/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import Card from '../card/Card';
import cardData from '../data/cards-data.json';
import './style.css';

function getRandom(arr, n) {
	const result = new Array(n);
	let len = arr.length;
	const taken = new Array(len);
	if (n > len) {
		throw new RangeError('getRandom: more elements taken than available');
	}

	// TODO fix without eslint-disable exception
	while (n--) {
		const x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}

	return result;
}

function Board() {
	const cards = getRandom(cardData.otherCards, 8);
	const happyCard = cardData.happyCards[Math.floor(Math.random() * cardData.happyCards.length)];

	const [rounds, setRounds] = useState(1);

	// add happy card at random place in cards[]
	cards.splice(Math.floor(Math.random() * cards.length), 0, happyCard);

	const onCardClick = () => { setRounds(rounds + 1); };

	return (
		<section>
			{rounds <= 5 && (
				<>
					<h2>{`${rounds} of 5`}</h2>
					<div className="board">
						{cards.map((card) => {
							return (
								<Card
									key={card.id + rounds}
									isHappy={card.isHappy}
									src={card.src}
									onCardClick={onCardClick}
								/>
							);
						})}
					</div>
				</>
			) }
		</section>
	);
}

export default Board;
