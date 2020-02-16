import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login}/>
				<Route path="/signup" component={Signup}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
