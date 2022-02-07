import React from 'react';
import './App.scss';
import Start from './start/Start';
import Header from './header/Header';
import Footer from './footer/Footer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<Start />
				<Footer />
			</header>
		</div>
	);
}

export default App;
