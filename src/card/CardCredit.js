import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const CardCredit = React.memo((props) => {
	const {
		seeCredits,
		authorUrl,
		author,
	} = props;

	return (
		<>
			{seeCredits && (
				<span className="card__credits">
					<a href={authorUrl} target="_blank" rel="noreferrer" className="card__credits-link">
						{`Portrait by ${author}, Unsplash`}
					</a>
				</span>
			)}
		</>
	);
});

CardCredit.defaultProps = {
	seeCredits: false,
};

CardCredit.propTypes = {
	seeCredits: PropTypes.bool,
	author: PropTypes.string.isRequired,
	authorUrl: PropTypes.string.isRequired,
};

export default CardCredit;
