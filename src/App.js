import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EmailList from './components/AppBody/EmailList';
import Mail from './components/AppBody/Mail';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
	return (
		<Router>
			<div className='App'>
				<Header />

				<div className='app__body'>
					<Sidebar />

					<Switch>
						<Route path='/mail'>
							<Mail />
						</Route>
						<Route path='/'>
							<EmailList />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
