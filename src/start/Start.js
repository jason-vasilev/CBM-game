/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Board from '../board/Board';
import './Start.scss';

function Start(props) {
	const {
		seeCredits,
	} = props;

	const [startGame, setStartGame] = useState(false);
	const [cardCount, setCardCount] = useState(9);
	const [roundsCount, setRoundsCount] = useState(5);

	const onClickHandle = () => {
		setStartGame(true);
	};

	const onCardCountChange = (e) => {
		const inputCardCount = e.target.value;

		if (inputCardCount > 10) {
			setCardCount(10);
		} else if (inputCardCount < 2) {
			setCardCount(2);
		} else {
			setCardCount(inputCardCount);
		}
	};

	const onRoundsCountChange = (e) => {
		const inputRoundsCount = e.target.value;

		if (inputRoundsCount > 50) {
			setRoundsCount(50);
		} else if (inputRoundsCount < 2) {
			setRoundsCount(2);
		} else {
			setRoundsCount(inputRoundsCount);
		}
	};

	return (
		<>
			{!startGame && (
				<>
					<p>
						Are you catching yourself more grumpy than not? Have you been often told that you focus too much on the negative? Don&apos;t worry, you are not alone in this. Actually, many people are like you (and me). Unfortunately, it&apos;s a loop that doesn&apos;t affect just you, but also your closest and dearest. Fortunately, science has prooven that through few simple exercises this can be changed. You can start regonizing the positive around you easier. This can be achieved through practices as
						{' '}
						<a href="https://en.wikipedia.org/wiki/Cognitive_bias_modification" target="_blank" rel="noreferrer noopener">Cognitve Bias Modification</a>
						.
					</p>

					<p>The following is a simple game that will assist you set goals and achieve them, in looking on the bright side of life. It&apos;s easy - find and tap or click on the happy expression among a set of random cards. You set the number of cards on deck and number of rounds, we take care of the shuffle.</p>

					<p>
						I&apos;d like to flex for
						<input title="Count of rounds" id="rounds-count" type="number" min="2" max="50" value={roundsCount} onChange={onRoundsCountChange} />
						rounds with
						<input title="Count of cards" id="card-count" type="number" min="2" max="10" value={cardCount} onChange={onCardCountChange} />
						cards, please.
					</p>

					<button
						type="button"
						onClick={onClickHandle}
						className="btn start-btn"
					>
						<span className="start-btn__text">
							Start
						</span>

						<span className="start-btn__hover">
							Here we go &rarr;
						</span>
					</button>
				</>
			)}

			{startGame && <Board seeCredits={seeCredits} cardCount={cardCount} roundsCount={roundsCount} />}
		</>
	);
}

Start.defaultProps = {
	seeCredits: false,
};

Start.propTypes = {
	seeCredits: PropTypes.bool,
};

export default Start;
