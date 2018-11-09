import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import CookieCheck from './layout/CookieCheck';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<BrowserRouter>
					{/* <div className="App">
					<header className="App-header">
						<img src="https://melbournechapter.net/images/compass-clipart-1.png" className="App-logo" alt="logo" />
					</header>
					</div> */}
					<CookiesProvider>
						<CookieCheck />
					</CookiesProvider>
				</BrowserRouter>
			</Provider>
    );
  }
}

export default App;
