import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Start from './start/Start';
import Header from './header/Header';
import Footer from './footer/Footer';

function App(props) {
	const {
		onCreditsClick,
	} = props;

	return (
		<div className="App">
			<header className="App-header">
				<Header onCreditsClick="true" />
			</header>
			<Start onCreditsClick={onCreditsClick} />
			<Footer />
		</div>
	);
}

App.defaultProps = {
	onCreditsClick: false,
};

App.propTypes = {
	onCreditsClick: PropTypes.bool,
};

export default App;
