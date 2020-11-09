import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'

const Header = () => (
  <header>
    <h1>Expenses</h1>
    <nav>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active" exact={true}>Create</NavLink>
      <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
    </nav>
  </header>
)

export default Header