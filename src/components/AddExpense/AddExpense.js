import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import { startAddExpense } from '../../actions/expenses'
import styles from './styles.module.css'

const AddExpense = ({ dispatch, history }) => (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				dispatch(startAddExpense(expense))
				history.push('/dashboard')
			}}
		/>
	</div>
)

export default connect()(AddExpense)
