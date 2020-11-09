import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'
import EditExpense from '../components/EditExpense/EditExpense'
import AddExpense from '../components/AddExpense/AddExpense'
import Help from '../components/Help/Help'
import NotFound from '../components/NotFound/NotFound'


const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/edit/:id" exact={true} component={EditExpense} />
      <Route path="/add" exact={true} component={AddExpense} />
      <Route path="/help" exact={true} component={Help} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter