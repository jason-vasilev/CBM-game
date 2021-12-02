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

	const [rounds, setRounds] = useState(0);
	const [isFaded, setFaded] = useState([]);

	// add happy card at random place in cards[]
	cards.splice(Math.floor(Math.random() * cards.length), 0, happyCard);

	const onCardClick = (e, index) => {
		const { target } = e;

		if (!target) { return; }

		const cardIsHappy = target.classList.contains('card--happy');

		if (!cardIsHappy) {
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
									key={card.id}
									isHappy={card.isHappy}
									isFaded={isFaded.indexOf(index) > -1}
									src={card.src}
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
