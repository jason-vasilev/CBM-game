/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import cardData from '../data/cards-data.json';
import './Board.scss';

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

let endTime;
let startTime;

const roundsTime = [];

function start() {
	startTime = performance.now();
}

function end() {
	let timeDiff;
	endTime = performance.now();
	timeDiff = endTime - startTime;
	timeDiff /= 1000;

	roundsTime.push(timeDiff);
	console.log(roundsTime);
}

function averageTimeCalc() {
	let averageTime = roundsTime.reduce((a, b) => {
		return a + b;
	});

	averageTime /= roundsTime.length;

	averageTime = averageTime.toFixed(2);

	console.log(averageTime, ' FINAL average time');
}

function Board(props) {
	const {
		cardCount,
		roundsCount,
	} = props;

	const cards = getRandom(cardData.otherCards, cardCount - 1);
	const happyCard = cardData.happyCards[Math.floor(Math.random() * cardData.happyCards.length)];

	const [rounds, setRounds] = useState(1);

	// add happy card at random place in cards[]
	cards.splice(Math.floor(Math.random() * cards.length), 0, happyCard);

	const onCardClick = () => {
		setRounds(rounds + 1);
		end();
		averageTimeCalc();
	};

	start();

	return (
		<section>
			{rounds <= roundsCount && (
				<>
					<h2 className="rounds-progress">{`${rounds} of ${roundsCount}`}</h2>
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

Board.defaultProps = {
	cardCount: 9,
	roundsCount: 5,
};

Board.propTypes = {
	cardCount: PropTypes.number,
	roundsCount: PropTypes.number,
};

export default Board;
