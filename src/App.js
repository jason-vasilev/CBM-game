import React, { useState } from 'react';
import './App.scss';
import Start from './start/Start';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
	const [seeCredits, setSeeCredits] = useState(false);

	return (
		<div className="App">
			<header className="App-header">
				<Header onCreditsClick={() => { return setSeeCredits(!seeCredits); }} />
			</header>
			<Start seeCredits={seeCredits} />
			<Footer />
		</div>
	);
}

export default App;
