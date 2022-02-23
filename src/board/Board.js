/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useState, useMemo } from 'react';
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

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); /* The maximum is inclusive and the minimum is inclusive */
}

function Board(props) {
	const {
		cardCount,
		roundsCount,
	} = props;

	const [rounds, setRounds] = useState(1);
	const [seeCredits, setSeeCredits] = useState(false);

	const cards = useMemo(() => {
		const cardsZ = getRandom(cardData.otherCards, cardCount - 1);
		const happyCard = cardData.happyCards[getRandomIntInclusive(0, cardData.happyCards.length - 1)];

		// add happy card at random place in cards[]
		cardsZ.splice(getRandomIntInclusive(0, cardsZ.length), 0, happyCard);

		return cardsZ;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cardCount, rounds]);

	const onCardClick = () => {
		setRounds(rounds + 1);
		end();
		averageTimeCalc();
	};

	start();

	const toggleCredits = () => {
		setSeeCredits(!seeCredits);
	};

	return (
		<section>
			{rounds <= roundsCount && (
				<>
					<h2 className="rounds-progress">{`${rounds} of ${roundsCount}`}</h2>
					<div>
						<span>Show photo credits</span>
						<input type="checkbox" name="show-credits" id="show-credits" className="checkbox" onChange={toggleCredits} />
						<label htmlFor="show-credits" />
					</div>
					<div className="board">
						{cards.map((card) => {
							return (
								<Card
									key={card.id + rounds}
									isHappy={card.isHappy}
									src={card.src}
									author={card.author}
									authorUrl={card.authorUrl}
									seeCredits={seeCredits}
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
