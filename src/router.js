import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute";

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import User from './pages/User';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={SignIn}/>
				<Route path="/signup" component={SignUp}/>
				<PrivateRoute path="/user/:id" component={User}/>
				<PrivateRoute path="/users" component={() => (<div>User list</div>)}/>
				<Route path="*" component={SignIn} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;
