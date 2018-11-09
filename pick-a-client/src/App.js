import React, { Component } from 'react';
import './App.css';
import ContentRouter from './layout/ContentRouter'
import Nav from './layout/Nav';
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				{/* <div className="App">
				<header className="App-header">
					<img src="https://melbournechapter.net/images/compass-clipart-1.png" className="App-logo" alt="logo" />
				</header>
				</div> */}
				<Layout />
			</BrowserRouter>
    );
  }
}

export default App;
