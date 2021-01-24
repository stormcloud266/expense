import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem'
import { selectExpenses } from '../../selectors/expenses'
import styles from './styles.module.css'

const ExpenseList = (props) => (
	<div>
		<h1>ExpenseList</h1>
		{props.expenses.map((expense) => (
			<ExpenseListItem {...expense} key={expense.id} />
		))}
	</div>
)

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters),
})

export default connect(mapStateToProps)(ExpenseList)
