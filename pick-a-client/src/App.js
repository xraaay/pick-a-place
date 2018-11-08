import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContentRouter from './components/ContentRouter'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
		<React.Fragment>
			{/* <div className="App">
			<header className="App-header">
				<img src="https://melbournechapter.net/images/compass-clipart-1.png" className="App-logo" alt="logo" />
			</header>
			</div> */}
			<Header />
			<ContentRouter />
		</React.Fragment>
    );
  }
}

export default App;
