import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../../actions/auth'
import styles from './styles.module.css'

const Header = ({ startLogout }) => (
	<header>
		<h1>Expenses</h1>
		<nav>
			<NavLink to='/dashboard' activeClassName='is-active'>
				Home
			</NavLink>
			<NavLink to='/create' activeClassName='is-active'>
				Create Expense
			</NavLink>
			<button onClick={startLogout}>Log Out</button>
		</nav>
	</header>
)
const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(Header)
