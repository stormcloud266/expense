import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const Dashboard = () => (
  <div>Dashboard</div>
)
const EditExpense = () => (
  <div>EditExpense</div>
)
const CreateExpense = () => (
  <div>CreateExpense</div>
)
const Help = () => (
  <div>Help</div>
)
const NotFound = () => (
  <div>NotFound - <Link to="/">Go Home</Link></div>
)

const Header = () => (
  <header>
    <h1>Expenses</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit</NavLink>
      <NavLink to="/create" activeClassName="is-active" exact={true}>Create</NavLink>
      <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
    </nav>
  </header>
)

const routes = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/edit" exact={true} component={EditExpense} />
      <Route path="/create" exact={true} component={CreateExpense} />
      <Route path="/help" exact={true} component={Help} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
