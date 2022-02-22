import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

function Header(props) {
	const {
		onCreditsClick,
	} = props;

	const onChangeHandle = () => {
		onCreditsClick();
	};

	return (
		<>
			<header>
				<hgroup>
					<h1>OptiFlex</h1>
					<h2>A Cognitive Bias Modification game</h2>
				</hgroup>
			</header>
			<div>
				<span>Show photo credits</span>
				<input type="checkbox" name="show-credits" id="show-credits" className="checkbox" onChange={onChangeHandle} />
				<label htmlFor="show-credits" />
			</div>
		</>
	);
}

Header.propTypes = {
	onCreditsClick: PropTypes.func.isRequired,
};

export default Header;
