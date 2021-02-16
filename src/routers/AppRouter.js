import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Login from '../components/Login/Login'
import Dashboard from '../components/Dashboard/Dashboard'
import EditExpense from '../components/EditExpense/EditExpense'
import AddExpense from '../components/AddExpense/AddExpense'
import Help from '../components/Help/Help'
import NotFound from '../components/NotFound/NotFound'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<PublicRoute path='/' exact={true} component={Login} />
			<PrivateRoute path='/dashboard' exact={true} component={Dashboard} />
			<PrivateRoute path='/edit/:id' exact={true} component={EditExpense} />
			<PrivateRoute path='/create' exact={true} component={AddExpense} />
			<Route component={NotFound} />
		</Switch>
	</Router>
)

export default AppRouter
