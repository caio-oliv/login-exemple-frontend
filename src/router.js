import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import User from './pages/User';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login}/>
				<Route path="/signup" component={Signup}/>
				<Route path="/user/:id" component={User}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
