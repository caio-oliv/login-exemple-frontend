import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Main from './pages/Main';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Main}/>
				<Route path="/signup" component={Signup}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
